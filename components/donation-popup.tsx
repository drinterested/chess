"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function DonationPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("donationPopupSeen")
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("donationPopupSeen", "true")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl animate-in fade-in scale-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close donation popup"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#405862] mb-2">Support Cancer Research</h2>
            <p className="text-gray-600 text-sm">
              Every move matters. Your donation helps fight pediatric cancer through the Pediatric Cancer Research
              Foundation.
            </p>
          </div>

          {/* Key Message */}
          <div className="bg-[#4ecdc4]/10 border border-[#4ecdc4]/20 rounded-lg p-4 mb-6">
            <p className="text-[#405862] font-medium text-sm">
              Simmon Chang Chess Club donates all tournament proceeds to PCRF to support cancer research and
              scholarships for cancer patients.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-[#405862] hover:bg-[#334852] text-white font-semibold h-10"
            >
              <Link href="https://cure.pcrf-kids.org/DrInterested" target="_blank" rel="noopener noreferrer">
                Donate Now
              </Link>
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-[#405862] text-[#405862] hover:bg-[#405862]/5 font-semibold h-10 rounded-md transition-colors"
            >
              Learn More Later
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center mt-4">
            All proceeds support cancer research through the PCRF.
          </p>
        </div>
      </div>
    </div>
  )
}
