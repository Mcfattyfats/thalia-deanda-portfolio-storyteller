import React from 'react';

const TheBoysSection = () => {
  return (
    <section 
      className="hero-panel flex items-center justify-center pt-16 md:pt-32 pb-4 md:pb-section px-4 md:px-8 bg-portfolio-black"
      style={{
        minHeight: '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      <div className="container mx-auto max-w-6xl w-full h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start lg:items-center">
          <div className="relative w-full">
            <div className="lg:aspect-[4/5] flex flex-col justify-start lg:justify-center py-4 lg:py-8">
              <div className="space-y-3 lg:space-y-6">
                <h1 className="text-lg lg:text-xl font-normal text-portfolio-white mb-3 lg:mb-6">
                  Breaking Boundaries
                </h1>
                <div className="space-y-2 lg:space-y-4 body-text text-xs lg:text-sm leading-relaxed">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex-shrink-0">
            <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
              <img
                src="/images/image3.webp"
                alt="The Boys"
                className="w-full h-full object-cover object-top lg:object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBoysSection;