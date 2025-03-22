"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-primary">Eliud Anyoka</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["hero", "skills", "projects", "experience", "education", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-secondary hover:text-primary font-medium capitalize"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["hero", "skills", "projects", "experience", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-secondary hover:text-primary font-medium py-2 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

