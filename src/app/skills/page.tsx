
// src/app/skills/page.tsx
"use client";
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette } from 'lucide-react'; // Only Palette is needed here from lucide for fallback
import { cn } from '@/lib/utils';
import { skillData, type SkillCategory, type Skill } from '@/lib/skillsData'; // Import from new location
import { 
  Html5Logo, 
  Css3Logo, 
  JavaScriptLogo, 
  ReactLogo, 
  NodeJsLogo, 
  TypeScriptLogo, 
  TailwindCssLogo, 
  ReduxLogo 
} from '@/components/shared/SkillLogos';

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

    
