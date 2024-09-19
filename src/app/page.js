'use client';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Digimon from './components/Digimon';

const IconGithub = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconCustom = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}>
    <circle cx={256} cy={256} r={256} style={{ fill: "#991905" }} />
    <path d="M508.792 296.541 364.73 152.479 193.236 292.647l-82.342 78.545 140.753 140.753c1.45.024 2.898.055 4.353.055 127.588 0 233.36-93.341 252.792-215.459z" style={{ fill: "#a63030" }} />
    <path d="M284.379 300.163c27.944 13.584 66.332 76.671 97.24 74.611 30.908-2.06 31.925-167.983-10.314-215.673s-93.803-2.72-93.803-2.72h-55.58s-51.564-44.972-93.803 2.72-41.22 213.613-10.314 215.673c30.906 2.06 69.296-61.026 97.24-74.611h69.334z" style={{ fill: "#e6f3ff" }} />
    <path d="M371.305 159.101c-42.237-47.69-93.801-2.72-93.801-2.72h-27.248v143.782h34.125c27.945 13.584 66.332 76.671 97.24 74.611 30.906-2.06 31.923-167.981-10.316-215.673z" style={{ fill: "#cfdbe6" }} />
    <circle cx={205.317} cy={256} r={27.789} style={{ fill: "#b8c9d9" }} />
    <circle cx={158.53} cy={183.613} r={20.475} style={{ fill: "#b8c9d9" }} />
    <circle cx={279.169} cy={256} r={20.475} style={{ fill: "#a9bbc9" }} />
    <circle cx={335.489} cy={181.82} r={10.636} style={{ fill: "#4cdbc4" }} />
    <circle cx={335.489} cy={219.039} r={10.636} style={{ fill: "#a9bbc9" }} />
    <circle cx={354.09} cy={200.421} r={10.636} style={{ fill: "#fd8469" }} />
    <circle cx={316.871} cy={200.421} r={10.636} style={{ fill: "#ff80aa" }} />
  </svg>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-off-yellow ring-2 ring-black flex items-center justify-center">
      <main className="w-full flex flex-col md:flex-row items-center gap-10 px-5 py-10">
        {/* Canvas Container */}
        <div className="w-full md:w-1/2 h-screen relative">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[5, 2, 2]} />
            <OrbitControls 
              enablePan={false} 
              enableZoom={true} 
              minDistance={0} 
              maxDistance={5}
              enableRotate={true} 
              autoRotate={false} 
            />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Digimon />
          </Canvas>
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-base md:text-lg">Check out my work and projects!</p>
          
          <div className="flex justify-center md:justify-start w-full mt-6 space-x-4 sm:space-x-6">
          <Link href="https://github.com/yourusername" aria-label="GitHub Profile" className="flex items-center justify-center">
            <IconGithub className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 hover:text-gray-600 transition-transform duration-300 hover:scale-110" />
          </Link>

            <Link href="https://www.linkedin.com/in/sahash-chakma" className="flex items-center justify-center">
              <IconLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link href="https://custom-link.com" className="flex items-center justify-center">
              <IconCustom className="w-6 h-6 sm:w-8 sm:h-8 text-[#fd8469] hover:text-[#e57b62] transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>

          <Link href="/contact" className="mt-4 px-6 py-3 bg-amber-600 text-white text-base md:text-lg rounded-lg transition-all duration-300 hover:bg-orange-500 hover:scale-110">
            Contact Me
          </Link>

        </div>
      </main>
    </div>
  );
}
