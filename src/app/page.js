'use client';

import React from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Digimon from './components/Digimon';
// ✅ Make sure this path is correct
import { FaGithub, FaLinkedin, FaExclamationCircle } from 'react-icons/fa';

const socialLinks = [
  {
    href: "https://github.com/sahashChakma1",
    label: "GitHub",
    icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-teal-300 hover:text-teal-200 transition-transform duration-300 hover:scale-110" />,
  },
  {
    href: "https://www.linkedin.com/in/sahash-chakma",
    label: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110" />,
  },
  {
    href: "https://custom-link.com",
    label: "Custom",
    icon: <FaExclamationCircle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 hover:text-amber-300 transition-transform duration-300 hover:scale-110" />,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#0f172a] ring-2 ring-black w-full">
      <main className="flex-grow w-full flex flex-col md:flex-row items-center gap-10 px-6 py-12 max-w-7xl mx-auto">
        
        {/* 3D Model Viewer */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative overflow-hidden">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[5, 2, 2]} />
            <OrbitControls
              enablePan={false}
              enableZoom
              minDistance={2}
              maxDistance={10}
              enableRotate
              autoRotate
            />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <Digimon />
          </Canvas>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Sahash Chakma</h1>
          <p className="mt-2 text-lg md:text-xl text-teal-300 font-medium">
            Game Developer • Game Designer • Level Designer
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-md">
            Explore my portfolio of immersive game experiences, creative mechanics, and engaging level design.
            Dive into my work and let's build the next big adventure together.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start w-full mt-6 space-x-4 sm:space-x-6">
            {socialLinks.map(({ href, label, icon }) => (
              <Link key={href} href={href} aria-label={label} className="focus:outline-none focus-visible:ring-2 rounded">
                <span className="sr-only">{label}</span>
                {icon}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects/game-development"
              className="px-6 py-3 bg-teal-500 text-white rounded-lg transition hover:bg-teal-600 hover:scale-105 text-center"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-amber-500 text-white rounded-lg transition hover:bg-amber-600 hover:scale-105 text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </main>    
    </div>
  );
}
