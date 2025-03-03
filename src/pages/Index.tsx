
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import DesignSection from '@/components/DesignSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProcessSteps />
      <DesignSection />
      <ServicesSection />
      <GallerySection />
    </Layout>
  );
};

export default Index;
