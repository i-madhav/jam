"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navRef = useRef(null);
  const arrowRef = useRef(null);
  const router = useRouter();
  const menuItems = ["Go Jam", "Pricing", "Connect on X"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".menu-item", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(".cta-button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      });

      // Constant left-right animation for the arrow
      gsap.to(arrowRef.current, {
        x: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      color: "#000",
      duration: 0.3,
    });
  };

  const handleHoverExit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      color: "#666",
      duration: 0.3,
    });
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
    });
  };

  const handleButtonHoverExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
    });
  };

  // New handler for the Login button
  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-2xl px-4"
    >
      <div className="flex items-center justify-between rounded-full bg-white px-6 py-3 shadow-lg">
        <a href="/" className="flex items-center space-x-2">
          <svg
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-xl font-bold hidden sm:inline">Jam</span>
        </a>

        <div className="flex items-center space-x-4 sm:space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="menu-item relative text-xs sm:text-sm font-medium text-gray-600 transition-colors duration-200"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <span className="hidden sm:inline">{item}</span>
              <span className="sm:hidden">{item.charAt(0)}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <button
          className="cta-button rounded-full bg-black text-white transition-colors duration-200 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonHoverExit}
          onClick={handleLoginClick} // Attach the click handler here
        >
          <span className="flex items-center space-x-1 sm:space-x-2">
            <span className="hidden sm:inline">Login</span>
            <span className="sm:hidden">Login</span>
            <svg
              ref={arrowRef}
              className="h-3 w-3 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;