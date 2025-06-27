"use client"

import { motion } from "framer-motion"
import { FaTwitter, FaEnvelope, FaExternalLinkAlt, FaRocket } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const links = [
    {
      title: "Convertey - Online File Converter",
      href: "#",
      icon: <FaRocket className="w-6 h-6 md:w-7 md:h-7" />,
      description: "Free & Fast Online File Converter!",
    },
    {
      title: "Follow Minxfy's Twitter",
      href: "https://twitter.com/Minxfy",
      icon: <FaTwitter className="w-6 h-6 md:w-7 md:h-7" />,
      description: "Check us on Twitter/X for latest news & updates",
    },
    {
      title: "Send Us Email",
      href: "mailto:minxfy@proton.me",
      icon: <FaEnvelope className="w-6 h-6 md:w-7 md:h-7" />,
      description: "Reach out to us through email",
    },
  ]

  return (
    <main className="h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 rounded-full blur-3xl opacity-15 bg-minxfy-green animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-15 bg-minxfy-green animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto"
      >
        <Card className="backdrop-blur-xl border-0 shadow-2xl bg-slate-800/40 shadow-minxfy-green/10">
          <div className="p-6 md:p-8 lg:p-12 space-y-8 md:space-y-10">
            {/* Header Section */}
            <div className="text-center space-y-4 md:space-y-6">
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-minxfy-green leading-tight"
                  style={{ fontFamily: "Ebrima, sans-serif", fontWeight: "bold" }}
                >
                  Minxfy
                </h1>
              </motion.div>

              <motion.div
                className="w-16 md:w-24 h-1 mx-auto rounded-full bg-minxfy-green"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.p
                className="text-base md:text-lg leading-relaxed max-w-xl mx-auto text-slate-300 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Previously known as CosmoCrafters. We are core developers of{" "}
                <a
                  href="https://github.com/Minxfy/convertey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-minxfy-green hover:text-minxfy-green-light transition-colors font-medium underline decoration-minxfy-green underline-offset-4"
                >
                  @Convertey
                </a>
                , a modern, powerful, and user-friendly online file conversion tool.
              </motion.p>
            </div>

            {/* Links Section */}
            <div className="space-y-3 md:space-y-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  <Button
                    variant="outline"
                    className="w-full group relative overflow-hidden border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-slate-700/50 hover:bg-slate-600/60 text-white hover:shadow-minxfy-green/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 h-auto"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-minxfy-green/10 to-minxfy-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                      <div className="flex items-center justify-between relative z-10 w-full">
                        <div className="flex items-center space-x-4 md:space-x-6 flex-1">
                          <div className="p-2 md:p-3 rounded-xl transition-colors duration-300 bg-minxfy-green/20 text-minxfy-green group-hover:bg-minxfy-green/30 flex-shrink-0">
                            {link.icon}
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <div className="font-semibold text-lg md:text-xl mb-1 text-white group-hover:text-minxfy-green-light transition-colors duration-300">
                              {link.title}
                            </div>
                            <div className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                              {link.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <FaExternalLinkAlt className="w-4 h-4 md:w-5 md:h-5 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 text-minxfy-green" />
                        </div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </main>
  )
}
