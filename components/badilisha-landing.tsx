"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Film, Camera, Video, Music, Users, Menu, X } from "lucide-react"
import Image from "next/image"

const BadilishaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      title: "Film Production",
      description: "Creating innovative films that showcase Ugandan stories and talent",
      icon: <Film className="w-10 h-10 text-amber-400" />,
    },
    {
      title: "Photography",
      description: "Professional photography services with a unique African perspective",
      icon: <Camera className="w-10 h-10 text-amber-400" />,
    },
    {
      title: "Video Production",
      description: "High-quality video content for commercials, music videos, and more",
      icon: <Video className="w-10 h-10 text-amber-400" />,
    },
    {
      title: "Music Production",
      description: "Creating authentic soundtracks and music that blend traditional and modern styles",
      icon: <Music className="w-10 h-10 text-amber-400" />,
    },
    {
      title: "Talent Management",
      description: "Discovering and nurturing Uganda's creative talent",
      icon: <Users className="w-10 h-10 text-amber-400" />,
    },
  ]

  const projects = [
    {
      title: "Akanyoola Bikya",
      description:
        "A captivating sitcom that explores the everyday lives of workers and residents at an arcade building, bringing humor and heart to the daily hustle of urban life in Uganda.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Akanyoola-Bikya-yhuLMJXQgmOgaxhIkSVFvK57AptA1w.png",
      alt: "Akanyoola Bikya Poster",
    },
    {
      title: "Elders Classroom",
      description:
        "A heartwarming sitcom following the journey of older individuals who return to study, proving that learning truly never gets old as they rediscover themselves through education.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dstv_elders-classroom-s1_article%20%281%29-Uo2MPfUUhUNKeYFeezphpOhyPQOdfq.webp",
      alt: "Elders Classroom Promotional Image",
    },
    {
      title: "Tea Fields",
      description:
        "A compelling drama series that unfolds the story of an unexpected heir who inherits his father's tea fields company, navigating through business challenges, family dynamics, and personal growth.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tea.jpg-XzPpQNySrfJf8fcloMlpesRGzVkftc.jpeg",
      alt: "Tea Fields Show Poster",
    },
  ]

  return (
    <div className="relative">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-amber-400 rounded-full text-[#500014]">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#500014] bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-amber-400 text-xl font-bold">
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-amber-400 text-xl font-bold">
            About
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-amber-400 text-xl font-bold">
            Services
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-amber-400 text-xl font-bold">
            Projects
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center fixed w-full px-8 py-4 z-30 bg-[#500014] bg-opacity-80 backdrop-blur-sm">
        <div className="text-amber-400 text-2xl font-bold">BADILISHA STUDIOS</div>
        <div className="flex space-x-8">
          <a href="#home" className="text-amber-400 hover:text-pink-500 transition-colors">
            Home
          </a>
          <a href="#about" className="text-amber-400 hover:text-pink-500 transition-colors">
            About
          </a>
          <a href="#services" className="text-amber-400 hover:text-pink-500 transition-colors">
            Services
          </a>
          <a href="#projects" className="text-amber-400 hover:text-pink-500 transition-colors">
            Projects
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 relative"
      >
        <div className="absolute inset-0 bg-[#500014] bg-opacity-40 z-[-5]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 mb-6">BADILISHA STUDIOS</h1>
          <div className="h-1 w-40 md:w-60 bg-gradient-to-r from-amber-400 via-pink-500 to-amber-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
            Transforming Uganda's entertainment and media landscape with innovative storytelling
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400 to-pink-500 text-[#500014] font-bold rounded-full hover:from-pink-500 hover:to-amber-400 transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Story
          </a>
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#500014] bg-opacity-80 p-8 md:p-12 rounded-lg border border-amber-400/30 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-8 text-center">Our Story</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-pink-500 to-amber-400 rounded-lg opacity-75 blur"></div>
                  <div className="relative bg-[#500014] p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">Badilisha: The Meaning of Change</h3>
                    <p className="text-white mb-4">
                      Badilisha is a Swahili word that means <span className="text-amber-400 font-bold">Change</span>.
                      Our company was created at a time when we believed that the Ugandan entertainment and media
                      industry was in need of something new.
                    </p>
                    <p className="text-white">
                      The industry is going through different changes and numerous emerging trends, yet Uganda seemed to
                      have been left behind. Therefore, we created a media production company that is not afraid to
                      change and one that is ready to provide the Uganda arts and film scene with new and creative ideas
                      to enable it adapt to the changes in the industry the world over.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-400/20 to-pink-500/20 p-6 rounded-lg border border-amber-400/30">
                    <h4 className="text-xl font-bold text-amber-400 mb-2">Vision</h4>
                    <p className="text-white">To be the leading innovative media production company in East Africa</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-400/20 to-pink-500/20 p-6 rounded-lg border border-amber-400/30">
                    <h4 className="text-xl font-bold text-amber-400 mb-2">Mission</h4>
                    <p className="text-white">
                      To transform Uganda's entertainment landscape through creative storytelling
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-400/20 to-pink-500/20 p-6 rounded-lg border border-amber-400/30">
                    <h4 className="text-xl font-bold text-amber-400 mb-2">Innovation</h4>
                    <p className="text-white">Embracing new technologies and techniques in media production</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-400/20 to-pink-500/20 p-6 rounded-lg border border-amber-400/30">
                    <h4 className="text-xl font-bold text-amber-400 mb-2">Culture</h4>
                    <p className="text-white">Celebrating and showcasing authentic Ugandan stories and talent</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4 text-center">Our Services</h2>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              We offer a wide range of media production services to help bring your creative vision to life
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#500014]/80 to-[#500014]/60 p-6 rounded-lg border border-amber-400/30 hover:border-amber-400 transition-all duration-300 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">{service.title}</h3>
                  <p className="text-white">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-[#500014]/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4 text-center">Our Productions</h2>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Discover our latest shows that are transforming Uganda's entertainment landscape
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#500014] rounded-lg overflow-hidden border border-amber-400/30 hover:border-amber-400 transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-400 mb-3">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#500014] via-transparent to-transparent opacity-60"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-[#500014] border-t border-amber-400/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-amber-400">BADILISHA STUDIOS</h2>
              <p className="text-white text-sm mt-1">Transforming Uganda's entertainment landscape</p>
            </div>

            <div className="text-white text-sm">
              &copy; {new Date().getFullYear()} Badilisha Studios. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BadilishaLanding

