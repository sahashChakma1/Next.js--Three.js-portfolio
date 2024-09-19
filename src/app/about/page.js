import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50 ring-2 ring-black flex flex-col">
      <main className="flex-grow px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl text-rose-900 font-bold mb-4">About Me</h1>
        <p className="text-lg mb-8">
          Welcome to my about page! Here you'll find information about my background, skills, and experiences.
          I have a passion for web development and enjoy creating intuitive and dynamic web applications.
        </p>
        <div className="flex justify-center md:justify-start lg:-ml-20 xl:-ml-24 bg-transparent">
          <img src="/images/Home.png" alt="Portfolio Example" className="rounded-lg max-w-full h-auto" />
        </div>
        <section>
          <h2 className="text-2xl text-rose-900 font-semibold mb-2">My Background</h2>
          <p className="text-lg">
            I have been working in the tech industry for several years, with a focus on front-end development.
            I have experience in various technologies including JavaScript, React, and Next.js. 
            My background includes working on diverse projects ranging from small websites to large web applications.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl text-rose-900 font-semibold mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Front-end Development: HTML, CSS, JavaScript, React, Next.js</li>
            <li>Backend Development: Node.js, Express</li>
            <li>Tools & Technologies: Git, Webpack, Tailwind CSS</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
