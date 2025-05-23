// src/app/about/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, Lightbulb, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fadeInUp">About Me</h1>
      
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2 animate-fadeInUp animation-delay-200">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <Image 
                src="https://placehold.co/400x500.png" 
                alt="Persona Nova - Professional" 
                width={400} 
                height={500}
                className="object-cover w-full h-auto"
                data-ai-hint="professional person"
                priority
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-8 animate-fadeInUp animation-delay-400">
          <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 text-lg">
              <p>
                From a young age, I was captivated by how technology could shape the world. This curiosity led me down the path of software development, where I discovered my passion for creating intuitive and impactful digital solutions.
              </p>
              <p>
                I began my journey focusing on front-end development, mastering HTML, CSS, and JavaScript. As my skills grew, I delved into modern frameworks like React and Next.js, enabling me to build dynamic and responsive user interfaces. My drive to understand the full picture pushed me to explore backend technologies, including Node.js, Express, and databases like PostgreSQL and MongoDB, transforming me into a versatile full-stack developer.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Philosophy & Values</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 text-lg">
              <p>
                I believe in writing clean, maintainable, and scalable code. Continuous learning is at the core of my approach, as I constantly seek out new technologies and best practices to enhance my skill set. Collaboration and effective communication are key to my work ethic, ensuring successful project outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><Zap className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Problem Solver:</strong> I enjoy tackling complex challenges and finding innovative solutions.</span></li>
                <li className="flex items-start"><Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Lifelong Learner:</strong> The tech world is ever-evolving, and I'm committed to growing with it.</span></li>
                <li className="flex items-start"><Users className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Team Player:</strong> I value collaboration and believe the best products are built together.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Beyond the Code</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 text-lg">
              <p>
                When I&apos;m not coding, I enjoy exploring new hiking trails, diving into sci-fi novels, and experimenting with creative cooking. These activities help me recharge and bring fresh perspectives to my work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
