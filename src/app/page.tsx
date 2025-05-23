// src/app/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, DownloadCloud, ExternalLink } from 'lucide-react';
import TypingText from '@/components/shared/TypingText';
import GitHubActivityGrid from '@/components/shared/GitHubActivityGrid'; // Import the new component

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <SectionWrapper className="w-full text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full animate-subtle-float animation-delay-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/40 rounded-full animate-subtle-float animation-delay-2000"></div>
           <div className="absolute top-1/2 right-1/5 w-16 h-16 bg-primary/20 rounded-full animate-subtle-float animation-delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <Image 
            src="https://placehold.co/150x150.png" 
            alt="MD. Ehtesamul Haque Fahim" 
            width={150} 
            height={150} 
            className="rounded-full mx-auto mb-6 border-4 border-primary/50 shadow-lg animate-fadeInUp"
            data-ai-hint="developer portrait"
            priority
          />
          <p className="text-2xl md:text-3xl text-neon-glow mb-1 animate-fadeInUp animation-delay-200">
            Hello, I&apos;m
          </p>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-neon-glow animate-fadeInUp animation-delay-300"
          >
            <TypingText 
              text="MD. Ehtesamul Haque Fahim" 
              typingSpeed={100} 
              initialDelayForTyping={900} // Starts after h1 fade in (0.3s delay + 0.6s duration)
              className="inline-block"
              cursorClassName="inline-block w-[3px] h-[0.85em] bg-primary animate-blink align-text-bottom ml-1"
            />
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-500">
            A dedicated <span className="text-primary font-semibold">Full Stack Software Engineer (MERN)</span> with a strong foundation in digital marketing. I am passionate about integrating web development skills with marketing strategies to deliver user-centric, scalable solutions.
          </p>
          <div className="space-x-4 animate-fadeInUp animation-delay-700">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300">
              <Link href="/contact">
                Get In Touch <DownloadCloud className="ml-2 h-5 w-5" /> {/* Changed icon for relevance */}
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="quick-intro" className="w-full animate-fadeInUp" style={{animationDelay: '0.8s'}}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}> {/* Relative to parent SectionWrapper */}
            <h2 className="text-3xl font-bold mb-4 text-primary">A Glimpse About Me</h2>
            <p className="text-lg text-foreground/80 mb-4">
              I thrive on building user-centric, scalable web applications using the MERN stack. With experience in developing complex systems, including AI model integration and multi-vendor e-commerce platforms, I aim to leverage my expertise to contribute to impactful projects and help businesses grow digitally.
            </p>
            <p className="text-lg text-foreground/80">
              My goal is to not just write code, but to create experiences that resonate and make a difference.
            </p>
            <Button asChild variant="link" className="text-primary px-0 mt-4 text-lg hover:underline">
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}> {/* Relative to parent SectionWrapper */}
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Abstract representation of coding" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
              data-ai-hint="web development"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="github-activity" className="w-full animate-fadeInUp" style={{animationDelay: '1.2s'}}>
        <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          My GitHub Journey
        </h2>
        <div className="flex justify-center mb-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="overflow-x-auto p-2 bg-card/30 dark:bg-card/50 rounded-lg shadow-inner">
            <GitHubActivityGrid />
          </div>
        </div>
        <div className="text-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300">
            <Link href="https://github.com/FahimEhtesham73" target="_blank" rel="noopener noreferrer">
              View My GitHub Profile <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
