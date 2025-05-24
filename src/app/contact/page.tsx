// src/app/contact/page.tsx
"use client";

import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const recipientEmail = "ehtesamulhaque32@gmail.com";
    const subject = `Contact Form Submission from ${data.name}`;
    const body = `You have a new message from your portfolio contact form:\n
Name: ${data.name}
Email: ${data.email} (Please reply to this email address)

Message:
${data.message}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      // Attempt to open the mail client
      window.location.href = mailtoLink;
      toast({
        title: "Opening Email Client",
        description: "Your message is ready to be sent. Please use your email application.",
        variant: "default",
      });
    } catch (error) {
      console.error("Failed to open mailto link:", error);
      toast({
        title: "Error",
        description: "Could not automatically open your email client. Please copy the details manually.",
        variant: "destructive",
      });
    }
    reset(); // Reset form fields
  };

  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp">Get In Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card 
          className="bg-card/80 backdrop-blur-sm shadow-xl animate-fadeInUp animation-delay-200"
        >
          <CardHeader>
            <CardTitle className="text-2xl text-primary/90">Send Me a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  {...register("name")} 
                  className="mt-1 bg-input border-border focus:ring-primary"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...register("email")} 
                  className="mt-1 bg-input border-border focus:ring-primary"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/80">Message</Label>
                <Textarea 
                  id="message" 
                  {...register("message")} 
                  rows={5}
                  className="mt-1 bg-input border-border focus:ring-primary"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full shadow-lg hover:opacity-90" disabled={isSubmitting}>
                {isSubmitting ? 'Preparing Message...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8 animate-fadeInUp animation-delay-400">
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:ehtesamulhaque32@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">ehtesamulhaque32@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">+880 1991-283682</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-6">
              <Link href="https://github.com/FahimEhtesham73" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
                <Github className="h-8 w-8" />
              </Link>
              <Link href="https://www.linkedin.com/in/md-ehtesamul-haque-fahim-7354301a5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors"> {/* Updated LinkedIn URL */}
                <Linkedin className="h-8 w-8" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
