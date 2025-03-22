"use client"

import { ExternalLink, Utensils, HeartPulse, Radio, Newspaper } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Anyoka Eats",
      description: "Online Restaurant Platform with user authentication, order tracking, and dynamic pricing.",
      role: "Lead Developer",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      icon: Utensils,
      link: "https://anyokaeats.com",
    },
    {
      title: "Health Management App",
      description:
        "Personalized health management application that uses data-driven insights to help users track and improve their health.",
      role: "Lead Developer and Business Strategist",
      technologies: ["React Native", "Node.js", "MongoDB"],
      icon: HeartPulse,
      link: "#",
    },
    {
      title: "Generative AI Radio",
      description: "AI-driven radio platform that delivers personalized content to listeners.",
      role: "Lead Developer and Strategic Planner",
      technologies: ["React", "Node.js", "AI APIs"],
      icon: Radio,
      link: "#",
    },
    {
      title: "Digital Print Media Platform",
      description:
        "Digital media platform that combines AI and print media, offering personalized content and interactive features.",
      role: "Lead Developer and UX Consultant",
      technologies: ["MERN Stack", "AI Integration"],
      icon: Newspaper,
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card 
                key={index} 
                className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6 pt-4">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center border border-green-600">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3 text-center line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p className="text-gray-700 mb-4 text-center text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-accent/5 p-4 flex justify-center">
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}