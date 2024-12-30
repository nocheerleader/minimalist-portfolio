'use client'

import { default as NextImage } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Instagram, Youtube, Facebook, Menu, X } from 'lucide-react'

export default function Art() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors pt-0.5"
            >
              HOME
            </Link>
            <Link 
              href="/art" 
              className="text-gray-600 text-xs font-light pt-0.5"
            >
              ART
            </Link>
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors pt-0.5"
            >
              ABOUT ME
            </Link>
            <Link 
              href="/events" 
              className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors pt-0.5"
            >
              EVENTS
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors pt-0.5"
            >
              CONTACT 
            </Link>
          </div>
          <Link 
            href="/rev-art-show" 
            className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors pt-0.5"
          >
            AI ART
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                href="/" 
                className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/art" 
                className="text-gray-600 text-xs font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                ART
              </Link>
              <Link 
                href="/about" 
                className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT ME
              </Link>
              <Link 
                href="/events" 
                className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT 
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Logo */}
      <div className="flex justify-center -mt-8 mb-2">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#FF5722] rounded-full flex items-center justify-center">
          <span className="text-white text-3xl md:text-4xl font-bold">td</span>
        </div>
      </div>

      {/* Art Gallery Section */}
      <main className="container mx-auto px-4 mt-2 md:mt-4 mb-4 md:mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-light text-gray-600 mb-4 text-center">My Artwork</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Art piece 1 */}
            <div className="group relative">
              <NextImage
                src="/attitude.jpg"
                width={600}
                height={600}
                alt="AI Generated Art 1"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                attitude
                </p>
              </div>
            </div>

            {/* Art piece 2 */}
            <div className="group relative">
              <NextImage
                src="/ephemeral.jpg"
                width={600}
                height={600}
                alt="AI Generated Art 2"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                ephemeral
                </p>
              </div>
            </div>

            {/* Art piece 3 */}
            <div className="group relative">
              <NextImage
                src="/ethereal.jpg"
                width={600}
                height={600}
                alt="AI Generated Art 3"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  ethereal
                </p>
              </div>
            </div>

            {/* Art piece 4 */}
            <div className="group relative">
              <NextImage
                src="/quietelegance.jpg"
                width={600}
                height={600}
                alt="AI Generated Art 4"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                quiet elegance in the shadows
                </p>
              </div>
            </div>

            {/* Art piece 5 */}
            <div className="group relative">
              <NextImage
                src="/vibe.jpg"
                width={600}
                height={600}
                alt="AI Generated Art 5"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  vibe
                </p>
              </div>
            </div>

            {/* Art piece 6 */}
            <div className="group relative">
              <NextImage
                src="/whispers.jpg"
                width={600}
                height={600}
                alt="AI Generated Art 6"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  whispers
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-12 md:pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="https://instagram.com" className="p-2 rounded-full bg-[#FF5722] hover:bg-[#FF5722]/90 transition-colors">
              <Instagram className="w-5 h-5 text-white" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" className="p-2 rounded-full bg-[#FF5722] hover:bg-[#FF5722]/90 transition-colors">
              <Youtube className="w-5 h-5 text-white" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://facebook.com" className="p-2 rounded-full bg-[#FF5722] hover:bg-[#FF5722]/90 transition-colors">
              <Facebook className="w-5 h-5 text-white" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
          <div className="text-center text-gray-400 text-xs">
            © Taher Dhanerawala 2024
          </div>
        </div>
      </footer>
    </div>
  )
} 