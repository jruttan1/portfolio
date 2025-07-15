"use client"
import Image from "next/image";
import './globals.css'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Nav from "@/components/nav"
import Dither from "@/components/ui/Backgrounds/Dither/Dither"
import ShinyText from '@/components/ui/TextAnimations/ShinyText/ShinyText'
import CountUp from '@/components/ui/TextAnimations/CountUp/CountUp'
import { motion } from 'framer-motion'
import { FaReact, FaNode, FaPython, FaGitAlt, FaDatabase, FaCloud, FaRocket, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiExpress, SiPostgresql, SiDocker, SiKubernetes, SiJavascript, SiPython, SiReact, SiNodedotjs, SiOpenjdk, SiPytorch, SiTensorflow, SiMongodb } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import NextLink from "next/link";
import { GalleryHorizontalEnd } from "lucide-react";

export default function Home() {
  const skills = [
    { name: "React", icon: <SiReact className="text-slate-400" />},
    { name: "Next.js", icon: <SiNextdotjs className="text-stone-300" />},
    { name: "Node.js", icon: <SiNodedotjs className="text-slate-500" />},
    { name: "TypeScript", icon: <SiTypescript className="text-stone-400" />},
    { name: "Python", icon: <SiPython className="text-slate-600" />},
    { name: "Express", icon: <SiExpress className="text-stone-300" />},
    { name: "MongoDB", icon: <SiMongodb className="text-slate-500" />},
    { name: "Tailwind", icon: <SiTailwindcss className="text-stone-400" />},
    { name: "OpenJDK", icon: <SiOpenjdk className="text-slate-600" />},
    { name: "Pytorch", icon: <SiPytorch className="text-stone-500" />},
    { name: "Git", icon: <FaGitAlt className="text-slate-500" />}
  ];

  const experiences = [
    {
      title: "Senior Fullstack Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices."
    },
    {
      title: "Fullstack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Developed modern user interfaces with React and implemented responsive designs. Optimized application performance and user experience."
    }
  ];

  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "An intelligent code completion and review tool that uses machine learning to suggest optimizations and catch potential bugs.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "In Development",
      features: [
        "Real-time code analysis",
        "Automated bug detection",
        "Smart code suggestions",
        "Multi-language support"
      ],
      demo: null,
      github: "https://github.com/johnruttan/ai-code-assistant",
      color: "from-stone-700 to-slate-800",
      image: "/api/placeholder/400/240"
    },
    {
      title: "Distributed Task Scheduler",
      description: "A scalable microservices architecture for handling background job processing with real-time monitoring and fault tolerance.",
      tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
      status: "Completed",
      features: [
        "Horizontal scaling",
        "Real-time monitoring",
        "Fault tolerance",
        "REST API integration"
      ],
      demo: null,
      github: "https://github.com/johnruttan/task-scheduler",
      color: "from-slate-700 to-stone-800",
      image: "/api/placeholder/400/240"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A comprehensive dashboard for tracking user behavior and system performance with interactive visualizations.",
      tech: ["React", "D3.js", "WebSocket", "Express"],
      status: "Beta testing",
      features: [
        "Real-time data visualization",
        "Custom metric tracking",
        "Interactive charts",
        "Export capabilities"
      ],
      demo: null,
      github: "https://github.com/johnruttan/analytics-dashboard",
      color: "from-stone-700 to-slate-800",
      image: "/api/placeholder/400/240"
    }
  ];

  return (
    <div className="relative">
      {/* Dither Background */}
      <div className="fixed inset-0 -z-10">
        <Dither
          waveSpeed={0.005}
          waveFrequency={1}
          waveAmplitude={0.3}
          waveColor={[0.1, 0.1, 0.1]}
          colorNum={3}
          pixelSize={2}
          enableMouseInteraction={false}
          dpr={1}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 bg-stone-900/70">
        <Nav />
        
        {/* Hero Section */}
        <main id="home" className="flex flex-col gap-[20px] items-center justify-center text-center px-8" style={{ height: 'calc(100vh - 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl my-underline inline-block pb-1"
          >
            John Ruttan
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl mb-4"
          >
            <ShinyText text="Fullstack Engineer" speed={3} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        Check out my projects{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 mt-8"
          >
            <Link href="https://github.com/jruttan1" className="text-stone-300/70 hover:text-stone-100 transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/john-ruttan-495866232" className="text-stone-300/70 hover:text-stone-100 transition-colors">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com/jruttan0" className="text-white/70 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </Link>
          </motion.div>
        </main>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
                      >
              <h2 className="text-5xl font-bold text-stone-100 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-stone-500 mx-auto"></div>
            </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-stone-800/90 backdrop-blur-sm rounded-xl border border-stone-700/50 overflow-hidden hover:border-stone-500/50 transition-all duration-300 project-card"
                >
                  {/* Video Header */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black">
                    {project.demo ? (
                      <iframe
                        src={project.demo}
                        title={`${project.title} Demo`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <div className="text-center">
                          <h3 className="text-3xl font-bold text-stone-100 mb-2">{project.title}</h3>
                          <p className="text-stone-200/80 text-sm">Demo video coming soon</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' ? 'bg-stone-700/30 text-stone-300' :
                          project.status === 'Beta testing' ? 'bg-slate-700/30 text-slate-300' :
                          project.status === 'Development' ? 'bg-stone-800/30 text-stone-300' :
                          'bg-stone-800/30 text-stone-400'
                        }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-stone-100 mb-2">{project.title}</h3>
                      <p className="text-stone-200/90 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                                              <h4 className="text-stone-400 font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-stone-700/50 px-3 py-1 rounded-full text-sm text-stone-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                                              <h4 className="text-stone-400 font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                                                      <li key={i} className="text-stone-200/80 flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                              {feature}
                            </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.demo && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-stone-400 text-stone-400 hover:bg-stone-400 hover:text-stone-100"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            View Live
                          </a>
                        </Button>
                      )}
                                              <Button 
                          size="sm" 
                          className="bg-stone-500 text-stone-100 hover:bg-stone-600"
                          asChild
                        >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
                          >
                <h2 className="text-5xl font-bold text-stone-100 mb-4">Technical Skills</h2>
                <div className="w-24 h-1 bg-stone-500 mx-auto"></div>
              </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-stone-800/30 backdrop-blur-sm rounded-xl p-6 border border-stone-700/30 hover:border-stone-500/50 hover:bg-stone-800/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-stone-100 font-medium text-center text-sm">{skill.name}</h3>
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-stone-500/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* 
        <section id="experience" className="min-h-screen flex flex-col justify-center py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-4">Experience</h2>
              <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-400 to-slate-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-12 pb-12"
                >
                                      <div className="absolute left-2 w-4 h-4 bg-stone-400 rounded-full border-4 border-black"></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                                          <p className="text-stone-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-white/70 text-sm mb-4">{exp.period}</p>
                    <p className="text-white/90">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        */}
        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-5xl font-bold text-stone-100 mb-4">Let&apos;s Build Something Amazing</h2>
                              <div className="w-24 h-1 bg-stone-500 mx-auto mb-8"></div>
                             <p className="text-xl text-stone-200/80 max-w-2xl mx-auto">
                 I&apos;m always open to discussing new opportunities, collaborating on interesting projects, or just having a chat about technology.
               </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <div className="bg-stone-800/30 backdrop-blur-sm rounded-lg p-8 border border-stone-700/30">
                <h3 className="text-2xl font-bold text-stone-100 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                                      <div className="flex items-center gap-3">
                      <FaEnvelope className="text-stone-500" />
                      <span className="text-stone-200/90">john.ruttan@email.com</span>
                    </div>
                  <div className="flex items-center gap-3">
                                          <FaLinkedin className="text-stone-500" />
                      <span className="text-stone-200/90">linkedin.com/in/johnruttan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGithub className="text-stone-500" />
                      <span className="text-stone-200/90">github.com/johnruttan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaTwitter className="text-stone-500" />
                    <span className="text-stone-200/90">@johnruttan</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-800/30 backdrop-blur-sm rounded-lg p-8 border border-stone-700/30">
                <h3 className="text-2xl font-bold text-stone-100 mb-6">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-stone-500 rounded-full animate-pulse"></div>
                    <span className="text-stone-200/90">Available for new opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                                          <FaRocket className="text-stone-500" />
                      <span className="text-stone-200/90">Open to remote work</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaDatabase className="text-stone-500" />
                      <span className="text-stone-200/90">Interested in full-stack roles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCloud className="text-stone-500" />
                    <span className="text-stone-200/90">Passionate about cloud architecture</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button asChild variant="hero" size="lg">
                <Link href="mailto:john.ruttan@email.com">
                  <FaEnvelope className="mr-2" />
                  Send Email
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-stone-900">
                <Link href="/resume.pdf">
                  <FaDownload className="mr-2" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
