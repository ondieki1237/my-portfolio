import { GraduationCap, Award, Calendar, Code, Brain, Megaphone, Factory } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "Digitech Coursework",
      institution: "Elimu Resource Centre, Malindi",
      year: "2024",
      description: "Coursework in Web Development, Graphic Design, Mobile App Development, Robotics and Photography.",
      icon: Code,
    },
    {
      degree: "Intermediate Machine Learning",
      institution: "Kaggle",
      year: "2023",
      description:
        "Advanced machine learning techniques including feature engineering, model validation, and ensemble methods.",
      certificate: "https://www.kaggle.com/learn/certification/eliudanyoka/intermediate-machine-learning",
      icon: Brain,
    },
    {
      degree: "Digital Marketing",
      institution: "HubSpot Academy",
      year: "2022",
      description: "Comprehensive training in digital marketing strategies, SEO, content marketing, and analytics.",
      certificate: "https://app.hubspot.com/academy/achievements/fwzsb985/en/1/eliud-anyoka/digital-marketing",
      icon: Megaphone,
    },
    {
      degree: "Bachelor of Science in Manufacturing Engineering",
      institution: "Kenyatta University, Nairobi",
      year: "2004 – 2009",
      description: "",
      icon: Factory,
    },
  ]

  return (
    <section id="education" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card 
                key={index} 
                className="border-primary/10 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center border border-primary/20">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary text-center mb-3 line-clamp-2 min-h-[3rem]">
                    {item.degree}
                  </h3>
                  <div className="flex items-center justify-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{item.year}</span>
                  </div>
                  <p className="text-center text-gray-700 font-medium mb-4">{item.institution}</p>
                  {item.description && (
                    <p className="text-center text-gray-600 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  )}
                  {item.certificate && (
                    <div className="mt-4 flex justify-center">
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        <Award className="h-4 w-4 mr-2" />
                        View Certificate
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}