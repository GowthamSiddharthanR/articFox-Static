import Link from "next/link";
export default function Header() {
    return (
        <header className="bg-blue-950 shadow-md">
    <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-2">
        <img className="h-16 w-16" src='https://static.vecteezy.com/system/resources/thumbnails/048/847/425/small/collection-of-simple-colorful-dove-logo-designs-isolated-png.png'/>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-stone-300 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-stone-300 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-stone-300 hover:text-gray-900">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button id="mobile-menu-button" className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      
      <div id="mobile-menu" className="hidden md:hidden">
        <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="/about" className="block px-4 py-2 text-gray-600 hover:text-gray-900">About</Link>
        <Link href="contact" className="block px-4 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
      </div>
    </div>
  </header>
    )
}