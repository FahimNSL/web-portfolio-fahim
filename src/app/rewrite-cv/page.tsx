// src/app/rewrite-cv/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import RewriteCvForm from './RewriteCvForm'; // Client Component
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function RewriteCvPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">AI CV Enhancer</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Let our AI help you craft more compelling and professional content for your CV.
        </p>
      </div>
      
      <Alert className="mb-8 border-primary/30 bg-primary/5 animate-fadeInUp animation-delay-100">
        <AlertCircle className="h-5 w-5 text-primary" />
        <AlertTitle className="text-primary/90 font-semibold">Important Note</AlertTitle>
        <AlertDescription className="text-foreground/70">
          Your CV content is processed to generate suggestions and is <strong className="text-primary/80">not saved or stored</strong> on our servers after the rewriting process. This tool is for suggestion purposes only.
        </AlertDescription>
      </Alert>

      <RewriteCvForm />
    </SectionWrapper>
  );
}
