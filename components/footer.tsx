export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/40 text-sm">© 2025 Campfire Films. All rights reserved.</p>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://nervetheatre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              From the creators of Nerve Theatre
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-white/20 text-xs">
            <span>Made with</span>
            <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>for storytellers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
