
import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppChat from '../ui/WhatsAppChat';
import ScrollToTop from './ScrollToTop';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  // Animation for scroll reveal
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <ScrollToTop />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default PageLayout;
