"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const images = [
    "/images/WhatsApp Image 2024-10-19 at 11.57.02_5822fc48.jpg",
    "/images/WhatsApp Image 2024-10-19 at 11.57.02_eca6b32d.jpg",
    "/images/WhatsApp Image 2024-10-19 at 12.04.57_7494dbe8.jpg",
  ]

  const skills = [
    { name: "React", description: "Advanced proficiency in building dynamic UIs", level: "Expert" },
    { name: "Node.js", description: "Backend development with Express", level: "Advanced" },
    { name: "MongoDB", description: "NoSQL database management", level: "Advanced" },
    { name: "Digital Marketing", description: "SEO and content strategies", level: "Intermediate" },
    { name: "Technical Sales", description: "10+ years in sales leadership", level: "Expert" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Increased to 5 seconds for better viewing experience
    return () => clearInterval(interval)
  }, [images.length])

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative">
        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10 z-10 bg-white/80 backdrop-blur-sm md:bg-transparent rounded-xl p-6 md:p-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Eliud Anyoka
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Developer & Technical Sales Professional
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A versatile professional who leverages technical and business skills to develop digital solutions that meet
            both user and business needs. With over 10 years in technical sales and 4+ years in management, I bring a
            unique perspective to development projects.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="block text-2xl font-bold text-primary">10+ Years</span>
              <p className="text-secondary">In Technical Sales Experience</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="block text-2xl font-bold text-primary">4+ Years</span>
              <p className="text-secondary">In Management Experience</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="block text-2xl font-bold text-primary">4+ Projects</span>
              <p className="text-secondary">Developed and still developing more</p>
            </div>
          </motion.div>

          {/* Skills Cloud */}
          <motion.div 
            className="relative flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.span
                  className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full text-sm font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.span>
                <AnimatePresence>
                  {hoveredSkill === index && (
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg shadow-xl text-xs w-48 z-20 border border-primary/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <p className="font-semibold text-primary">{skill.level}</p>
                      <p>{skill.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section with Curved Separation */}
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-green-500 to-teal-600 rounded-xl -z-10">
            <svg
              className="absolute top-0 left-0 h-full w-1/3"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M0,0 C50,0 50,100 100,100 L0,100 Z" fill="white" />
            </svg>
          </div>
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl relative">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? "bg-white w-6" 
                    : "bg-white/30 hover:bg-white/50"
                } shadow-sm`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Button 
          onClick={scrollToSkills} 
          variant="ghost" 
          className="animate-bounce mt-8 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </Button>
      </motion.div>
    </section>
  )
}