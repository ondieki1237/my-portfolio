import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Eliud Anyoka</h2>
            <p className="text-white/80 mt-2">Full-Stack Developer & Technical Sales Professional</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Eliud Anyoka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

