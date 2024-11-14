"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Users, Send, Play, Pause, Search, UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const RoomPage = () => {
  const { roomid } = useParams();
  const [musicLink, setMusicLink] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { user: "System", message: "Welcome to Jam!" },
    { user: "Alice", message: "Hey everyone!" },
    { user: "Bob", message: "What song should we play next?" },
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [newUser, setNewUser] = useState("");
  const [participants, setParticipants] = useState(["Alice", "Bob", "Charlie"]);

  const handleSubmitLink = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted link:", musicLink);
    setMusicLink("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { user: "You", message: currentMessage },
      ]);
      setCurrentMessage("");
    }
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.trim() && !participants.includes(newUser)) {
      setParticipants([...participants, newUser]);
      setNewUser("");
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className=" flex items-center justify-between p-10 mb-10">
        <div>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#1DB954] to-blue-400 text-transparent bg-clip-text animate-gradient">
            Welcome to Jam
          </p>
          <p className="text-zinc-400 mt-2">
            Create or join a room to start listening with friends
          </p>
        </div>
        <div className=" rounded-full h-14 w-14 bg-primary-600 text-white font-bold font-sans flex items-center justify-center">
          M
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Music Link Input and Search */}
        <div className="rounded-lg shadow md:col-span-2 h-full">
          <BackgroundGradient className="bg-black h-full rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 text-white font-sans">
              Add Music
            </h2>
            <form onSubmit={handleSubmitLink} className="flex gap-2 mb-4">
              <Input
                type="url"
                placeholder="Paste YouTube link here"
                value={musicLink}
                onChange={(e) => setMusicLink(e.target.value)}
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-[#1DB954] font-bold font-sans"
              >
                Add
              </Button>
            </form>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for a song"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-[#1DB954]">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </BackgroundGradient>
        </div>

        {/* Participants Count and Add User */}
        <div className=" rounded-lg shadow h-full">
          <BackgroundGradient className="bg-black h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-sans text-white font-bold">
                Participants
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-sans">
                      Add User to Room
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddUser} className="flex gap-2 mt-4">
                    <Input
                      type="text"
                      placeholder="Enter username"
                      value={newUser}
                      onChange={(e) => setNewUser(e.target.value)}
                      className="flex-grow"
                    />
                    <Button type="submit">Add</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center justify-center text-2xl mb-4">
              <Users className="mr-2 h-6 w-6 fill-white stroke-white" />
              <span className="font-sans text-white font-bold">
                {participants.length}
              </span>
            </div>
            <ScrollArea className="h-[150px]">
              <ul className="space-y-2">
                {participants.map((user, index) => (
                  <li key={index} className="font-sans text-white font-bold">
                    {user}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </BackgroundGradient>
        </div>

        {/* Music Player */}
        <div className="rounded-lg shadow md:col-span-2">
          <BackgroundGradient className="bg-black h-full p-4">
            <h2 className="text-lg font-semibold mb-2 text-white font-sans">
              Now Playing
            </h2>
            <div className="aspect-video bg-black border-white border mb-4 flex items-center justify-center">
              <span className="text-white font-sans">Video Player</span>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#1DB954]"
              >
                {isPlaying ? (
                  <Pause className="mr-2 h-4 w-4" />
                ) : (
                  <Play className="mr-2 h-4 w-4" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </Button>
            </div>
          </BackgroundGradient>
        </div>

        {/* Playlist */}
        <div className="rounded-lg shadow">
          <BackgroundGradient className="bg-black p-4 h-full">
            <h2 className="text-lg font-semibold mb-2 text-white font-sans">
              Playlist
            </h2>
            <ScrollArea className="h-[200px]">
              <ul className="space-y-2 text-white font-sans">
                <li>Song 1 - Artist 1</li>
                <li>Song 2 - Artist 2</li>
                <li>Song 3 - Artist 3</li>
              </ul>
            </ScrollArea>
          </BackgroundGradient>
        </div>

        {/* Chat Section */}
        <div className=" rounded-lg shadow md:col-span-3">
          <BackgroundGradient className="p-4 h-full bg-black">
            <h2 className="text-lg font-semibold mb-2 text-white font-sans">
              Chat
            </h2>
            <ScrollArea className="h-[300px] mb-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold text-white font-sans">
                    {msg.user}:{" "}
                  </span>
                  <span className="text-white font-sans">{msg.message}</span>
                  {index < chatMessages.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                type="text"
                placeholder="Type a message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-[#1DB954]">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
