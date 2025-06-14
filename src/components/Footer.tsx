import React from 'react';
import { Mail, Instagram, ExternalLink, Heart } from 'lucide-react';
import { artist } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{artist.name}</h3>
            <p className="text-gray-300 max-w-sm">
              Contemporary digital artist exploring the intersection of technology and nature 
              through immersive visual experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                Gallery
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`mailto:${artist.email}`}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={artist.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={artist.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                title="Website"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-gray-300 space-y-1">
              <div>Response time: 24-48 hours</div>
              <div>Available for commissions</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} {artist.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for art enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;