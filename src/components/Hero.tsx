import React from 'react';
import { ChevronDown } from 'lucide-react';
import { artist, artworks } from '../data/portfolio';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const featuredArtworks = artworks.filter(artwork => artwork.featured);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Digital Art
                <span className="block text-gray-600">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Exploring the intersection of technology and nature through immersive digital experiences
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onSectionChange('gallery')}
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Gallery
              </button>
              <button
                onClick={() => onSectionChange('about')}
                className="px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                About Artist
              </button>
            </div>
          </div>

          {/* Right Content - Artist Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={artist.headshot}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      {/* Bio Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Artist</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {artist.bio}
          </p>
        </div>
      </div>

      {/* Featured Works Preview */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Works</h2>
            <p className="text-lg text-gray-600">A selection of my most impactful pieces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group cursor-pointer"
                onClick={() => onSectionChange('gallery')}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{artwork.medium}</p>
                    <p className="text-gray-500 text-sm">{artwork.creationDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onSectionChange('gallery')}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;