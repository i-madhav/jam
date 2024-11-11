"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import React from "react";

const page = () => {
  return (
    <div className=" w-full">
      <div className=" flex items-center justify-between p-6">
        <div>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#1DB954] to-blue-400 text-transparent bg-clip-text animate-gradient">
            Welcome to Jam
          </p>
          <p className="text-zinc-400 mt-2">
            Create or join a room to start listening with friends
          </p>
        </div>
        <div className=" rounded-full h-14 w-14 bg-primary-600 text-white font-bold font-sans flex items-center justify-center">M</div>
      </div>

      <div className=" grid grid-cols-2 gap-14 items-center justify-center mx-auto p-6 w-fit">
        {/* Card start */}
        {/* {card one} */}
        <div className="w-fit">
          <BackgroundGradient className="">
            <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-zinc-800 max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className=" relative">
                <div className="h-12 w-12 bg-[#1DB954]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#1DB954]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  Create Private Room
                </h3>
                <p className="text-zinc-400 mb-4">
                  Create an exclusive listening session with your friends using
                  a unique room code.
                </p>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter room name"
                      className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-[#1DB954] transition-colors"
                    />
                     <input
                      type="text"
                      placeholder="Room description(optional)"
                      className="w-full mt-3 bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-[#1DB954] transition-colors"
                    />
                  </div>
                  <button className="w-full bg-[#1DB954] hover:bg-[#1aa34a] text-black font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <span className=" font-bold font-sans">Create Room</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
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
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm">Only invited users can join</span>
              </div>
            </div>
          </BackgroundGradient>
        </div>

        {/* {card two} */}
        <BackgroundGradient>
          <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-zinc-800 max-w-lg ">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

            <div>
              <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Create Public Room
              </h3>
              <p className="text-zinc-400 mb-4">
                Start a public listening session that anyone can join and vibe
                together.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter room name"
                    className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Room description (optional)"
                    className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  <span className=" font-bold font-sans">Create Public Room</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
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
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="text-sm">Anyone can join and listen</span>
              </div>
            </div>
          </div>
        </BackgroundGradient>
        {/* {card two} */}

        {/* card three */}
        <BackgroundGradient>
          <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB954]/5 border border-zinc-800 hover:border-purple-500/20 max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>

            <div className="relative">
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
        {/* card three */}

        <BackgroundGradient>
          <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB954]/5 border border-zinc-800 hover:border-emerald-500/20 max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

            <div className="relative">
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Browse Public Rooms
              </h3>
              <p className="text-zinc-400 mb-4">
                Discover active listening sessions and join the vibe.
              </p>

              <div className="space-y-4">
                <div className="bg-dark/50 rounded-lg p-3 border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img
                        src="https://avatar.iran.liara.run/public"
                        className="w-6 h-6 rounded-full ring-2 ring-dark"
                      />
                      <img
                        src="https://avatar.iran.liara.run/public"
                        className="w-6 h-6 rounded-full ring-2 ring-dark"
                      />
                      <img
                        src="https://avatar.iran.liara.run/public"
                        className="w-6 h-6 rounded-full ring-2 ring-dark"
                      />
                    </div>
                    <span className="text-zinc-400 text-sm">
                      234 active rooms
                    </span>
                  </div>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group">
                  <span className=" font-bold font-sans">Explore Rooms</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-0.5 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div className="mt-4 flex items-center gap-2 text-zinc-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="text-sm">Anyone can join and Browse Room</span>
              </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
        {/* {card end} */}
      </div>
    </div>
  );
};

export default page;
