import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer({ fontClassName }) {
  return (
    <footer className={`${fontClassName} bg-neutral-900 text-gray-400 w-full flex flex-col items-center py-10 px-6 lg:py-14 lg:px-12 space-y-4`}>
      
      <hr className="w-full border-gray-700 mb-6" />

      <p className="text-center text-base sm:text-lg font-semibold text-white">
        Game Designer • Level Designer • UI/UX Designer • Game Developer
      </p>

      <p className="text-center text-sm sm:text-base text-gray-400">
        Portfolio of Sahash Chakma
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 mt-4 text-xl">
        <a href="https://github.com/sahashChakma1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:text-white transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/sahash-chakma" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-white transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="hover:text-white transition-transform duration-200 hover:scale-110" />
        </a>
      </div>

      <p className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Sahash Chakma. All rights reserved.
      </p>
    </footer>
  );
}
