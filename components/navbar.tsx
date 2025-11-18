"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowLeft, Instagram, Linkedin, ExternalLink } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md py-2 border-b" : "bg-transparent py-4",
      )}
      role="banner"
    >
      <div className="container flex items-center justify-between">
        {/* Left Section - Navigation */}
        <div className="flex items-center gap-4">
          <Link
            href="https://drinterested.org"
            className="flex items-center gap-2 text-sm font-medium text-[#405862] hover:text-[#4ecdc4] transition-colors group"
            aria-label="Return to Dr. Interested main website"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="hidden sm:inline">Go Home</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </Link>

          <div className="h-6 w-px bg-gray-300" aria-hidden="true" />

          <Link href="/" className="flex items-center gap-2 group" aria-label="Simmon Chang Chess Club Home">
            <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Simmon Chang Chess Club Logo"
                fill
                className="rounded-full object-cover"
                priority
                sizes="(max-width: 768px) 32px, 40px"
              />
            </div>
            <div className="font-semibold text-base md:text-lg">
              <span className="text-[#405862]">Chess</span>{" "}
              <span className="text-[#4ecdc4] group-hover:underline decoration-wavy decoration-[#4ecdc4] underline-offset-4 transition-all duration-300">
                Club
              </span>
            </div>
          </Link>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#405862] hover:text-[#4ecdc4] transition-colors"
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            href="/tournaments"
            className="text-sm font-medium text-[#405862] hover:text-[#4ecdc4] transition-colors"
            aria-label="Tournaments"
          >
            Tournaments
          </Link>
          <Link
            href="/impact"
            className="text-sm font-medium text-[#405862] hover:text-[#4ecdc4] transition-colors"
            aria-label="Impact & Donate"
          >
            Impact
          </Link>
        </div>

        {/* Right Section - Social Links and Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://cure.pcrf-kids.org/DrInterested"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-white bg-[#4ecdc4] hover:bg-[#4ecdc4]/90 transition-colors px-3 py-1.5 rounded-full"
            aria-label="Donate to support cancer research"
          >
            <span>Support Cancer Research</span>
          </a>

          <div className="flex items-center gap-2" role="group" aria-label="Social media links">
            <Link
              href="https://discord.gg/pzbGRgsGXY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200 p-1"
              aria-label="Join Dr. Interested Discord community"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/dr.interested/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200 p-1"
              aria-label="Follow Dr. Interested on Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dr-interested"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200 p-1"
              aria-label="Connect with Dr. Interested on LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
