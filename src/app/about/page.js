import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] ring-2 ring-black">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-32">
        
        {/* Heading Section */}
        <section className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-white">About Me</h1>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto leading-relaxed">
            I’m a passionate game designer, level designer, and developer who thrives on building immersive gameplay and interactive experiences.
          </p>
        </section>

        {/* Background Section with Image on the Left */}
        <section className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Block on the Left */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/my_pic.jpg"
              alt="Portrait"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full"
              priority
            />
          </div>

          {/* Text Block on the Right */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-white">My Background</h2>
            <p className="text-lg text-slate-300 leading-relaxed tracking-wide">
              Over the last few years, I've evolved from a frontend developer into a creative game designer. My background in React and Next.js helped me build polished, responsive web experiences — but my heart belongs to game engines, level scripting, and dynamic interactivity.
            </p>
            <p className="text-lg text-slate-400">
              Whether I'm prototyping game mechanics or sketching UI flows, I strive to bring clarity, emotion, and engagement into every experience I build.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-300">
            <ul className="space-y-4 text-lg leading-relaxed">
              <li><strong className="text-teal-300">Front-end:</strong> HTML, CSS, JavaScript, React, Next.js</li>
              <li><strong className="text-teal-300">UI Design:</strong> Responsive Design, Tailwind CSS</li>
            </ul>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li><strong className="text-amber-400">Back-end:</strong> Node.js, Express</li>
              <li><strong className="text-amber-400">Tools:</strong> Git, VS Code, Webpack</li>
            </ul>
          </div>
        </section>

        {/* Resume Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-semibold text-white">My Resume</h2>
          <p className="text-slate-300 max-w-3xl">
            Feel free to review my resume below to learn more about my experience and qualifications.
          </p>
          <div className="border rounded-lg overflow-hidden shadow-md border-gray-700">
            <iframe
              src="/resume.pdf"
              title="My Resume"
              className="w-full h-[600px]"
              frameBorder="0"
            ></iframe>
          </div>
          <p className="text-sm text-slate-400">
            If the resume doesn’t load, you can also <a href="/resume.pdf" className="text-teal-300 hover:underline">download it here</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
