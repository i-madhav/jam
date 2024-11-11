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
        <div className=" rounded-full h-14 w-14 bg-primary-600"></div>
      </div>

      <div className=" grid grid-cols-2 gap-2">
        {/* Card start */}
        {/* {card one} */}
        <div className=" bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-zinc-800 max-w-lg">
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
              Create an exclusive listening session with your friends using a
              unique room code.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter room name"
                  className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>
              <button className="w-full bg-[#1DB954] hover:bg-[#1aa34a] text-black font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Create Room</span>
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

        {/* {card two} */}
        <div className=" bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-zinc-800 max-w-lg ">
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
                  className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Room description (optional)"
                  className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Create Public Room</span>
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
        {/* {card two} */}

        {/* card three */}
        <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB954]/5 border border-zinc-800 hover:border-purple-500/20">
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
          </div>
        </div>
        {/* card three */}
        {/* {card end} */}
      </div>
    </div>
  );
};

export default page;
