// src/app/about/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, Lightbulb, Users, Zap, Target, Brain, Handshake, GraduationCap, Award, CalendarDays } from 'lucide-react';

export default function AboutPage() {
  const educationItems = [
    {
      icon: GraduationCap,
      title: "Master of Science in Information and Communication Engineering",
      institution: "Bangladesh University of Professionals (BUP)",
      location: "Dhaka, Bangladesh",
      duration: "2022 - Present",
      grade: "CGPA: 3.48 / 4.0",
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Science in Information and Communication Engineering",
      institution: "Bangladesh University of Professionals (BUP)",
      location: "Dhaka, Bangladesh",
      duration: "2017 - 2021",
      grade: "CGPA: 2.81 / 4.0",
    },
    {
      icon: CalendarDays,
      title: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College",
      location: "Dhaka, Bangladesh",
      duration: "2016",
      grade: "GPA: 5.0 / 5.0",
    },
    {
      icon: CalendarDays,
      title: "Secondary School Certificate (SSC)",
      institution: "BCIC School and College",
      location: "Dhaka, Bangladesh",
      duration: "2014",
      grade: "GPA: 5.0 / 5.0",
    },
    {
      icon: Award,
      title: "Specialized Training in Digital Marketing",
      institution: "Creative IT Institute",
      location: "Dhaka, Bangladesh",
      duration: null, 
      grade: null, 
    },
  ];

  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fadeInUp">About Me</h1>
      
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2 animate-fadeInUp animation-delay-200">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <Image 
                src="/Fahim.png" 
                alt="MD. Ehtesamul Haque Fahim - Professional" 
                width={900} 
                height={1000}
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

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Education &amp; Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-card/50 border border-border/70 hover:shadow-lg hover:border-primary/40 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-center mb-2">
                    <item.icon className="h-7 w-7 text-primary mr-3 shrink-0" />
                    <h3 className="font-semibold text-xl text-primary/90">{item.title}</h3>
                  </div>
                  <div className="pl-10 mt-1 space-y-1.5">
                    <p className="text-md font-semibold text-foreground/90">{item.institution}</p>
                    {(item.location || item.duration) && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        {item.location && <span>{item.location}</span>}
                        {item.location && item.duration && <span className="mx-1.5 text-xs">&bull;</span>}
                        {item.duration && <span>{item.duration}</span>}
                      </div>
                    )}
                    {item.grade && <p className="text-sm font-semibold text-primary/80">{item.grade}</p>}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
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

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
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
