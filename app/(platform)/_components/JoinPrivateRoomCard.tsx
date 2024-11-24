import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const JoinPrivateRoomCard = () => {
  return (
    <BackgroundGradient>
      <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB954]/5 border border-zinc-800 hover:border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>

        <div>
          <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">
            Join Private Room
          </h3>
          <p className="text-zinc-400 mb-4">
            Enter a room code to join an exclusive listening session.
          </p>

          <div className="space-y-4">
            <div className="relative">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter room code"
                  className="flex-1 border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors tracking-wider font-mono"
                />
                <button className="bg-[#121212] border border-zinc-800 hover:border-purple-500/50 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <span className=" font-bold font-sans">Join Room</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm">Room code required to join</span>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default JoinPrivateRoomCard;
