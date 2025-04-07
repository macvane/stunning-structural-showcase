
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ArticleCard from '@/components/ui/ArticleCard';
import { Newspaper } from 'lucide-react';

const Articles = () => {
  // Sample articles data - in a real app, this would come from an API or CMS
  const articles = [
    {
      title: 'The Future of Sustainable Structural Design',
      excerpt: 'Exploring innovative approaches to eco-friendly structural engineering that minimize environmental impact while maximizing performance and safety.',
      author: 'Eng. Phares O. Atai',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
      category: 'Sustainability',
      slug: 'future-sustainable-structural-design'
    },
    {
      title: 'Advancements in Seismic Engineering Technology',
      excerpt: 'How modern technology and computational methods are revolutionizing the way engineers design structures to withstand earthquakes and other seismic events.',
      author: 'Eng. Phares O. Atai',
      date: 'April 8, 2023',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop',
      category: 'Technology',
      slug: 'advancements-seismic-engineering-technology'
    },
    {
      title: 'Building Information Modeling: A Game Changer',
      excerpt: 'How BIM is transforming the construction industry by improving collaboration, reducing errors, and optimizing project delivery.',
      author: 'Eng. Sharon Kimutai',
      date: 'March 22, 2023',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop',
      category: 'Innovation',
      slug: 'bim-game-changer'
    },
    {
      title: 'Steel vs. Concrete: Choosing the Right Material',
      excerpt: 'A comprehensive comparison of steel and concrete structural systems, examining their strengths, limitations, and optimal applications in modern construction.',
      author: 'Eng. Phares O. Atai',
      date: 'February 10, 2023',
      image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1085&auto=format&fit=crop',
      category: 'Materials',
      slug: 'steel-vs-concrete'
    },
    {
      title: 'The Role of AI in Structural Engineering',
      excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing structural analysis, design optimization, and risk assessment.',
      author: 'Eng. Phares O. Atai',
      date: 'January 5, 2023',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
      category: 'Technology',
      slug: 'ai-in-structural-engineering'
    },
    {
      title: 'Resilient Infrastructure for Climate Change',
      excerpt: 'Strategies for designing and building infrastructure systems that can withstand the increasing frequency and intensity of climate-related hazards.',
      author: 'Eng. Esther K. Momanyi',
      date: 'December 12, 2022',
      image: 'https://images.unsplash.com/photo-1545236085-1467c5536d99?q=80&w=1135&auto=format&fit=crop',
      category: 'Sustainability',
      slug: 'resilient-infrastructure-climate-change'
    }
  ];

  return (
    <PageLayout>
      {/* Articles Hero Section */}
      <section className="relative py-32 bg-fe-blue">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering blueprints and models" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-fe-blue opacity-80"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto reveal-on-scroll">
            <div className="inline-flex items-center justify-center p-3 bg-white bg-opacity-10 rounded-full mb-6 backdrop-blur-sm border border-white border-opacity-20">
              <Newspaper className="h-7 w-7 text-fe-light-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              Engineering <span className="text-fe-light-teal">Insights</span> & Resources
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
              Stay informed with the latest trends, innovations, and best practices in structural engineering through our collection of thought leadership articles.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard 
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                author={article.author}
                date={article.date}
                image={article.image}
                category={article.category}
                slug={article.slug}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Articles;
