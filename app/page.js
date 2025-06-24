"use client"
import Image from "next/image";
import './globals.css'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Nav from "@/components/nav"
import Dither from "@/components/ui/Backgrounds/Dither/Dither"
import Silk from "@/components/ui/Backgrounds/Silk/Silk";

export default function Home() {
  return (
    <div className="relative">
      {/* Dither Background */}
      <div className="fixed inset-0 -z-10">
        <Dither
          waveSpeed={0.005}             // cut the motion in half for a slow, calming drift
          waveFrequency={1}             // a single wave cycle across the whole screen
          waveAmplitude={0.3}           // low amplitude so the intensity never spikes
          waveColor={[0.1, 0.1, 0.1]}   // a very dark grey, not full-black, to blend smoothly
          colorNum={3}                  // only three shades: dark, mid, and light
          pixelSize={2}                 // bigger dots so the pattern feels more graphic and less noisy
          enableMouseInteraction={false}// turn off the reactive jitter
          dpr={1}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 bg-black/60">
        <Nav />
        
        {/* Hero Section */}
        <main className="flex flex-col gap-[20px] items-center justify-center text-center min-h-screen px-8">
          <div className="text-6xl my-underline inline-block pb-1">
            John Ruttan
          </div>
          <div className="text-4xl">
            Fullstack Engineer
          </div>
          <div className="w-[400px] pb-1 text-lg">
            I'm passionate about shipping impactful products. Currently building TableTap, I love turning complex problems into sleek, user first solutions.
          </div>
          <Button asChild variant="hero">
            <Link href="#projects"> View My Projects</Link>
          </Button>
        </main>
        
        {/* Projects Section */}
        <section id="projects" className="w-full max-w-6xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating impactful digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - TableTap */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">TableTap</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  A modern restaurant ordering platform that streamlines the dining experience with QR code menus and seamless payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Link href="#" target="_blank">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Link href="#" target="_blank">GitHub</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 - Portfolio */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Personal Portfolio</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  A modern, interactive portfolio showcasing liquid glass navigation and beautiful 3D backgrounds with React Three Fiber.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js 15</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Three.js</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Tailwind</span>
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Link href="#" target="_blank">Live Site</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Link href="#" target="_blank">Source</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 - Coming Soon */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Next Project</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Something exciting is brewing! Stay tuned for my upcoming project that will push the boundaries of web development.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">Coming Soon</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Innovation</span>
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 opacity-50 cursor-not-allowed">
                    <span>Coming Soon</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-white/80 mb-6 text-lg">
              Interested in working together?
            </p>
            <Button asChild variant="hero" size="lg">
              <Link href="mailto:john@example.com">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
