export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-amber-50 ring-2 ring-black flex flex-col">
      <main className="flex-grow px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl text-teal-900 font-bold mb-6">My Projects</h1>
        <p className="text-lg mb-8">
          Here is a showcase of some of the projects I have worked on. Each project demonstrates my skills in various technologies and problem-solving approaches.
        </p>
        <section>
          <h2 className="text-2xl text-teal-900 font-semibold mb-4">Project 1: Portfolio Website</h2>
          <p className="text-lg mb-4">
            A personal portfolio website built with Next.js and Tailwind CSS. This project showcases my work and provides a contact form for potential clients.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </section>
        <div className="flex justify-center md:justify-start lg:-ml-20 xl:-ml-24 bg-transparent">
          <img src="/images/Tree1.png" alt="Portfolio Example" className="rounded-lg max-w-full h-auto" />
        </div>
        <section className="mt-8">
          <h2 className="text-2xl  text-teal-900 font-semibold mb-4">Project 2: E-commerce Platform</h2>
          <p className="text-lg mb-4">
            An e-commerce platform developed with React and Node.js. Features include product listings, user authentication, and a shopping cart.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl text-teal-900 font-semibold mb-4">Project 3: Blogging Platform</h2>
          <p className="text-lg mb-4">
            A blogging platform built with Gatsby and GraphQL. It supports markdown for blog posts and includes a comment system.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </section>
      </main>
    </div>
  );
}
