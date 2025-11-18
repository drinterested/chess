"use client"

import type { Metadata } from "next"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Heart, Lightbulb, Users, ArrowRight, Trophy, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#f5f1eb] to-white">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#4ecdc4]/5 via-transparent to-[#405862]/5 opacity-70"></div>

        <div className="container relative z-10">
          {/* Top Announcement Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4ecdc4]/20 to-[#405862]/20 px-4 py-2 rounded-full border border-[#4ecdc4]/30">
              <Trophy className="w-4 h-4 text-[#4ecdc4]" />
              <span className="text-sm font-semibold text-[#405862]">First Tournament Complete!</span>
              <Sparkles className="w-4 h-4 text-[#4ecdc4]" />
            </div>
          </motion.div>

          {/* Main Hero Content - Single Column */}
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#405862]">
                The Dr. Interested<br className="hidden md:block" />
                <span className="text-[#4ecdc4]">Simmon Chang Chess Club</span>
              </h1>
              <p className="text-lg text-[#405862]/90 mt-2">
                CFC-Rated Tournaments for Cancer Research
              </p>
            </div>

            <p className="text-lg text-[#405862]/80 max-w-md mx-auto">
              Join us for competitive chess tournaments and support the Pediatric Cancer Research Foundation. Named
              after Simmon Chang, who inspired us all to never give up on our fights.
            </p>

            <div className="flex flex-wrap gap-3 items-center mt-6 justify-center">
              <Link
                href="/tournaments"
                className="bg-[#405862] text-white hover:bg-[#334852] px-5 py-2.5 rounded-md font-medium inline-flex items-center shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 w-full sm:w-auto justify-center"
              >
                View Tournaments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="https://cure.pcrf-kids.org/DrInterested"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4ecdc4]/20 text-[#405862] hover:bg-[#4ecdc4]/30 px-5 py-2.5 rounded-md font-medium inline-flex items-center transition-all hover:scale-105 duration-300 w-full sm:w-auto justify-center"
              >
                <Heart className="mr-2 h-4 w-4" />
                Donate to PCRF
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tournament Success Card Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="overflow-hidden border-[#4ecdc4]/20 shadow-lg bg-gradient-to-br from-[#4ecdc4]/5 to-transparent">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex items-center justify-center w-20 h-20 bg-[#4ecdc4]/20 rounded-full flex-shrink-0">
                    <Trophy className="w-10 h-10 text-[#4ecdc4]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-5 h-5 text-[#4ecdc4] md:hidden" />
                      <h2 className="text-2xl md:text-3xl font-bold text-[#405862]">
                        First Chess Against Cancer Tournament Complete!
                      </h2>
                    </div>
                    
                    <div className="space-y-4 text-[#405862]/85">
                      <p className="text-lg">
                        We're excited to share that our <span className="font-semibold">first Chess Against Cancer tournament</span> is officially done, and together we raised <span className="font-bold text-[#4ecdc4] text-xl">$105 CAD</span> for the Pediatric Cancer Research Foundation!
                      </p>

                      <div className="bg-white/60 border-l-4 border-[#4ecdc4] p-4 rounded mt-6">
                        <p className="text-[#405862] font-semibold mb-3">In Honor of Simmon Chang</p>
                        <p className="text-[#405862]/90">
                          In honor of Simmon Chang, a remarkable young man who unfortunately passed away from osteosarcoma shortly after registering for the tournament, we have renamed our initiative the <span className="font-semibold">Simmon Chang Chess (Against Cancer) Club</span>, with permission from his family.
                        </p>
                        <p className="text-[#405862]/90 mt-3">
                          His courage and love for chess continue to inspire us and drive our mission to fight childhood cancer.
                        </p>
                      </div>

                      <p className="text-lg font-semibold text-[#4ecdc4] mt-6">
                        Thank you to everyone who participated, donated, and helped make this first tournament a success!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-[#405862] mb-4">Our Mission</h2>
            <div className="w-16 h-1 bg-[#4ecdc4] mx-auto"></div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-lg text-[#405862]/90 mb-6">
              The Dr. Interested Simmon Chang Chess Club conducts CFC-rated tournaments to raise money for cancer research. We are a
              branch of Dr. Interested, a youth-led global pre-med community helping students explore the vast world of
              healthcare, research, and advocacy.
            </p>
            <p className="text-lg text-[#405862]/90 mb-6">
              All funds are donated to the Pediatric Cancer Research Foundation via the Dr. Interested fundraiser. They
              support cancer research and scholarships for cancer patients.
            </p>
            <div className="bg-[#f5f1eb] border-l-4 border-[#4ecdc4] p-6 rounded">
              <p className="text-[#405862] font-semibold mb-2">Simmon's Legacy</p>
              <p className="text-[#405862]/90">
                Simmon was extraordinarily passionate about chess, not unlike Naroditsky. His dream was to encourage
                children facing similar battles, and he sought to inspire people to work hard and to never give up on
                their fights. He was a strong fighter himself, and his focus was always on the effort and the courage
                of the battle, not just the outcome. His slogan was: <span className="font-semibold">"Be your own
                kings and queens."</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-[#f5f1eb]/50">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="border border-[#405862]/10 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
              variants={fadeIn}
            >
              <div className="bg-[#4ecdc4]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#4ecdc4]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#405862]">Impact</h3>
              <p className="text-[#405862]/80">
                Every tournament raises funds for cancer research through PCRF.
              </p>
            </motion.div>

            <motion.div
              className="border border-[#405862]/10 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
              variants={fadeIn}
            >
              <div className="bg-[#4ecdc4]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#4ecdc4]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#405862]">Community</h3>
              <p className="text-[#405862]/80">
                Join a passionate community of chess players united for a cause.
              </p>
            </motion.div>

            <motion.div
              className="border border-[#405862]/10 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
              variants={fadeIn}
            >
              <div className="bg-[#4ecdc4]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-[#4ecdc4]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#405862]">Inspiration</h3>
              <p className="text-[#405862]/80">
                Inspired by Simmon Chang's courage and passion for chess and life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#405862] flex items-center">
              Upcoming Tournaments
              <div className="w-12 h-1 bg-[#4ecdc4] ml-4"></div>
            </h2>
            <Link href="/tournaments" className="text-[#405862] hover:text-[#4ecdc4] text-sm flex items-center group">
              <span>View all</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="overflow-hidden border-[#405862]/10 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#405862] mb-2">Weiss Open (CFC Rated)</h3>
                    <div className="inline-block bg-[#405862]/10 px-3 py-1 rounded-full text-[#405862] font-medium text-sm mb-4">
                      Registration Open
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-[#405862]/80">
                    <Calendar className="h-5 w-5 mr-3 text-[#4ecdc4]" />
                    <span>December 28, 2025</span>
                  </div>
                  <div className="flex items-center text-[#405862]/80">
                    <Clock className="h-5 w-5 mr-3 text-[#4ecdc4]" />
                    <span>Rapid (10+5)</span>
                  </div>
                  <div className="flex items-center text-[#405862]/80">
                    <MapPin className="h-5 w-5 mr-3 text-[#4ecdc4]" />
                    <span>Swiss Format (5 Rounds)</span>
                  </div>
                </div>

                <p className="text-[#405862]/80 mb-4">
                  Entry Fee: $15. Complete the registration form and send an interac e-transfer with your lichess
                  username, name, and CFC-ID to redlory23@gmail.com.
                </p>

                <div className="bg-[#4ecdc4]/10 border border-[#4ecdc4]/20 rounded-lg p-4 mb-6">
                  <p className="text-[#405862] font-semibold text-sm mb-1">All proceeds benefit PCRF</p>
                  <p className="text-[#405862]/80 text-sm">
                    100% of tournament proceeds are donated to the Pediatric Cancer Research Foundation.
                  </p>
                </div>

                <Button asChild className="w-full bg-[#405862] hover:bg-[#334852] h-10">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfav0IgNIVgBY1IGU4VhrQEsC0-UkRDA_GXYgdsmqJw93ku4Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Impact & Donation CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#405862] to-[#334852]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Every donation supports cancer research and helps students like Simmon's peers achieve their dreams. Make
              a direct impact today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cure.pcrf-kids.org/DrInterested"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#405862] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Donate to PCRF
              </Link>
              <Link
                href="/tournaments"
                className="bg-[#4ecdc4] text-white hover:bg-[#3db8b8] px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Join a Tournament
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
