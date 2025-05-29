"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ fontClassName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavShrunk, setIsNavShrunk] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const isProjectsActive = pathname.startsWith("/projects");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when navigating
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setIsNavShrunk(true);
      } else {
        setIsNavShrunk(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`${fontClassName} fixed top-0 left-0 z-50 w-full bg-[#000011] transition-all duration-300 ease-in-out ${
          isNavShrunk ? "py-2 md:py-3 shadow-md" : "py-3 md:py-4 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 transition-all duration-300 ease-in-out">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl md:text-1xl font-bold text-white">MY PORTFOLIO</h1>
            </Link>
          </div>

          {/* Burger Icon for Mobile and Tablet */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links for Medium and Large Screens */}
          <nav id="nav-menu" className="hidden md:block md:static md:flex md:items-center md:space-x-6 lg:space-x-8">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 text-sm md:text-base font-medium">
              <li>
                <Link
                  href="/"
                  className={`block px-4 py-2 transition-transform transform duration-300 ease-in-out hover:scale-105 rounded ${
                    isActive("/") ? "text-white bg-sky-500/50 shadow-lg" : "text-gray-300 hover:text-white hover:bg-transparent"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block px-4 py-2 transition-transform transform duration-300 ease-in-out hover:scale-105 rounded ${
                    isActive("/about") ? "text-white bg-sky-500/50 shadow-lg" : "text-gray-300 hover:text-white hover:bg-transparent"
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className={`block px-4 py-2 transition-transform transform duration-300 ease-in-out hover:scale-105 rounded ${
                    isProjectsActive ? "text-white bg-sky-500/50 shadow-lg" : "text-gray-300 hover:text-white hover:bg-transparent"
                  }`}
                >
                  Projects
                  <svg
                    className={`inline-block ml-2 w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md ${isDropdownOpen ? "block" : "hidden"}`}>
                  <li>
                    <Link href="/projects/game-design" className="block px-4 py-2 text-gray-900 hover:bg-orange-100" onClick={() => setIsDropdownOpen(false)}>
                      Game Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/level-design" className="block px-4 py-2 text-gray-900 hover:bg-orange-100" onClick={() => setIsDropdownOpen(false)}>
                      Level Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/game-development" className="block px-4 py-2 text-gray-900 hover:bg-orange-100" onClick={() => setIsDropdownOpen(false)}>
                      Game Dev
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

      {/* Sidebar for Smaller Screens */}
<div
  className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transform ${
    isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  } transition-opacity duration-300 ease-in-out`}
>
  <div
    className={`fixed top-0 left-0 w-64 h-full bg-gray-900 z-50 p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
      isMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Close Button */}
    <button
      onClick={toggleMenu}
      className="absolute top-4 right-4 text-gray-300 focus:outline-none"
      aria-label="Close menu"
    >
      <svg
        className="w-6 h-6 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <ul className="flex flex-col space-y-4 text-base font-medium mt-8">
      <li>
        <Link
          href="/"
          onClick={toggleMenu}
          className={`block px-4 py-2 transition-transform transform duration-300 ease-in-out hover:scale-105 rounded ${
            isActive("/")
              ? "text-white bg-sky-500/50 shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-sky-700/30"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={toggleMenu}
          className={`block px-4 py-2 transition-transform transform duration-300 ease-in-out hover:scale-105 rounded ${
            isActive("/about")
              ? "text-white bg-sky-500/50 shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-sky-700/30"
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/projects/game-design"
          onClick={toggleMenu}
          className={`block px-4 py-2 transition-transform transform duration-300 ease-in-out hover:scale-105 rounded ${
            isProjectsActive
              ? "text-white bg-sky-500/50 shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-sky-700/30"
          }`}
        >
          Projects
        </Link>
        <ul className="pl-4 space-y-2 mt-2">
          <li>
            <Link
              href="/projects/game-design"
              onClick={toggleMenu}
              className={`block px-4 py-2 rounded ${
                isActive("/projects/game-design")
                  ? "text-white bg-sky-500/50"
                  : "text-gray-300 hover:bg-sky-700/30 hover:text-white"
              }`}
            >
              Game Design
            </Link>
          </li>
          <li>
            <Link
              href="/projects/level-design"
              onClick={toggleMenu}
              className={`block px-4 py-2 rounded ${
                isActive("/projects/level-design")
                  ? "text-white bg-sky-500/50"
                  : "text-gray-300 hover:bg-sky-700/30 hover:text-white"
              }`}
            >
              Level Design
            </Link>
          </li>
          <li>
            <Link
              href="/projects/game-development"
              onClick={toggleMenu}
              className={`block px-4 py-2 rounded ${
                isActive("/projects/game-development")
                  ? "text-white bg-sky-500/50"
                  : "text-gray-300 hover:bg-sky-700/30 hover:text-white"
              }`}
            >
              Game Dev
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
      </header>

    </>
  );
}
