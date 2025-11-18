"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, Trophy, ExternalLink, Heart, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function TournamentsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#405862] mb-4">Chess Tournaments</h1>
            <p className="text-lg text-[#405862]/80 max-w-2xl mx-auto">
              Join our CFC-rated tournaments. Play competitive chess while supporting cancer research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tournaments List */}
      <section className="py-12 md:py-16 bg-white flex-1">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="mb-12">
              <div className="inline-block bg-[#4ecdc4]/10 px-3 py-1 rounded-full text-[#405862] font-medium text-sm mb-4">
                Upcoming
              </div>
              <Card className="overflow-hidden border-[#405862]/10 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-[#405862] mb-6">Weiss Open</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-[#405862]">
                      <Calendar className="h-6 w-6 mr-4 text-[#4ecdc4]" />
                      <span className="text-lg">December 28, 2025</span>
                    </div>
                    <div className="flex items-center text-[#405862]">
                      <Clock className="h-6 w-6 mr-4 text-[#4ecdc4]" />
                      <span className="text-lg">Time Control: Rapid (10+5)</span>
                    </div>
                    <div className="flex items-center text-[#405862]">
                      <Trophy className="h-6 w-6 mr-4 text-[#4ecdc4]" />
                      <span className="text-lg">Format: Swiss (5 Rounds)</span>
                    </div>
                    <div className="flex items-center text-[#405862]">
                      <Users className="h-6 w-6 mr-4 text-[#4ecdc4]" />
                      <span className="text-lg">CFC-Rated</span>
                    </div>
                  </div>

                  {/* Registration Details */}
                  <div className="bg-[#f5f1eb] rounded-lg p-6 mb-8">
                    <h4 className="font-bold text-[#405862] mb-4">Registration Information</h4>
                    <div className="space-y-3 text-[#405862]/80">
                      <p>
                        <span className="font-semibold">Entry Fee:</span> $15
                      </p>
                      <p>
                        <span className="font-semibold">Steps:</span>
                      </p>
                      <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li>Complete the registration form</li>
                        <li>Send an Interac e-transfer of $15</li>
                        <li>Include your Lichess username, name, and CFC-ID in the transfer</li>
                        <li>Send to: redlory23@gmail.com</li>
                      </ol>
                    </div>
                  </div>

                  {/* Impact Section */}
                  <div className="bg-[#4ecdc4]/10 border border-[#4ecdc4]/20 rounded-lg p-6 mb-8">
                    <div className="flex items-start gap-4">
                      <Heart className="h-6 w-6 text-[#4ecdc4] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-[#405862] mb-2">100% Proceeds to PCRF</p>
                        <p className="text-[#405862]/80 text-sm">
                          All tournament proceeds are donated to the Pediatric Cancer Research Foundation to support
                          cancer research and scholarships for cancer patients.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-[#405862] hover:bg-[#334852] h-11 text-base">
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfav0IgNIVgBY1IGU4VhrQEsC0-UkRDA_GXYgdsmqJw93ku4Q/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Link
                      href="https://cure.pcrf-kids.org/DrInterested"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center border border-[#4ecdc4] text-[#405862] hover:bg-[#4ecdc4]/10 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Donate to PCRF
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About the Club */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[#405862] mb-6">About Simmon Chang</h2>
              <div className="space-y-4 text-[#405862]/80">
                <p>
                  The club is named after Simmon Chang, an extraordinary chess enthusiast and passionate fighter who
                  unfortunately passed away due to osteosarcoma. Like Naroditsky, Simmon was known for his deep love of
                  chess.
                </p>
                <p>
                  His dream was to inspire and encourage children facing similar battles. He believed in working hard
                  and never giving up on the fight. What mattered most to Simmon was not the outcome, but the effort,
                  courage, and spirit of the battle.
                </p>
                <p className="font-semibold text-[#405862]">
                  His legacy lives on in his motto: <span className="italic">"Be your own kings and queens."</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
