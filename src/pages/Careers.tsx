
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import CareerHero from '@/components/careers/CareerHero';
import JoinUsSection from '@/components/careers/JoinUsSection';
import BenefitsSection from '@/components/careers/BenefitsSection';
import JobOpeningsSection from '@/components/careers/JobOpeningsSection';
import ApplicationProcessSection from '@/components/careers/ApplicationProcessSection';
import CareersCta from '@/components/careers/CareersCta';

const Careers: React.FC = () => {
  return (
    <PageLayout>
      <CareerHero />
      <JoinUsSection />
      <BenefitsSection />
      <JobOpeningsSection />
      <ApplicationProcessSection />
      <CareersCta />
    </PageLayout>
  );
};

export default Careers;
