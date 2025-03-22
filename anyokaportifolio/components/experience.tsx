"use client"

import {
  LineChartIcon as ChartLine,
  MapPin,
  Target,
  UserCheck,
  Search,
  ClapperboardIcon as ChalkboardTeacher,
  GraduationCap,
  Users,
  Wallet,
  Clock,
  ClipboardList,
  Briefcase,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Experience() {
  const achievements = [
    {
      icon: <ChartLine className="h-6 w-6 text-white" />,
      title: "Sales Growth",
      description: "Led a branch to a 70% increase in annual sales, transforming it into a model branch.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Market Expansion",
      description: "Successfully opened new territories for underperforming products.",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Sales Strategy",
      description: "Spearheaded strategies contributing to a 40% increase in branch sales.",
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Client Relationship Management",
      description: "Managed relationships with key clients, ensuring satisfaction and fostering loyalty.",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Competitive Analysis",
      description: "Analyzed competitor products to position offerings effectively.",
    },
    {
      icon: <ChalkboardTeacher className="h-6 w-6 text-white" />,
      title: "Sales Presentations",
      description: "Conducted technical product presentations and demos, increasing sales.",
    },
  ]

  const managementAchievements = [
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Employee Development",
      description: "Mentored and trained sales and customer service teams.",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Team Leadership",
      description: "Established and led cross-functional teams across departments.",
    },
    {
      icon: <Wallet className="h-6 w-6 text-white" />,
      title: "Financial Management",
      description: "Monitored financial performance and managed branch budgets.",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Operational Efficiency",
      description: "Spearheaded process optimization to boost team productivity.",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-white" />,
      title: "Strategic Business Planning",
      description: "Led business strategy and planning efforts.",
    },
  ]

  const workExperience = [
    {
      role: "Freelancer / Technical Sales Lead",
      company: "Mishan Engineering Ltd., Malindi",
      duration: "May 2022 – 2023",
      responsibilities: [
        "Led process improvements to enhance team productivity",
        "Translated client visions into actionable project plans",
        "Coordinated budgeting and resource allocation",
        "Worked with design and production teams",
      ],
    },
    {
      role: "Branch Manager & Business Leader",
      company: "Car and General Ltd., Kisii",
      duration: "Aug 2018 – Dec 2020",
      responsibilities: [
        "Conducted market research and competitive analysis",
        "Established and led cross-functional teams",
        "Monitored financial performance and implemented budgeting practices",
      ],
    },
    {
      role: "Assistant Sales Manager",
      company: "Car and General Ltd., Malindi",
      duration: "May 2016 – Jul 2018",
      responsibilities: [
        "Implemented data-driven sales and marketing strategies",
        "Coached and mentored technical and sales teams",
        "Managed relationships with key clients",
      ],
    },
    {
      role: "Sales Engineer",
      company: "Ecosave Ltd., Nairobi",
      duration: "Sep 2009 – Aug 2010",
      responsibilities: [
        "Delivered technical product presentations and demos",
        "Analyzed competitor products to position offerings effectively",
        "Collaborated with technical teams to ensure customer requirements were met",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-secondary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work Experience
          </motion.h3>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card 
                  className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{job.role}</h4>
                        <p className="text-secondary font-medium">{job.company}</p>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 md:mt-0 bg-accent/20 px-3 py-1 rounded-full border border-primary/10">
                        {job.duration}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <Briefcase className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3 
              className="text-2xl font-semibold text-secondary mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Key Achievements
            </motion.h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mt-1 mr-4 flex-shrink-0 bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-full shadow-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3 
              className="text-2xl font-semibold text-secondary mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Management Achievements
            </motion.h3>
            <div className="space-y-6">
              {managementAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mt-1 mr-4 flex-shrink-0 bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-full shadow-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}