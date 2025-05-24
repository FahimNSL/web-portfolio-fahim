// src/app/skills/page.tsx
"use client"; 
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Settings, Cloud, Layers, Terminal, TrendingUp, Users, GitBranch, Cpu, Link2, Palette, Briefcase, CheckCircle, Search, ShieldCheck, Lightbulb, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom SVG Logo Components
const Html5Logo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10", className)}>
    <path fill="currentColor" d="M20.4 113.4l-8.6-97.3L64 4.3l52.2 11.8 8.6 97.3L64 123.7z"/>
    <path fill="currentColor" d="M64 15.8l42.3 9.6-7.2 81.4-35.1 9.7V15.8z" style={{ opacity: 0.9 }}/>
    <path fill="#EBEBEB" d="M64 44.4V63h32.6l-3 33.3-29.6 8.2V86.1h18.7l1.8-20.9H64zm0 51.1l.3.1h-.6L64 95.5z"/>
    <path fill="#FFF" d="M64 75.8v18.4l29.6-8.2 2.8-31H64zM64 44.4v18.6H31.4l-1.8 20.9H64v18.4l-29.6-8.2-2.8-33.3h32z"/>
  </svg>
);

const Css3Logo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10", className)}>
    <path fill="currentColor" d="M20.4 113.4l-8.6-97.3L64 4.3l52.2 11.8 8.6 97.3L64 123.7z"/>
    <path fill="currentColor" d="M64 15.8l42.3 9.6-7.2 81.4-35.1 9.7V15.8z" style={{ opacity: 0.9 }}/>
    <path fill="#FFF" d="M64 44.4H38.5l.7 8.2H64V44.4zm0 18.6H40.6l.7 8.2H64V63zm0 18.6H42.8l.7 8.2h13.3v-8.2l7.2-2.3z"/>
    <path fill="#EBEBEB" d="M64 44.4v8.2H48.4l-.7-8.2H64zm0 18.6v8.2H50.5l-.7-8.2H64zm0 18.6v5.9l-7.2 2.3-.4-2.3h-5.2l-.7-8.2h13.5z"/>
  </svg>
);

const JavaScriptLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10 rounded", className)}>
    <rect width="128" height="128" fill="currentColor"/>
    <path fill="#FFF" d="M64.13 91.33h13.37V77.96h10.03V64.6H77.5v-13.4h11.36V37.83H64.13v53.5zm-32.4-26.73c0 8.53 3.6 12.8 10.83 12.8 7.2 0 10.8-4.27 10.8-12.8V37.83H31.73v26.77z"/>
  </svg>
);

const ReactLogo = ({ className }: { className?: string }) => (
  <svg className={cn("h-10 w-10", className)} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NodeJsLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={cn("h-10 w-10", className)}>
    <path fill="currentColor" d="M128 0a128 128 0 100 256A128 128 0 00128 0z"/>
    <path fill="#FFF" d="M154.7 188.2c-2.5 2.9-5.9 4.3-10.1 4.3-7.3 0-12.9-4.5-15.7-12.1l-19.2-53.4h-1.2l-5.8 16.1-13.5 37.3h-20.7L91.8 96.7h20.7l12.7 38.9 5.8 17.7h1.2l18.8-56.6h20.2l-26.5 70.7c-.6 1.6.2 2.7 2.3 2.7 1.8 0 3.4-.9 4.5-2.7l23.2-65.7h20.3l-29.9 91.5z"/>
  </svg>
);

const TypeScriptLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10 rounded", className)}>
    <rect width="128" height="128" fill="currentColor"/>
    <path fill="#FFF" d="M25.5 91.3V37.8h44.3v10.6H36.1v11.3h31.6v10.6H36.1v10.5h33.7V91.3H25.5zm50.2-34.9c0-3.8 1.2-6.8 3.5-9.1s5.3-3.4 9-3.4c3.7 0 6.7 1.1 9 3.4s3.5 5.2 3.5 9.1v24.3c0 3.8-1.2 6.8-3.5 9.1s-5.3 3.4-9 3.4c-3.7 0-6.7-1.1-9-3.4s-3.5-5.2-3.5-9.1V56.4zm10.6 24.9c0 1.7.4 3 .9 3.9s1.4 1.3 2.5 1.3c1.1 0 1.9-.4 2.5-1.3s.9-2.2.9-3.9V55.8c0-1.7-.4-3-.9-3.9s-1.4-1.3-2.5-1.3c-1.1 0-1.9.4-2.5-1.3s-.9-2.2-.9-3.9v25.5z"/>
  </svg>
);

const TailwindCssLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6" className={cn("h-8 w-auto", className)}>
    <path fill="currentColor" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 27.733c29.867 0 51.2 23.467 51.2 51.2s-21.333 51.2-51.2 51.2c-17.067 0-32-6.4-44.8-19.2C76.8 136.533 97.067 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 23.467-29.867 0-51.2-23.467-51.2-51.2S98.133 25.6 128 25.6c17.067 0 32 6.4 44.8 19.2C158.933 17.067 138.667 0 128 0zM64 76.8c0 29.867-21.333 51.2-51.2 51.2S-12.8 106.667-12.8 76.8-1.867 25.6 29.867 25.6c17.067 0 32 6.4 44.8 19.2C60.267 27.733 40.533 12.8 12.8 12.8S-12.8 29.867-12.8 51.2c0 14.933 7.467 27.733 19.2 36.267C0 74.667-12.8 61.867-12.8 51.2-12.8 21.333 8.533 0 38.4 0s51.2 21.333 51.2 51.2c0 17.067-8.533 32-19.2 42.667C81.067 87.04 85.333 76.8 64 76.8z"/>
  </svg>
);

const ReduxLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={cn("h-10 w-10", className)}>
    <g transform="translate(50,50)" fill="currentColor">
      <path d="M0-38c17.35,0,27.88,12.24,27.88,28.49,0,16.06-10.72,28.09-27.88,28.09S-27.88,8.12-27.88-9.51C-27.88-25.76-17.35-38,0-38Zm0,8.36c-10.72,0-19.52,8.55-19.52,19.73s8.8,20.13,19.52,20.13,19.52-8.95,19.52-20.13S10.72-29.64,0-29.64Z"/>
      <path d="M0-24.92c10.72,0,19.52,8.55,19.52,19.73s-8.8,20.13-19.52,20.13S-19.52,3.36-19.52-7.82c0-11.18,8.8-17.1,19.52-17.1Zm0,31.73c5.2,0,9.56-4.17,9.56-9.35s-4.36-9.35-9.56-9.35-9.56,4.17-9.56,9.35S-5.2,6.81,0,6.81Z" transform="rotate(60)"/>
      <path d="M0-24.92c10.72,0,19.52,8.55,19.52,19.73s-8.8,20.13-19.52,20.13S-19.52,3.36-19.52-7.82c0-11.18,8.8-17.1,19.52-17.1Zm0,31.73c5.2,0,9.56-4.17,9.56-9.35s-4.36-9.35-9.56-9.35-9.56,4.17-9.56,9.35S-5.2,6.81,0,6.81Z" transform="rotate(-60)"/>
    </g>
  </svg>
);


export interface Skill {
  name: string;
  icon?: React.ElementType; // For Lucide icons
  customIconKey?: string; // Key for custom SVG components
}

export interface SkillCategory {
  name: string;
  icon: React.ElementType; // Category icon (Lucide)
  skills: Skill[];
}

