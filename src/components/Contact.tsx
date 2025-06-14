import React, { useState } from 'react';
import { Mail, Clock, CheckCircle, AlertCircle, Instagram, ExternalLink } from 'lucide-react';
import { artist } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss a project, commission, or collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Email</div>
                    <a 
                      href={`mailto:${artist.email}`}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {artist.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Response Time</div>
                    <div className="text-sm text-gray-600">Within 24-48 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect Online</h3>
              <div className="space-y-3">
                <a
                  href={artist.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-600">@alexandrachen_art</div>
                  </div>
                </a>
                
                <a
                  href={artist.socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Behance</div>
                    <div className="text-sm text-gray-600">View portfolio</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Project Inquiries</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                For commission work, please include details about your project timeline, 
                budget range, and specific requirements. This helps me provide you with 
                the most accurate information and timeline.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-green-900">Message sent successfully!</div>
                    <div className="text-sm text-green-700">I'll get back to you within 24-48 hours.</div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="text-sm font-medium text-red-900">Error sending message</div>
                    <div className="text-sm text-red-700">Please try again or contact me directly via email.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please provide details about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;