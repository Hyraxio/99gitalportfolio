import React from 'react';
import { Mail, ExternalLink, Instagram } from 'lucide-react';
import { artist } from '../data/portfolio';

interface AboutProps {
  onSectionChange: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ onSectionChange }) => {
  return (
    <section className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About the Artist</h1>
          <p className="text-lg text-gray-600">
            Discover the journey, philosophy, and vision behind the art
          </p>
        </div>

        {/* Artist Photo and Basic Info */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src={artist.headshot}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{artist.name}</h2>
              <p className="text-gray-600 mb-4">Digital Artist</p>
              
              {/* Social Links */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a
                  href={`mailto:${artist.email}`}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  title="Email"
                >
                  <Mail className="h-5 w-5 text-gray-600" />
                </a>
                <a
                  href={artist.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-600" />
                </a>
                <a
                  href={artist.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  title="Website"
                >
                  <ExternalLink className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="prose prose-lg prose-gray max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Biography</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {artist.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Artist Statement */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Artist Statement</h3>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-center italic">
              "{artist.statement}"
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">Interested in Collaborating?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always excited to work on new projects and explore creative partnerships. 
            Whether you're interested in commissioning a piece or discussing potential collaborations, 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange('contact')}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => onSectionChange('gallery')}
              className="px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;