
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PageLayout from '@/components/layouts/PageLayout';
import JobApplicationHero from '@/components/careers/JobApplicationHero';
import { ArrowLeft, Link, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }).optional().or(z.literal('')),
  resumeLink: z.string().url({
    message: "Please enter a valid Google Drive or Google Docs URL.",
  }).refine((url) => url.includes('drive.google.com') || url.includes('docs.google.com'), {
    message: "Please provide a Google Drive or Google Docs link.",
  }),
  coverLetter: z.string().min(100, {
    message: "Cover letter should be at least 100 characters.",
  }),
  education: z.string().min(10, {
    message: "Please provide your educational background.",
  }),
  experience: z.string().min(10, {
    message: "Please provide your work experience.",
  }),
  heardAbout: z.string().min(2, {
    message: "Please let us know how you heard about this position.",
  }),
});

const JobApplication: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      website: "",
      resumeLink: "",
      coverLetter: "",
      education: "",
      experience: "",
      heardAbout: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values to be submitted:", values);
    
    const formData = new FormData();
    
    formData.append('fullName', values.fullName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('website', values.website || '');
    formData.append('resumeLink', values.resumeLink);
    formData.append('coverLetter', values.coverLetter);
    formData.append('education', values.education);
    formData.append('experience', values.experience);
    formData.append('heardAbout', values.heardAbout);
    formData.append('position', id?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Unknown Position');
    formData.append('sheet', 'Sheet1'); // Specify Sheet1 for job applications
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycby7foLssvGgEnk3_3zVoYoaJa499OEblhFgqEBD8022wSMbIyUo-W5Sy4zb5ArUT-xM/exec';
    
    fetch(scriptURL, { 
      method: 'POST', 
      body: formData,
      mode: 'no-cors'
    })
    .then(response => {
      console.log('Success!', response);
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We will review your application and contact you soon.",
      });

      setTimeout(() => {
        navigate('/careers');
      }, 2000);
    })
    .catch(error => {
      console.error('Error!', error);
      
      toast({
        title: "Submission Failed!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    });
  }
  
  const jobTitle = id?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <PageLayout>
      <JobApplicationHero title={jobTitle || 'Position'} />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center text-fe-blue" 
            onClick={() => navigate(`/careers/${id}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Details
          </Button>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 animate-fade-in">
            <p className="text-gray-600 mb-8">Please fill out the form below to apply for this position.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio/LinkedIn (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourportfolio.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          Share your portfolio, LinkedIn, or GitHub profile.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="resumeLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume/CV Google Drive or Docs Link *</FormLabel>
                      <FormControl>
                        <Input placeholder="https://drive.google.com/file/d/... OR https://docs.google.com/document/d/..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Please upload your resume to Google Drive/Docs and share the link here. Make sure the document is accessible to anyone with the link.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're interested in this position and what makes you a good fit."
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List your educational background, including degrees, institutions, and graduation dates."
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Experience *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your relevant work experience, including job titles, companies, dates, and key responsibilities."
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="heardAbout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about this position? *</FormLabel>
                      <FormControl>
                        <Input placeholder="LinkedIn, Job Board, Referral, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button type="submit" className="button-primary flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobApplication;
