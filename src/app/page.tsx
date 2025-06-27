"use client" // Next.js directive - makes this a client-side component (needed for interactivity)

// Import necessary dependencies
import { motion } from "framer-motion" // Animation library for smooth transitions
import { FaTwitter, FaEnvelope, FaExternalLinkAlt, FaRocket } from "react-icons/fa" // Icon components
import { Button } from "@/components/ui/button" // Custom UI button component
import { Card } from "@/components/ui/card" // Custom UI card component

// Main component for the home page, which serves as the landing page for Minxfy
// This component is responsible for rendering the main content of the page
// It includes a header, description, and several interactive links
export default function Home() {
  // Data array containing all the link information
  const links = [
    {
      title: "Convertey - Online File Converter",
      href: "#", // Placeholder link
      icon: <FaRocket className="w-5 h-5 sm:w-6 sm:h-6" />, // Responsive icon sizes
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
      href: "mailto:minxfy@proton.me", // Email link that opens default mail client
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Reach out to us through email",
    },
  ]

  return (
    // Main container with full screen height and gradient background
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 flex justify-center relative overflow-hidden py-4 px-3 sm:py-6 sm:px-4 md:py-8 md:px-6">
      
      {/* Decorative background blur elements for visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left animated blur circle */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 md:top-20 md:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full blur-3xl opacity-15 bg-minxfy-green animate-pulse" />
        
        {/* Bottom-right animated blur circle with delayed animation */}
        <div
          className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 md:bottom-20 md:right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-15 bg-minxfy-green animate-pulse"
          style={{ animationDelay: "2s" }} // Starts pulsing 2 seconds after the first one
        />
      </div>

      {/* Main content wrapper with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Starts invisible and slightly below
        animate={{ opacity: 1, y: 0 }} // Animates to visible and normal position
        transition={{ duration: 0.6 }} // Animation takes 0.6 seconds
        className="w-full max-w-2xl mx-auto mt-4 mb-2 sm:mt-8 sm:mb-4 md:mt-12 md:mb-6"
      >
        {/* Main card with glassmorphism effect */}
        <Card className="backdrop-blur-xl border-0 shadow-2xl bg-slate-800/40 shadow-minxfy-green/10 mx-2 sm:mx-0">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8">
            
            {/* Header Section - Company name and description */}
            <header className="text-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
              
              {/* Company name with slide-down animation */}
              <motion.div
                initial={{ opacity: 0, y: -30 }} // Starts invisible and above
                animate={{ opacity: 1, y: 0 }} // Slides down to position
                transition={{ duration: 0.8, delay: 0.2 }} // Delayed start for staggered effect
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-minxfy-green leading-tight"
                  style={{ fontFamily: "Ebrima, sans-serif", fontWeight: "bold" }} // Custom font
                >
                  Minxfy
                </h1>
              </motion.div>

              {/* Decorative horizontal line that expands */}
              <motion.div
                className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 mx-auto rounded-full bg-minxfy-green"
                initial={{ width: 0 }} // Starts with no width
                animate={{ width: "auto" }} // Expands to full width
                transition={{ duration: 0.8, delay: 0.4 }} // Starts after the title
              />

              {/* Company description with fade-up animation */}
              <motion.p
                className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto text-slate-300 px-1 sm:px-2"
                initial={{ opacity: 0, y: 20 }} // Starts invisible and below
                animate={{ opacity: 1, y: 0 }} // Fades in and moves up
                transition={{ duration: 0.8, delay: 0.6 }} // Starts after the line
              >
                Previously known as CosmoCrafters. We are core developers of{" "}
                {/* Link to GitHub project with hover effects */}
                <a
                  href="https://github.com/Minxfy/convertey"
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security attributes
                  className="text-minxfy-green hover:text-minxfy-green-light transition-colors font-medium underline decoration-minxfy-green underline-offset-4"
                >
                  @Convertey
                </a>
                , a modern, powerful, and user-friendly online file conversion tool.
              </motion.p>
            </header>

            {/* Links Section - Interactive buttons for each link */}
            <section className="space-y-3 sm:space-y-4">
              {/* Map through each link and create an animated button */}
              {links.map((link, index) => (
                <motion.div
                  key={link.href} // Unique key for React rendering
                  initial={{ opacity: 0, x: -30 }} // Starts invisible and to the left
                  animate={{ opacity: 1, x: 0 }} // Slides in from left
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }} // Staggered animation delay
                >
                  {/* Button component styled as a link card */}
                  <Button
                    variant="outline"
                    className="w-full group relative overflow-hidden border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-slate-700/50 hover:bg-slate-600/60 text-white hover:shadow-minxfy-green/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 h-auto"
                    asChild // Renders as the child component (anchor tag)
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                      
                      {/* Hover overlay effect - appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-minxfy-green/10 to-minxfy-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />

                      {/* Button content layout */}
                      <div className="flex items-center justify-between relative z-10 w-full gap-3 sm:gap-4">
                        
                        {/* Left side content - icon and text */}
                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          
                          {/* Icon container with background */}
                          <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl transition-colors duration-300 bg-minxfy-green/20 text-minxfy-green group-hover:bg-minxfy-green/30 flex-shrink-0">
                            {link.icon}
                          </div>

                          {/* Text content - title and description */}
                          <div className="text-left flex-1 min-w-0">
                            {/* Link title */}
                            <div className="font-semibold text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 text-white group-hover:text-minxfy-green-light transition-colors duration-300 truncate">
                              {link.title}
                            </div>
                            {/* Link description */}
                            <div className="text-xs sm:text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300 line-clamp-2">
                              {link.description}
                            </div>
                          </div>
                        </div>

                        {/* Right side - external link indicator */}
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