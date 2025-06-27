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
      icon: <FaRocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Free & Fast Online File Converter!",
    },
    {
      title: "Follow Minxfy's Twitter",
      href: "https://twitter.com/Minxfy",
      icon: <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Keep on track for latest news & updates",
    },
    {
      title: "Send Us Email",
      href: "mailto:minxfy@proton.me",
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Reach out to us through email",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 flex justify-center relative overflow-hidden py-4 px-3 sm:py-6 sm:px-4 md:py-8 md:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 md:top-20 md:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full blur-3xl opacity-15 bg-minxfy-green animate-pulse" />
        <div
          className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 md:bottom-20 md:right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-15 bg-minxfy-green animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto mt-4 mb-2 sm:mt-8 sm:mb-4 md:mt-12 md:mb-6"
      >
        <Card className="backdrop-blur-xl border-0 shadow-2xl bg-slate-800/40 shadow-minxfy-green/10 mx-2 sm:mx-0">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Header Section */}
            <header className="text-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-minxfy-green leading-tight"
                  style={{ fontFamily: "Ebrima, sans-serif", fontWeight: "bold" }}
                >
                  Minxfy
                </h1>
              </motion.div>

              <motion.div
                className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 mx-auto rounded-full bg-minxfy-green"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.p
                className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto text-slate-300 px-1 sm:px-2"
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
            </header>

            {/* Links Section */}
            <section className="space-y-3 sm:space-y-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  <Button
                    variant="outline"
                    className="w-full group relative overflow-hidden border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-slate-700/50 hover:bg-slate-600/60 text-white hover:shadow-minxfy-green/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 h-auto"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-minxfy-green/10 to-minxfy-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />

                      {/* Content */}
                      <div className="flex items-center justify-between relative z-10 w-full gap-3 sm:gap-4">
                        {/* Left Content */}
                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          {/* Icon */}
                          <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl transition-colors duration-300 bg-minxfy-green/20 text-minxfy-green group-hover:bg-minxfy-green/30 flex-shrink-0">
                            {link.icon}
                          </div>

                          {/* Text Content */}
                          <div className="text-left flex-1 min-w-0">
                            <div className="font-semibold text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 text-white group-hover:text-minxfy-green-light transition-colors duration-300 truncate">
                              {link.title}
                            </div>
                            <div className="text-xs sm:text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300 line-clamp-2">
                              {link.description}
                            </div>
                          </div>
                        </div>

                        {/* External Link Icon */}
                        <div className="flex-shrink-0">
                          <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 text-minxfy-green" />
                        </div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </section>
          </div>
        </Card>
      </motion.div>
    </main>
  )
}
