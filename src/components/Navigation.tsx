
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'About', href: '/' },
    { label: 'CV', href: '/cv' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-portfolio-black/90 backdrop-blur-sm border-b border-portfolio-gray/20">
      <div className="container mx-auto px-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Space - Empty for now */}
          <div className="flex-1"></div>

          {/* Desktop Navigation & Social Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link ${
                  isActive(item.href) ? 'text-portfolio-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="https://instagram.com/thalia_deanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-white hover:text-portfolio-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/in/thalia-de-anda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-white hover:text-portfolio-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-portfolio-white hover:bg-portfolio-gray/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-portfolio-gray/20 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link text-lg ${
                    isActive(item.href) ? 'text-portfolio-white' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
