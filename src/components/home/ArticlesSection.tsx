
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import ArticleCard from '../ui/ArticleCard';

const ArticlesSection = () => {
  // Articles data
  const articles = [
    {
      title: 'The Future of Sustainable Structural Design',
      excerpt: 'Exploring innovative approaches to eco-friendly structural engineering that minimize environmental impact while maximizing performance and safety.',
      author: 'Eng. Phares O. Atai',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
      category: 'Sustainability',
      slug: 'future-sustainable-structural-design'
    },
    {
      title: 'Advancements in Seismic Engineering Technology',
      excerpt: 'How modern technology and computational methods are revolutionizing the way engineers design structures to withstand earthquakes and other seismic events.',
      author: 'Eng. Esther K. Momanyi',
      date: 'January 8, 2025',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop',
      category: 'Technology',
      slug: 'advancements-seismic-engineering-technology'
    },
    {
      title: 'Building Information Modeling: A Game Changer',
      excerpt: 'How BIM is transforming the construction industry by improving collaboration, reducing errors, and optimizing project delivery.',
      author: 'Eng. Phares O. Atai',
      date: 'March 22, 2024',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop',
      category: 'Innovation',
      slug: 'bim-game-changer'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-fe-orange font-medium">Our Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fe-blue mt-2 mb-4">
              Latest Articles & Resources
            </h2>
            <p className="text-gray-700">
              Stay up-to-date with the latest trends, innovations, and best practices in structural engineering through our informative articles and resources.
            </p>
          </div>
          
          <Link 
            to="/articles" 
            className="button-primary mt-6 md:mt-0 reveal-on-scroll flex items-center"
            style={{ animationDelay: '200ms' }}
          >
            <Newspaper className="mr-2 h-5 w-5" />
            View All Articles
          </Link>
        </div>
        
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
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-on-scroll">
          <Link to="/articles" className="group inline-flex items-center text-fe-orange font-medium text-lg">
            Browse All Articles
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
