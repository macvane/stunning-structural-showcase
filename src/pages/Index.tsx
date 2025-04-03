
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ArticlesSection from '@/components/home/ArticlesSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProjectsSection />
      <ArticlesSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
