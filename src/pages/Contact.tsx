
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-section">
        <div className="container mx-auto px-container max-w-4xl">
          <div className={`mb-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="section-title">Let's Connect!</h1>
            <p className="body-text max-w-2xl mx-auto">
              Whether you're looking to collaborate on a campaign, discuss strategic opportunities, or simply want to connect, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-portfolio-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-portfolio-black border-portfolio-gray/30 text-portfolio-white focus:border-portfolio-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-portfolio-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-portfolio-black border-portfolio-gray/30 text-portfolio-white focus:border-portfolio-accent"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-portfolio-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-portfolio-black border-portfolio-gray/30 text-portfolio-white focus:border-portfolio-accent"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-portfolio-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-portfolio-black border-portfolio-gray/30 text-portfolio-white focus:border-portfolio-accent resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
              <div>
                <h3 className="text-xl font-medium text-portfolio-white mb-4">
                  Let's Create Something Extraordinary
                </h3>
                <p className="body-text">
                  I'm always excited to discuss new projects, strategic partnerships, and creative collaborations. Whether you're launching a campaign that needs cultural resonance or looking for someone who understands the pulse of modern audiences, let's connect.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-portfolio-white font-medium mb-2">Areas of Expertise</h4>
                  <ul className="space-y-2 text-portfolio-gray">
                    <li>• Strategic Campaign Development</li>
                    <li>• Influencer Marketing & Partnerships</li>
                    <li>• Cross-Cultural Marketing</li>
                    <li>• Content Creation & Curation</li>
                    <li>• Brand Storytelling</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-portfolio-white font-medium mb-2">Markets</h4>
                  <p className="text-portfolio-gray">
                    LATAM • United States • United Kingdom • Spain
                  </p>
                </div>

                <div>
                  <h4 className="text-portfolio-white font-medium mb-2">Connect</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/thalia_deanda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-gray hover:text-portfolio-accent transition-colors duration-300"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://linkedin.com/in/thalia-de-anda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-gray hover:text-portfolio-accent transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
