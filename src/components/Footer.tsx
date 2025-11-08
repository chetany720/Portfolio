export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-8 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            © {new Date().getFullYear()} Chetany Kalaneya. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">TypeScript</span>, and <span className="text-pink-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
