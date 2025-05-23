// src/app/skills/page.tsx
"use client"; 
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Settings, Cloud, Layers, Terminal, TrendingUp, Users, GitBranch, Cpu, Link2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React JS', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Material-UI', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
    ],
  },
  {
    name: 'State Management',
    icon: Layers,
    skills: [
      { name: 'Redux & Redux Toolkit', level: 85 },
      { name: 'Context API', level: 80 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    name: 'Version Control & Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Visual Studio Code', level: 98 },
    ],
  },
  {
    name: 'APIs & Authentication',
    icon: Link2,
    skills: [
      { name: 'REST APIs', level: 85 },
      { name: 'JSON', level: 90 },
      { name: 'JWT Authentication', level: 80 },
    ],
  },
  {
    name: 'Deployment & Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS EC2', level: 85 },
      { name: 'AWS Lambda', level: 80 },
      { name: 'AWS S3 Bucket', level: 75 },
      { name: 'AWS DocumentDB', level: 70 },
      { name: 'AWS CloudFront', level: 70 },
      { name: 'Netlify', level: 80 },
      { name: 'Heroku', level: 70 },
      { name: 'cPanel', level: 70 },
      { name: 'Vercel', level: 75 },
      { name: 'Cloudinary', level: 70 },
    ],
  },
  {
    name: 'Operating Systems',
    icon: Terminal,
    skills: [
      { name: 'Linux (Ubuntu)', level: 85 },
      { name: 'Windows', level: 90 },
    ],
  },
  {
    name: 'Digital Marketing',
    icon: TrendingUp,
    skills: [
      { name: 'Website Audit', level: 85 },
      { name: 'SEO & Keyword Research', level: 88 },
      { name: 'Google Analytics', level: 85 },
      { name: 'Social Media Marketing', level: 75 },
      { name: 'Email Marketing', level: 80 },
      { name: 'Wordpress', level: 70 },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving & Logical Thinking', level: 90 },
      { name: 'Professional Communication', level: 95 },
      { name: 'Team Collaboration', level: 92 },
      { name: 'Adaptability & Facing Challenges', level: 90 },
      { name: 'Multitasking & Punctuality', level: 88 },
    ],
  },
];

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp">My Expertise</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((category, index) => (
          <Card 
            key={category.name} 
            className="bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-primary/30 transition-shadow duration-300 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <category.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl text-primary/90">{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {category.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                    <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={mounted ? skill.level : 0} 
                    className="h-3 transition-all duration-1000 ease-out" 
                    indicatorClassName="bg-gradient-to-r from-primary/70 to-primary"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