export const skillData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React JS', customIconKey: 'ReactLogo' },
      { name: 'HTML5', customIconKey: 'Html5Logo' },
      { name: 'CSS3', customIconKey: 'Css3Logo' },
      { name: 'JavaScript (ES6+)', customIconKey: 'JavaScriptLogo' },
      { name: 'TypeScript', customIconKey: 'TypeScriptLogo' },
      { name: 'Bootstrap', icon: Palette }, 
      { name: 'Material-UI', icon: Palette },
      { name: 'Tailwind CSS', customIconKey: 'TailwindCssLogo' },
    ],
  },
  {
    name: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Node.js', customIconKey: 'NodeJsLogo' },
      { name: 'Express.js', icon: Settings }, 
    ],
  },
  {
    name: 'State Management',
    icon: Layers,
    skills: [
      { name: 'Redux & Redux Toolkit', customIconKey: 'ReduxLogo' }, 
      { name: 'Context API', icon: Layers },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
    ],
  },
  {
    name: 'Version Control & Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Visual Studio Code', icon: Terminal }, 
    ],
  },
  {
    name: 'APIs & Authentication',
    icon: Link2,
    skills: [
      { name: 'REST APIs', icon: Link2 },
      { name: 'JSON', icon: Code }, 
      { name: 'JWT Authentication', icon: ShieldCheck },
    ],
  },
  {
    name: 'Deployment & Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS EC2', icon: Cloud },
      { name: 'AWS Lambda', icon: Cloud },
      { name: 'AWS S3 Bucket', icon: Cloud },
      { name: 'AWS DocumentDB', icon: Cloud },
      { name: 'AWS CloudFront', icon: Cloud },
      { name: 'Netlify', icon: Cloud },
      { name: 'Heroku', icon: Cloud },
      { name: 'cPanel', icon: Settings },
      { name: 'Vercel', icon: Cloud },
      { name: 'Cloudinary', icon: Cloud },
    ],
  },
  {
    name: 'Operating Systems',
    icon: Terminal,
    skills: [
      { name: 'Linux (Ubuntu)', icon: Terminal },
      { name: 'Windows', icon: Terminal }, 
    ],
  },
  {
    name: 'Digital Marketing',
    icon: TrendingUp,
    skills: [
      { name: 'Website Audit', icon: Search },
      { name: 'SEO & Keyword Research', icon: Search },
      { name: 'Google Analytics', icon: TrendingUp },
      { name: 'Social Media Marketing', icon: Users },
      { name: 'Email Marketing', icon: Mail },
      { name: 'Wordpress', icon: Palette }, 
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving & Logical Thinking', icon: Lightbulb },
      { name: 'Professional Communication', icon: Briefcase },
      { name: 'Team Collaboration', icon: Users },
      { name: 'Adaptability & Facing Challenges', icon: ShieldCheck },
      { name: 'Multitasking & Punctuality', icon: CheckCircle },
    ],
  },
];

export default function SkillsPage() {
  const customIconComponents: Record<string, React.ElementType> = {
    Html5Logo,
    Css3Logo,
    JavaScriptLogo,
    ReactLogo,
    NodeJsLogo,
    TypeScriptLogo,
    TailwindCssLogo,
    ReduxLogo,
  };

  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 -z-10">
        <div className="absolute top-1/10 left-1/5 w-24 h-24 bg-primary/10 rounded-full animate-subtle-float animation-delay-0 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/15 rounded-lg animate-subtle-float animation-delay-1000 blur-lg transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-primary/5 rounded-xl animate-subtle-float animation-delay-2000 blur-md"></div>
        <div className="absolute bottom-1/5 left-1/6 w-28 h-28 bg-secondary/10 rounded-full animate-subtle-float animation-delay-500 blur-xl"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp relative z-10">My Expertise</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skillData.map((category, categoryIndex) => (
          <Card 
            key={category.name} 
            className="bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-primary/30 transition-all duration-300 animate-fadeInUp group"
            style={{ animationDelay: `${categoryIndex * 0.1 + 0.2}s` }}
          >
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <category.icon className="h-8 w-8 text-primary group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300" />
              <CardTitle className="text-2xl text-primary/90">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fadeInUp"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3}s` }}
                    title={skill.name}
                  >
                    {skill.customIconKey && customIconComponents[skill.customIconKey] ? (
                      React.createElement(customIconComponents[skill.customIconKey], { className: 'h-10 w-10 mb-2 text-primary/90 group-hover:text-primary transition-colors' })
                    ) : skill.icon ? (
                      React.createElement(skill.icon, { className: 'h-10 w-10 mb-2 text-primary/90 group-hover:text-primary transition-colors' })
                    ) : (
                      <Palette className="h-10 w-10 mb-2 text-primary/90 group-hover:text-primary transition-colors" /> // Fallback icon
                    )}
                    <span className="text-xs sm:text-sm text-center text-foreground/80 group-hover:text-foreground/95 line-clamp-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

