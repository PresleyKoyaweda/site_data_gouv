import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.approach'), href: '/approach' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.caseStudies'), href: '/case-studies' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-900">
              DataGov<span className="text-teal-600">Africa</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href ? 'text-blue-900 border-b-2 border-blue-900' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;