// src/app/projects/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard, { type Project } from '@/components/shared/ProjectCard';

// Moved projectsData outside the component and exported it
export const projectsData: Project[] = [
  {
    slug: 'white-board-application',
    title: 'White Board Application',
    description: 'A collaborative whiteboarding tool for real-time sketching and idea sharing. Built with the MERN stack, enabling seamless teamwork.',
    longDescription: 'The White Board Application is a dynamic, real-time collaborative platform designed to mimic the experience of a physical whiteboard in a digital environment. Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication, it allows multiple users to simultaneously draw, write, and share ideas. Key features include a variety of drawing tools (pen, eraser, shapes), text input capabilities, color selection, and the ability to save and load whiteboard sessions. This project emphasizes low-latency interactions and a user-friendly interface to foster effective remote teamwork and brainstorming sessions.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'digital whiteboard collaboration', // For main card image
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    githubUrl: 'https://github.com/FahimEhtesham73/whiteboard-application',
  },
  {
    slug: 'job-portal',
    title: 'Job Portal',
    description: 'A comprehensive platform connecting job seekers with employers, featuring robust job listings, application tracking, and user profile management.',
    longDescription: 'This Job Portal is a full-featured web application built to bridge the gap between job seekers and employers. It offers a comprehensive suite of tools for both parties. Job seekers can create profiles, upload resumes, search for jobs using various filters (location, industry, job type), apply for positions, and track their application status. Employers can post job openings, manage applications, search for candidates, and communicate with applicants. The platform is built with the MERN stack and deployed on AWS EC2 for scalability and reliability, ensuring a smooth experience even with a large number of listings and users.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'job search platform',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'AWS EC2'],
    githubUrl: 'https://github.com/FahimEhtesham73/job-portal',
    liveUrl: '#', 
  },
  {
    slug: 'employee-evaluation-system',
    title: 'Employee Evaluation System',
    description: 'An office portal module for managing employee evaluations, tracking performance metrics, and facilitating constructive feedback.',
    longDescription: 'The Employee Evaluation System is an integral module of a larger office portal, designed to streamline and digitize the performance review process. It allows managers to set evaluation criteria, conduct periodic reviews, provide feedback, and track employee performance over time. Employees can view their evaluations, submit self-assessments, and engage in a transparent review cycle. The system uses JWT for secure authentication and is built upon the MERN stack, ensuring data integrity and a user-friendly interface for both managers and employees. This tool aims to improve HR efficiency and foster a culture of continuous improvement.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'performance review system',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    githubUrl: 'https://github.com/FahimEhtesham73/employee-evaluation',
  },
  {
    slug: 'multi-vendor-e-commerce-site',
    title: 'Multi-Vendor E-commerce Site',
    description: 'A feature-rich multi-vendor e-commerce website, enabling sellers to list and manage products. Focused on scalability and AI integration.',
    longDescription: 'This Multi-Vendor E-commerce Site provides a robust platform for multiple sellers to create their storefronts, list products, manage inventory, and process orders. The system is designed for scalability, leveraging AWS services like Lambda for serverless functions. A key feature is the integration of AI models for tasks such as product recommendations and personalized user experiences. The platform includes comprehensive dashboards for vendors and administrators, secure payment gateway integration, and a user-friendly shopping experience for customers. Built with the MERN stack, it offers a modern, responsive design suitable for a wide range of products and vendors.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'online marketplace multivendor',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS Lambda', 'AI Integration'],
    githubUrl: 'https://github.com/FahimEhtesham73/multi-vendor-ecommerce',
  },
];

export default function ProjectsPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp">My Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            animationDelay={`${index * 0.1 + 0.2}s`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
