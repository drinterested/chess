"use client"

import Link from "next/link"
import { Heart, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ImpactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-[#f5f1eb] to-white">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#405862] mb-4">Our Impact</h1>
            <p className="text-lg text-[#405862]/80 max-w-2xl mx-auto">
              All of our proceeds go to the Pediatric Cancer Research Fund. Every tournament, every donation, every
              player makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-16 bg-white flex-1">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-8"
          >
            {/* What PCRF Does */}
            <Card className="overflow-hidden border-[#405862]/10 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#405862] mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#4ecdc4]" />
                  About PCRF
                </h2>
                <p className="text-[#405862]/80 mb-4">
                  The Pediatric Cancer Research Foundation (PCRF) funds innovative research and provides support for
                  pediatric cancer patients and their families. The organization is committed to:
                </p>
                <ul className="space-y-2 text-[#405862]/80 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ecdc4] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Supporting cutting-edge cancer research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ecdc4] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Providing scholarships for cancer patients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ecdc4] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improving survival rates and quality of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ecdc4] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building hope and healing for families</span>
                  </li>
                </ul>
                <Button asChild className="bg-[#4ecdc4] hover:bg-[#3db8b8]">
                  <Link href="https://cure.pcrf-kids.org/DrInterested" target="_blank" rel="noopener noreferrer">
                    Learn More About PCRF
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Donate Now */}
            <Card className="overflow-hidden border-[#4ecdc4]/20 bg-gradient-to-br from-[#4ecdc4]/10 to-[#405862]/5 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#405862] mb-4">Make a Direct Impact</h2>
                <p className="text-[#405862]/80 mb-6">
                  Support cancer research directly through the PCRF. Your donation funds life-saving research and
                  provides support to young patients fighting cancer.
                </p>
                <div className="bg-white rounded-lg p-6 mb-6 border border-[#4ecdc4]/20">
                  <p className="text-[#405862]/80 text-sm">
                    <span className="font-semibold">100% Transparency:</span> All funds are tracked and donated directly
                    to PCRF through the Dr. Interested fundraiser page.
                  </p>
                </div>
                <Button asChild className="w-full bg-[#405862] hover:bg-[#334852] h-11 text-base">
                  <Link
                    href="https://cure.pcrf-kids.org/DrInterested"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate to PCRF Now
                    <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Embedded Donation Page */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#405862]/10">
              <div className="bg-gradient-to-r from-[#405862] to-[#334852] p-6">
                <h2 className="text-xl font-bold text-white">Dr. Interested PCRF Fundraiser</h2>
                <p className="text-white/80 text-sm mt-1">Donate directly to the campaign</p>
              </div>
              <div className="p-6">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "120%",
                    overflow: "hidden",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <iframe
                    src="https://cure.pcrf-kids.org/DrInterested"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    title="Dr. Interested PCRF Fundraiser"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* How to Support */}
            <Card className="overflow-hidden border-[#405862]/10 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#405862] mb-6">Ways to Support Our Mission</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-[#405862] mb-2">Play in Tournaments</h3>
                    <p className="text-[#405862]/80 text-sm mb-3">
                      Join our CFC-rated chess tournaments. $15 entry fee goes directly to PCRF.
                    </p>
                    <Link
                      href="/tournaments"
                      className="text-[#4ecdc4] hover:text-[#3db8b8] text-sm font-medium flex items-center gap-1"
                    >
                      View Tournaments <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#405862] mb-2">Donate Directly</h3>
                    <p className="text-[#405862]/80 text-sm mb-3">
                      Make a direct donation to PCRF through the Dr. Interested fundraiser page.
                    </p>
                    <Link
                      href="https://cure.pcrf-kids.org/DrInterested"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ecdc4] hover:text-[#3db8b8] text-sm font-medium flex items-center gap-1"
                    >
                      Donate Now <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
