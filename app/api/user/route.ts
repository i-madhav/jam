import { Webhook, WebhookRequiredHeaders } from "svix";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const webhookSecret = process.env.WEBHOOK_SECRET;

// Define the type for webhook event data
type WebhookEvent = {
  type: string;
  data: {
    id: string;
    email_addresses: Array<{
      email_address: string;
      id: string;
    }>;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
  };
};

async function validateRequest(request: Request) {
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };

  if (!heads["svix-id"] || !heads["svix-timestamp"] || !heads["svix-signature"]) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  const payload = await request.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(webhookSecret || "");

  try {
    // Verify returns the parsed webhook payload
    const evt = wh.verify(body, heads as WebhookRequiredHeaders) as WebhookEvent;
    return evt;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }
}

export async function POST(request: Request) {
  const evt = await validateRequest(request);
  
  if (evt instanceof NextResponse) {
    return evt;
  }

  const eventType = evt.type;
  const { id, email_addresses, username } = evt.data;

  // Make sure we have an email address
  const email = email_addresses[0]?.email_address;
  if (!email) {
    return new NextResponse("No email address provided", { status: 400 });
  }

  if (eventType === "user.created" || eventType === "user.updated") {
    try {
      await prisma.user.upsert({
        where: { 
          clerkId: id 
        },
        update: {
          email: email,
          username: username || null
        },
        create: {
          clerkId: id,
          email: email,
          username: username || null
        },
      });

      return new NextResponse("User synced", { status: 200 });
    } catch (error) {
      console.error("Error syncing user:", error);
      return new NextResponse("Error syncing user", { status: 500 });
    }
  }

  return new NextResponse("Event type not handled", { status: 400 });
}