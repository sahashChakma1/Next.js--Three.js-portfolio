export default function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with Next.js and Tailwind CSS. This project showcases my work and provides a contact form for potential clients.',
      image: '/images/Tree1.png',
      link: '#',
    },
    {
      title: 'Space Adventure',
      description:
        'A 2D platformer I designed and developed, featuring custom levels and mechanics.',
      image: '/images/space-adventure.png',
      link: 'https://your-link-here.com',
    },
    {
      title: 'Blogging Platform',
      description:
        'A blogging platform built with Gatsby and GraphQL. It supports markdown for blog posts and includes a comment system.',
      image: '/images/blog-placeholder.png',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <main className="flex-grow px-6 pt-28 pb-12 max-w-5xl mx-auto"> {/* Adjusted padding */}
        <h1 className="text-4xl md:text-5xl text-teal-900 font-bold mb-6">My Projects</h1>
        <p className="text-lg mb-10 text-gray-700 max-w-3xl">
          Explore a collection of my most notable work across web development, UI design, and full-stack engineering. Each project highlights a unique technical or design challenge I’ve tackled.
        </p>

        <div className="grid gap-12">
          {projects.map((project, idx) => (
            <section
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:flex items-center gap-6"
            >
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
