export default function ContactPage() {
  return (
    <div className="min-h-screen bg-amber-50 ring-2 ring-black flex flex-col">
      <main className="flex-grow px-8 py-12 flex flex-col items-center">
        <h1 className="text-4xl text-cyan-900 font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-8">Feel free to reach out with any questions or inquiries. You can use the form below or contact me via email.</p>

        {/* Contact Form */}
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-900  text-white rounded-lg transition-all duration-300 hover:bg-orange-200"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
