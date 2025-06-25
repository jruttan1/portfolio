"use client"
import Image from "next/image";
import './globals.css'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Nav from "@/components/nav"
import Dither from "@/components/ui/Backgrounds/Dither/Dither"
import Silk from "@/components/ui/Backgrounds/Silk/Silk"
import CardSwap, { Card } from '@/components/ui/Components/CardSwap/CardSwap'

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
        <main className="flex flex-col gap-[20px] items-center justify-center text-center px-8" style={{ height: 'calc(100vh - 80px)' }}>
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
        <section className="min-h-screen flex flex-col justify-center items-center py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="flex justify-center items-center flex-1 max-w-6xl mx-auto">
            <CardSwap
              cardDistance={60}
              verticalDistance={80}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3>TableTap</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>WalletWise</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>TravelGenie</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>ACL Paper</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20 bg-black/40">
          <p className="text-white/80 mb-6 text-lg">
            Interested in working together?
          </p>
          <Button asChild variant="hero" size="lg">
            <Link href="mailto:john@example.com">Get In Touch</Link>
          </Button>
        </section>
        
      </div>
    </div>
  );
}
