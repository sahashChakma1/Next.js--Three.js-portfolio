import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-32">

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tight">Hello, I'm Sahash </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A game designer & developer passionate about crafting immersive, story-rich worlds and intuitive experiences.
            </p>
            <p className="text-sm text-slate-400">Blending creativity with technical skills in game engines and web technologies.</p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/my_pic.jpg"
              alt="Portrait"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-full"
              priority
            />
          </div>
        </section>

        {/* Journey Timeline */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-12 relative border-l border-slate-700 pl-6">
            {[
              { year: '2020', text: 'Started as a frontend developer with a focus on clean UI.' },
              { year: '2021', text: 'Discovered a love for interactive experiences and game mechanics.' },
              { year: '2022', text: 'Built my first 3D level using Unreal Engine and Unity.' },
              { year: '2023', text: 'Worked on game prototypes and UI systems for indie projects.' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute left-[-1.1rem] top-2 h-3 w-3 bg-teal-400 rounded-full"></div>
                <h3 className="text-lg font-semibold text-teal-300">{item.year}</h3>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do Section */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center">What I Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-300">
            {[
              { title: 'Game Design', desc: 'Designing gameplay loops, mechanics, and balanced systems.' },
              { title: 'Level Building', desc: 'Crafting narrative-driven, visually engaging environments.' },
              { title: 'UI/UX', desc: 'Designing intuitive interfaces and user interactions.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-teal-300">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
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
        {/* Testimonial or Quote Block */}
        <section className="bg-slate-800 rounded-2xl py-12 px-6 md:px-20 text-center shadow-lg">
          <blockquote className="text-2xl italic text-slate-100 max-w-3xl mx-auto">
            “Design is not just how it looks, but how it works — I believe games are the most powerful medium to evoke emotion through interactivity.”
          </blockquote>
          <p className="mt-6 text-teal-300 font-semibold">— Me, probably late at night</p>
        </section>

        {/* Resume Section */}
        <section className="space-y-6 text-center">
          <h2 className="text-4xl font-bold">View My Resume</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Browse through my resume to see detailed experience and academic background.
          </p>
          <div className="mx-auto w-full max-w-4xl border border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="/Resume.pdf"
              className="w-full h-[600px]"
              title="Resume"
              frameBorder="0"
            ></iframe>
          </div>
          <p className="text-sm text-slate-400">
            Trouble viewing? <a href="/Resume.pdf" className="text-teal-300 hover:underline">Download it here</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
