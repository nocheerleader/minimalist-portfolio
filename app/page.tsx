'use client'

import { default as NextImage } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Instagram, Youtube, Facebook, Menu, X } from 'lucide-react'

export default function Home() {
  const [imageError, setImageError] = useState(false)
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
            className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors pt-0.5"
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
              className="text-gray-400 hover:text-gray-600 text-xs font-light transition-colors"
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
    <div className="flex justify-center -mt-8 mb-8">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-[#FF5722] rounded-full flex items-center justify-center">
        <span className="text-white text-3xl md:text-4xl font-bold">td</span>
      </div>
    </div>

    {/* Hero Section */}
    <main className="container mx-auto px-4 mt-8 md:mt-12 mb-12 md:mb-20">
      <div className="max-w-6xl mx-auto">
        <NextImage
          src="/img1.jpeg"
          width={1920}
          height={1080}
          alt="3D illustration of a character in a sunny urban setting"
          className="w-full rounded-lg object-cover"
          priority
          onError={() => setImageError(true)}
        />
      </div>
    </main>

    {/* Description */}
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-gray-400 text-sm max-w-2xl mx-auto md:ml-[40%]">
          <p>Hi! I'm Taher Dhanerawala!</p>
          <p>Professional AI artist & AI champion</p>
          <p>Early adopter of AI. AI runs in my blood</p>
        </div>
      </div>
    </div>

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
  );
}
