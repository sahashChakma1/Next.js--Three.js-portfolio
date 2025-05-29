export default function GameDesignPage() {
  const projects = [
    {
      title: 'My Game Design Project',
      description: 'A game I designed with unique mechanics...',
      image: '/images/game-design-project.png',
      link: '#',
    },
    // Add more projects
  ];

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <main className="flex-grow px-6 pt-28 pb-12 max-w-5xl mx-auto"> {/* Adjusted top padding */}
        <h1 className="text-4xl md:text-5xl text-teal-900 font-bold mb-6">Game Design Projects</h1>
        <div className="grid gap-12">
          {projects.map((project, idx) => (
            <section key={idx} className="bg-white rounded-xl shadow-md p-6 md:flex items-center gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl text-teal-900 font-semibold mb-2">{project.title}</h2>
                <p className="text-lg text-gray-800 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition"
                >
                  View Project →
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
