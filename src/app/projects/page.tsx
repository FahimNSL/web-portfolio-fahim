// src/app/projects/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard, { type Project } from '@/components/shared/ProjectCard';

const projectsData: Project[] = [
  {
    title: 'White Board Application',
    description: 'A collaborative whiteboarding tool for real-time sketching and idea sharing. Built with the MERN stack, enabling seamless teamwork.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'digital whiteboard collaboration',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    githubUrl: 'https://github.com/FahimEhtesham73/whiteboard-application', // Assumed URL
  },
  {
    title: 'Job Portal',
    description: 'A comprehensive platform connecting job seekers with employers, featuring robust job listings, application tracking, and user profile management. Leverages the MERN stack and AWS for scalability.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'job search platform',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'AWS EC2'],
    githubUrl: 'https://github.com/FahimEhtesham73/job-portal', // Assumed URL
    liveUrl: '#', // CV mentions Live Link but no URL provided
  },
  {
    title: 'Employee Evaluation System',
    description: 'An office portal module designed for managing employee evaluations, tracking performance metrics, and facilitating constructive feedback. Integrated within a larger MERN-based application.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'performance review system',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    githubUrl: 'https://github.com/FahimEhtesham73/employee-evaluation', // Assumed URL
  },
  {
    title: 'Multi-Vendor E-commerce Site',
    description: 'Developed a feature-rich multi-vendor e-commerce website, enabling various sellers to list and manage their products. Focused on scalability, user experience, and AI model integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online marketplace multivendor',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS Lambda', 'AI Integration'],
    githubUrl: 'https://github.com/FahimEhtesham73/multi-vendor-ecommerce', // Assumed URL
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
