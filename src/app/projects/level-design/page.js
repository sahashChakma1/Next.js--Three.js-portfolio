export default function LevelDesignPage() {
  const levels = [
    {
      title: 'Mystic Forest',
      description:
        'An immersive forest level with hidden paths, puzzles, and ambient sounds to enhance exploration.',
      image: '/images/mystic-forest.png',
      link: '#',
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
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:flex items-center gap-6"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src={level.image}
                  alt={`${level.title} Screenshot`}
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl text-teal-900 font-semibold mb-2">{level.title}</h2>
                <p className="text-lg text-gray-800 mb-3">{level.description}</p>
                <a
                  href={level.link}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition"
                >
                  View Level →
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
