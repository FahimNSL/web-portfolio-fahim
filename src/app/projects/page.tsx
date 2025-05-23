// src/app/projects/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard, { type Project } from '@/components/shared/ProjectCard';

const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, cart functionality, user authentication, and payment integration.',
    imageUrl: 'https://placehold.co/600x400.png?text=E-commerce',
    imageHint: 'online store',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Firebase'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: '#', 
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool allowing users to create, assign, and track tasks within teams.',
    imageUrl: 'https://placehold.co/600x400.png?text=Task+App',
    imageHint: 'productivity tool',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/task-management-app',
  },
  {
    title: 'Personal Blog',
    description: 'A minimalistic and fast personal blog built with a static site generator, focusing on content and performance.',
    imageUrl: 'https://placehold.co/600x400.png?text=Blog',
    imageHint: 'writing content',
    techStack: ['Astro', 'Markdown', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
  },
  {
    title: 'AI Powered Chatbot',
    description: 'An intelligent chatbot integrating with a Large Language Model to provide customer support and answer queries.',
    imageUrl: 'https://placehold.co/600x400.png?text=AI+Chatbot',
    imageHint: 'artificial intelligence',
    techStack: ['Python', 'Flask', 'OpenAI API', 'React'],
    githubUrl: 'https://github.com/yourusername/ai-chatbot',
  },
];

export default function ProjectsPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp">My Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            animationDelay={`${index * 0.1 + 0.2}s`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
