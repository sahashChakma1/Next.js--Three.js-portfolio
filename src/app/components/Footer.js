import React from 'react';

export default function Footer({ fontClassName }) {
  return (
    <footer className={`${fontClassName} bg-neutral-900 text-gray-400 w-full flex flex-col items-center p-6 lg:p-8`}>
      
      {/* Divider */}
      <hr className="w-full border-gray-700 mb-4" />

      {/* Roles */}
      <p className="text-center text-sm sm:text-base font-semibold text-white">
        Game Designer • Level Designer • UI/UX Designer • Game Developer
      </p>

      {/* Name */}
      <p className="text-center text-sm text-gray-400 mt-1">
        Portfolio of Sahash Chakma
      </p>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 mt-2">
        © {new Date().getFullYear()} Sahash Chakma. All rights reserved.
      </p>

    </footer>
  );
}
