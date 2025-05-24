// src/app/about/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, Lightbulb, Users, Zap, Target, Brain, Handshake, GraduationCap, Award, CalendarDays } from 'lucide-react';

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
                alt="MD. Ehtesamul Haque Fahim - Professional" 
                width={400} 
                height={500}
                className="object-cover w-full h-auto"
                data-ai-hint="professional portrait"
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
                I am a dedicated Full Stack Software Engineer with robust hands-on experience in the MERN stack and a strong foundation in digital marketing. As a graduate from Bangladesh University of Professionals (BUP) with specialized training in Digital Marketing from Creative IT, I bring a unique blend of technical expertise and marketing acumen.
              </p>
              <p>
                My professional journey began at Next Solution Lab as an Associate Full Stack Software Engineer. There, I honed my skills in writing reusable code and comprehensive documentation. I have developed and collaborated on complex systems using React.js for intuitive frontends, and Node.js, Express, and MongoDB for powerful backends. This includes integrating AI models and deploying applications on AWS EC2. Key projects have involved an office portal for attendance and project management, a multi-vendor e-commerce website, data extraction/annotation tools, and multilingual (English/Japanese) websites.
              </p>
              <p>
                Concurrently, I serve as a part-time Global Marketing Officer at Next Solution Lab, where I contribute to lead generation via LinkedIn Sales Navigator and email marketing. My responsibilities also include performing website audits, conducting keyword research, managing SEO efforts, and utilizing Google Analytics to monitor and enhance website performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Education &amp; Certifications</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-6 text-lg">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-8 w-8 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary/90">Master of Science in Information and Communication Engineering</h3>
                  <p className="text-foreground/80">Bangladesh University of Professionals (BUP)</p>
                  <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                  <p className="text-sm text-muted-foreground">CGPA: 3.48 / 4.0</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-8 w-8 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary/90">Bachelor of Science in Information and Communication Engineering</h3>
                  <p className="text-foreground/80">Bangladesh University of Professionals (BUP)</p>
                  <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                  <p className="text-sm text-muted-foreground">2017 - 2021</p>
                  <p className="text-sm text-muted-foreground">CGPA: 2.81 / 4.0</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CalendarDays className="h-8 w-8 text-primary mt-1 shrink-0" /> {/* Using CalendarDays for HSC/SSC */}
                <div>
                  <h3 className="font-semibold text-xl text-primary/90">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-foreground/80">BCIC College</p>
                  <p className="text-sm text-muted-foreground">2016</p>
                  <p className="text-sm text-muted-foreground">GPA: 5.0 / 5.0</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CalendarDays className="h-8 w-8 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary/90">Secondary School Certificate (SSC)</h3>
                  <p className="text-foreground/80">BCIC School and College</p>
                  <p className="text-sm text-muted-foreground">2014</p>
                  <p className="text-sm text-muted-foreground">GPA: 5.0 / 5.0</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary/90">Specialized Training in Digital Marketing</h3>
                  <p className="text-foreground/80">Creative IT Institute</p>
                  <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Philosophy &amp; Values</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 text-lg">
              <p>
                I am passionate about integrating my web development skills with marketing strategies to deliver user-centric, scalable solutions. My primary aim is to leverage my expertise in both technology and marketing to contribute to impactful projects and help businesses achieve digital growth in the IT industry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><Target className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Problem Solver:</strong> Keen on tackling complex challenges and finding innovative, user-centric solutions through logical thinking.</span></li>
                <li className="flex items-start"><Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Lifelong Learner:</strong> Committed to continuous learning and embracing new challenges in web development and digital marketing.</span></li>
                <li className="flex items-start"><Users className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Team Player:</strong> Value teamwork and possess strong communication and listening skills, believing the best products are built collaboratively.</span></li>
                <li className="flex items-start"><Brain className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Multitasking &amp; Punctual:</strong> Efficiently manage multiple tasks and adhere to timelines with a strong sense of punctuality.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Beyond the Code</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 text-lg">
              <p>
                When I&apos;m not immersed in development or marketing strategies, I actively seek experiences that broaden my perspective. I have volunteered with UNICEF on the Rubella Measles vaccination campaign, organized community-building events at Impact Hub Dhaka, and participated in BUP ICT Fest and BUP TECHSURGENCE. These activities fuel my passion for teamwork, networking, and continuous personal development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
