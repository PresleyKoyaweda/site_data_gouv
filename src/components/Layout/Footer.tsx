import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              DataGov<span className="text-teal-400">Africa</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('about.mission.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-teal-400 transition-colors">{t('nav.caseStudies')}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@datagovafrica.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <div>
                  <div>Montréal, Canada</div>
                  <div>Bangui, Centrafrique</div>
                  <div>Yaoundé, Cameroun</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-center text-gray-400 mb-6">Trusted Partners</h4>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-500 font-semibold">World Bank</div>
            <div className="text-gray-500 font-semibold">African Union</div>
            <div className="text-gray-500 font-semibold">UNDP</div>
            <div className="text-gray-500 font-semibold">Government of Canada</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 DataGovAfrica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;