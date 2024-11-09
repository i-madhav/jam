"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const MarketingPage = () => {
  return (
    <div className="h-screen ">
      <BackgroundBeamsWithCollision className="p-4 md:p-0">
        <h1 className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
          Ready to Jam? Dive into the Beat and Connect with Friends!
          <div className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-400 font-medium text-center">
            Experience music like never before – create your vibe, join public
            rooms, and jam with thousands.
          </div>
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mt-6">
            <div className="relative mx-auto inline-block w-max mt-6">
              <div
                className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #8b5cf6, #a78bfa, #ec4899, #8b5cf6)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-animation 3s ease infinite",
                }}
              >
                <span className="">Start Your Jam Today</span>
              </div>
              <div
                className="relative bg-clip-text text-transparent bg-no-repeat py-4"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #8b5cf6, #a78bfa, #ec4899, #8b5cf6)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-animation 3s ease infinite",
                }}
              >
                <span className="">Start Your Jam Today</span>
              </div>
              <style jsx>{`
                @keyframes gradient-animation {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
              `}</style>
            </div>
          </div>
          {/* Motivational Text Inside BackgroundGradient */}
          <div className="m-auto md:flex flex-1 items-center gap-3 justify-center mt-8 space-y-3 md:space-y-0">
            <BackgroundGradient className="rounded-sm bg-white dark:bg-zinc-900 p-4 md:w-90">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 text-center">
                Host live music parties with friends worldwide!
              </p>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-sm bg-white dark:bg-zinc-900 p-4 md:w-90">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 text-center">
                Transform solo listening into shared adventures.
              </p>
            </BackgroundGradient>
          </div>
          <div className="m-auto md:w-fit mt-3">
            <BackgroundGradient className="rounded-sm bg-white dark:bg-zinc-900 p-4 md:w-90">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 text-center">
                Join public rooms and feel the electrifying vibe!
              </p>
            </BackgroundGradient>
          </div>
        </h1>
      </BackgroundBeamsWithCollision>
      <div className="bg-gradient-to-b from-[#FFC0CB]/30 via-[#c1b0fc]/20 to-[#e296d5]/10 bg-black text-white p-14 ">
        <h1 className="text-xl md:text-6xl font-bold bg-gradient-to-b from-[#FFC0CB] via-[#c1b0fc] to-[#e296d5] text-transparent bg-clip-text w-full text-center mb-6 pt-20">
          Experience Music Like Never Before with Jam!
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex items-center p-4 gap-5">
            <BackgroundGradient>
              <CardSpotlight className=" p-5 flex flex-col justify-between">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Your Jam Experience - 5 Free Credits!
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  Start exploring *Jam* with **5 free credits**! Each credit
                  allows you to create a private or public music room, perfect
                  for connecting with friends or meeting new people through
                  shared music experiences.
                  <ul className="list-none mt-2">
                    <Step title="Create or Join a Room" />
                    <Step title="Paste the link of the song be played inside the room" />
                    <Step title="Engage and Connect" />
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  After using your 5 free credits, you can continue creating new
                  rooms for just **$2 per room**. Enjoy limitless music,
                  meaningful connections, and an ever-growing community of music
                  lovers.
                </p>
              </CardSpotlight>
            </BackgroundGradient>

            <BackgroundGradient>
              <CardSpotlight className=" p-5 flex flex-col justify-between">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Discover Public Rooms
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  Join public rooms on *Jam* to experience music with thousands
                  of other listeners. Each room has a unique vibe, allowing you
                  to find the perfect soundtrack for any mood.
                  <ul className="list-none mt-2">
                    <Step title="Browse Trending Rooms" />
                    <Step title="Listen and Interact" />
                    <Step title="Meet Like-Minded Listeners" />
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  Public rooms are a great way to expand your musical horizons
                  and become part of an energetic community. Join a room today
                  and see where the music takes you!
                </p>
              </CardSpotlight>
            </BackgroundGradient>

            <BackgroundGradient>
              <CardSpotlight className=" p-5 flex flex-col justify-between">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Create Your Private Room
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  Share the music you love with the people who matter most.
                  Create a private room on *Jam* and invite your friends,
                  family, or someone special to experience music together.
                  <ul className="list-none mt-2">
                    <Step title="Start a Private Room" />
                    <Step title="Customize Your Playlist" />
                    <Step title="Chat and React in Real-Time" />
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  Private rooms let you create intimate, memorable music
                  sessions with those closest to you. Start your first private
                  room on *Jam* today!
                </p>
              </CardSpotlight>
            </BackgroundGradient>
          </div>
        </div>
      </div>

      <div className="pricing_component ">
        <h1 className="font-semibold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent">
          Pricing for you to JAM
        </h1>
      </div>
    </div>
  );
};

export default MarketingPage;
