import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-[#E8F5E9]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-[#4CAF50]">
            Wesley Omoke
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#666666] hover:text-[#4CAF50] transition">
              Home
            </Link>
            <Link href="/projects" className="text-[#666666] hover:text-[#4CAF50] transition">
              Projects
            </Link>
            <Link href="/skills" className="text-[#666666] hover:text-[#4CAF50] transition">
              Skills
            </Link>
            <Link href="/resume" className="text-[#666666] hover:text-[#4CAF50] transition">
              Resume
            </Link>
            <Link href="/contact" className="text-[#666666] hover:text-[#4CAF50] transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[#666666] hover:text-[#4CAF50] transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 