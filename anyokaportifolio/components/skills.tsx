import { Code, PenTool, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const technicalSkills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Languages & Frameworks",
      skills: ["JavaScript", "Node.js", "React", "Express", "HTML", "CSS", "React-Native"],
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Databases",
      skills: ["MongoDB", "SQL"],
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Design & Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Adobe Photoshop", "Canva", "Responsive Web Design"],
    },
  ]

  const softSkills = [
    {
      title: "Project Management",
      description: "Expertise in managing project timelines, coordinating resources, and balancing objectives.",
    },
    {
      title: "Collaboration",
      description: "Worked with cross-functional teams in design, production, and technical support.",
    },
    {
      title: "Client Engagement",
      description: "Skilled at transforming client requirements into actionable project plans.",
    },
    {
      title: "Data Analysis",
      description: "Utilized data-driven strategies to improve performance metrics.",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-waves">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Skills & Expertise</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h4 className="text-xl font-semibold text-secondary ml-3">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-8">Professional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-secondary mb-3">{skill.title}</h4>
                  <p className="text-gray-700">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

