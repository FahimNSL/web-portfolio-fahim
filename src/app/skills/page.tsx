// src/app/skills/page.tsx
"use client"; 
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, PenTool, Settings, Palette, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon?: React.ElementType;
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
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React & Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Node.js & Express.js', level: 85 },
      { name: 'Python (Django/Flask)', level: 75 },
      { name: 'RESTful APIs & GraphQL', level: 80 },
      { name: 'PostgreSQL & MongoDB', level: 78 },
      { name: 'Firebase', level: 82 },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: Settings,
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD (GitHub Actions)', level: 65 },
      { name: 'Webpack & Babel', level: 75 },
      { name: 'VS Code', level: 98 },
    ],
  },
  {
    name: 'Design & UI/UX',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Responsive Design', level: 92 },
      { name: 'User Experience Principles', level: 75 },
      { name: 'Prototyping', level: 70 },
    ],
  },
   {
    name: 'Soft Skills',
    icon: Zap,
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 88 },
      { name: 'Adaptability', level: 92 },
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
