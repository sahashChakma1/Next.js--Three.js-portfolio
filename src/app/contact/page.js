export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 md:px-12">
      <main className="max-w-md w-full bg-[#1e293b] rounded-xl p-10 shadow-lg space-y-10 text-gray-300 text-left">
        <h1 className="text-4xl font-bold text-white leading-tight mb-6">Contact Me</h1>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed flex items-center gap-3">
            <span className="text-teal-400 text-2xl select-none">📧</span>
            <a
              href="mailto:sahashchakma85@gmail.com"
              className="text-teal-400 hover:text-teal-600 underline break-all transition-colors duration-150"
            >
              sahashchakma85@gmail.com
            </a>
          </p>
          <p className="text-lg leading-relaxed flex items-center gap-3">
            <span className="text-teal-400 text-2xl select-none">🔗</span>
            <a
              href="https://www.linkedin.com/in/sahash-chakma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-600 underline break-all transition-colors duration-150"
            >
              linkedin.com/in/sahash-chakma
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
