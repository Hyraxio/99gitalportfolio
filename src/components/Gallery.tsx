import React, { useState } from 'react';
import { X, Calendar, Ruler, FileImage, Palette } from 'lucide-react';
import { artworks } from '../data/portfolio';
import { Artwork } from '../types';

const Gallery: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    document.body.style.overflow = 'unset';
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedArtwork) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedArtwork]);

  return (
    <section className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of my digital artworks, each piece representing a unique exploration 
            of form, color, and concept in the digital medium.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => openModal(artwork)}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {artwork.featured && (
                  <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{artwork.medium}</p>
                <p className="text-xs text-gray-500">{artwork.creationDate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Artwork Modal */}
        {selectedArtwork && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">{selectedArtwork.title}</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                {/* Image */}
                <div className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={selectedArtwork.imageUrl}
                      alt={selectedArtwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-8">
                  {/* Technical Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Artwork Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Palette className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Medium</div>
                          <div className="text-sm text-gray-600">{selectedArtwork.medium}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Ruler className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Dimensions</div>
                          <div className="text-sm text-gray-600">{selectedArtwork.dimensions}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Created</div>
                          <div className="text-sm text-gray-600">{selectedArtwork.creationDate}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <FileImage className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">File Specs</div>
                          <div className="text-sm text-gray-600">{selectedArtwork.fileSpecs}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Artist Reflection */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Artist Reflection</h3>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {selectedArtwork.reflection}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;