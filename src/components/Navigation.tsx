
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();
  
  const openMenu = () => {
    setIsMenuVisible(true);
    setTimeout(() => setIsMenuOpen(true), 10);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuVisible(false), 300);
  };

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
    <nav className="fixed top-6 right-0 md:right-6 z-50">
      <div className="px-4 md:px-6 py-3 rounded-full">
        {/* Desktop Navigation & Social Links */}
        <div className="hidden md:flex items-center space-x-6">
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
          <div className="flex items-center space-x-4 ml-2">
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
          onClick={openMenu}
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* Mobile Side Panel */}
      {isMenuVisible && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 backdrop-blur-xl md:hidden transition-opacity duration-300 ease-out"
            onClick={closeMenu}
            style={{ 
              zIndex: 40,
              opacity: isMenuOpen ? 1 : 0
            }}
          />
          
          {/* Side Panel */}
          <div 
            className="fixed top-0 right-0 h-full w-64 backdrop-blur-2xl md:hidden"
            style={{ 
              zIndex: 50,
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-4 text-portfolio-white"
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
            
            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link text-xl ${
                    isActive(item.href) ? 'text-portfolio-white' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Social Links */}
              <div className="flex items-center space-x-6 mt-8">
                <a
                  href="https://instagram.com/thalia_deanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-white hover:text-portfolio-accent transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/thalia-de-anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-white hover:text-portfolio-accent transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
