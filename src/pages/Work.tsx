
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import { ExternalLink } from 'lucide-react';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "The Summer I Turned Pretty",
      category: "Amazon MGM Studios",
      description: "Social media strategy and influencer campaigns that captured the essence of coming-of-age storytelling.",
      status: "Case study coming soon",
    },
    {
      title: "Top Gun: Maverick",
      category: "Paramount Pictures",
      description: "Multi-platform campaign celebrating legacy while attracting new audiences worldwide.",
      status: "Case study coming soon",
    },
    {
      title: "The Boys",
      category: "Amazon MGM Studios", 
      description: "Bold social media approach that matched the show's irreverent tone and built cult following.",
      status: "Case study coming soon",
    },
    {
      title: "The Rings of Power",
      category: "Amazon MGM Studios",
      description: "Global campaign strategy spanning multiple cultures and languages for the epic series launch.",
      status: "Case study coming soon",
    },
    {
      title: "Fast & Furious Franchise",
      category: "Universal Pictures",
      description: "Cross-cultural marketing initiatives that resonated across LATAM, US, UK, and Spain markets.",
      status: "Case study coming soon",
    },
    {
      title: "The Idea of You",
      category: "Amazon MGM Studios",
      description: "Influencer marketing strategy that created authentic conversations around modern romance.",
      status: "Case study coming soon",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-section">
        <div className="container mx-auto px-container">
          <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="section-title">Selected Work</h1>
            <p className="body-text max-w-3xl">
              A curated collection of campaigns that shaped cultural conversations and connected brands with audiences across global markets.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
            {projects.map((project, index) => (
              <div key={index} className="group card-hover cursor-pointer">
                <div className="bg-portfolio-black border border-portfolio-gray/30 p-8 h-full hover:border-portfolio-accent transition-all duration-300">
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-portfolio-accent font-medium mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-medium text-portfolio-white mb-4">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="body-text flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-portfolio-gray/20">
                      <span className="text-sm text-portfolio-gray">
                        {project.status}
                      </span>
                      <ExternalLink 
                        size={16} 
                        className="text-portfolio-gray group-hover:text-portfolio-accent transition-colors duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
            <p className="body-text mb-8">
              Detailed case studies showcasing strategy, execution, and cultural impact are currently in development.
            </p>
            <button className="btn-secondary">
              View All Projects
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
