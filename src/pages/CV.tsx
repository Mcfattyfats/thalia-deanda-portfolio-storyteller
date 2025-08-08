
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, MapPin } from 'lucide-react';

const CV = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experience = [
    {
      title: "Senior Lead, Social Marketing",
      company: "Amazon MGM Studios",
      period: "2023 - Present",
      location: "Los Angeles, CA",
      description: "Leading social strategy for several films and TV series, including The Summer I Turned Pretty, Daisy Jones & the Six, The Marvelous Mrs. Maisel, AIR, Saltburn, and more."
    },
    {
      title: "Social Marketing Manager",
      company: "Universal Orlando Resort",
      period: "2021 - 2023",
      location: "Orlando, FL",
      description: "Developed and executed comprehensive social media strategies for theme park experiences, events, and seasonal campaigns."
    },
    {
      title: "Digital Marketing Strategist",
      company: "NBCUniversal",
      period: "2019 - 2021",
      location: "Los Angeles, CA",
      description: "Managed digital campaigns for major entertainment properties across multiple platforms and international markets."
    },
    {
      title: "PR & Social Media Coordinator",
      company: "Paramount Pictures",
      period: "2017 - 2019",
      location: "Los Angeles, CA",
      description: "Coordinated PR campaigns and social media strategies for film releases and talent promotion."
    }
  ];

  const skills = [
    "Strategic Campaign Development",
    "Influencer Marketing",
    "Content Creation & Curation",
    "Cross-Cultural Marketing",
    "Digital Storytelling",
    "Brand Partnerships",
    "Social Media Strategy",
    "PR & Communications",
    "Talent Relations",
    "Data Analytics & Insights"
  ];

  const achievements = [
    "Successfully launched campaigns reaching 50M+ audiences across LATAM, US, UK, and Spain",
    "Led award-winning social campaigns for Top Gun Maverick and Fast & Furious franchises",
    "Developed innovative influencer partnerships for The Summer I Turned Pretty",
    "Created viral marketing moments for The Boys and The Rings of Power",
    "Established social media best practices for entertainment industry campaigns"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-section">
        <div className="container mx-auto px-container">
          <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="section-title">Curriculum Vitae</h1>
            <p className="body-text max-w-3xl">
              A decade of experience crafting cultural moments and building meaningful connections between brands and audiences across global markets.
            </p>
          </div>

          {/* Experience Section */}
          <section className={`mb-16 ${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
            <h2 className="text-headline font-medium text-portfolio-white mb-8">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-portfolio-gray/30 pl-8 pb-8 relative">
                  <div className="absolute w-4 h-4 bg-portfolio-white rounded-full -left-2 top-0"></div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-portfolio-white">{job.title}</h3>
                      <p className="text-portfolio-accent font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-portfolio-gray">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <p className="body-text">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className={`mb-16 ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
            <h2 className="text-headline font-medium text-portfolio-white mb-8">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-portfolio-black border border-portfolio-gray/30 px-6 py-4 hover:border-portfolio-accent transition-colors duration-300">
                  <span className="text-portfolio-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className={`${isVisible ? 'animate-slide-up animation-delay-600' : 'opacity-0'}`}>
            <h2 className="text-headline font-medium text-portfolio-white mb-8">Key Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">{achievement}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CV;
