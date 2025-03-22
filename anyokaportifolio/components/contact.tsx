import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6 text-white" />,
      title: "GitHub",
      link: "https://github.com/eliudanyoka",
      handle: "@eliudanyoka",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-white" />,
      title: "LinkedIn",
      link: "https://linkedin.com/in/eliudanyoka",
      handle: "@eliudanyoka",
    },
    {
      icon: <Twitter className="h-6 w-6 text-white" />,
      title: "Twitter",
      link: "https://twitter.com/eliudanyoka",
      handle: "@eliudanyoka",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-waves">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16 tracking-tight">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">Email</h4>
                  <a 
                    href="mailto:contact@eliudanyoka.com" 
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    contact@eliudanyoka.com
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">Phone</h4>
                  <a 
                    href="tel:+254712345678" 
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    +254 712 345 678
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">Location</h4>
                  <p className="text-gray-700">Malindi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Connect With Me</h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{social.title}</h4>
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {social.handle}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}