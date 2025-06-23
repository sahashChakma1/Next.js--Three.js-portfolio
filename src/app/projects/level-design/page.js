'use client';

import Image from 'next/image';

export default function LevelDesignPage() {
  const levels = [
    {
      title: 'Prison-Style Puzzle Level – Unreal Engine Project ',
      description:
        'Created a basic prison-style puzzle level in Unreal Engine, focusing on level design fundamentals such as spatial layout, player flow, environmental storytelling, and traversal mechanics. The project is a beginner-level exercise aimed at understanding how lighting, modular design, and gameplay logic come together to shape the player experience. It was inspired by Batnobie X, whose breakdowns of level design flow sparked the idea for this prototype.',
      image: '/images/level_design/prison/prison01.png',
      extraImages: [
        '/images/level_design/prison/prison02.png',
        '/images/level_design/prison/prison03.png',
      ],
      link: 'https://www.youtube.com/watch?v=cisI1ftZxO0',
      embedId: 'cisI1ftZxO0',
    },
    {
      title: 'Desert Ruins',
      description:
        'A challenging desert ruins level featuring vertical platforming and dynamic traps.',
      image: '/images/desert-ruins.png',
      link: '#',
    },
    {
      title: 'Cyber City',
      description:
        'A futuristic city level with neon lights, multiple pathways, and time-based challenges.',
      image: '/images/cyber-city.png',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <main className="flex-grow px-6 pt-28 pb-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-teal-900 font-bold mb-6">Level Design Projects</h1>
        <p className="text-lg mb-10 text-gray-700 max-w-3xl">
          Explore some of my level design work featuring creative layouts, engaging gameplay elements, and immersive environments.
        </p>

        <div className="grid gap-12">
          {levels.map((level, idx) => (
            <section
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:flex items-start gap-6 flex-col md:flex-row"
            >
              {/* Image section */}
              <div className="md:w-1/3 mb-4 md:mb-0 space-y-4">
                <Image
                  src={level.image}
                  alt={`${level.title} Screenshot`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
                {level.extraImages &&
                  level.extraImages.map((imgPath, i) => (
                    <Image
                      key={i}
                      src={imgPath}
                      alt={`${level.title} Extra Screenshot ${i + 2}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg border border-gray-200"
                    />
                  ))}
              </div>

              {/* Text and video section */}
              <div className="md:w-2/3">
                <h2 className="text-2xl text-teal-900 font-semibold mb-2">{level.title}</h2>
                <p className="text-lg text-gray-800 mb-3">{level.description}</p>

                {level.embedId ? (
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src={`https://www.youtube.com/embed/${level.embedId}`}
                      title={level.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ) : (
                  <a
                    href={level.link}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition"
                  >
                    View Level →
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
