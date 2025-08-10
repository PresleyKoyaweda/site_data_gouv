import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Database, BarChart3, Brain, Users, ArrowRight, Quote } from 'lucide-react';
import AnimatedCounter from '../components/UI/AnimatedCounter';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Database,
      title: t('home.services.governance.title'),
      description: t('home.services.governance.description')
    },
    {
      icon: BarChart3,
      title: t('home.services.analytics.title'),
      description: t('home.services.analytics.description')
    },
    {
      icon: Brain,
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description')
    },
    {
      icon: Users,
      title: t('home.services.training.title'),
      description: t('home.services.training.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t('home.hero.title')} <br />
                <span className="text-teal-300">{t('home.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center group"
                >
                  {t('home.hero.cta')}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  {t('common.learnMore')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <AnimatedCounter end={50} duration={2000} suffix="+" />
                    <p className="text-blue-200 mt-2">{t('home.stats.institutions')}</p>
                  </div>
                  <div>
                    <AnimatedCounter end={15} duration={2000} />
                    <p className="text-blue-200 mt-2">{t('home.stats.countries')}</p>
                  </div>
                  <div>
                    <AnimatedCounter end={500} duration={2000} suffix="+" />
                    <p className="text-blue-200 mt-2">{t('home.stats.professionals')}</p>
                  </div>
                  <div>
                    <AnimatedCounter end={25} duration={2000} suffix="+" />
                    <p className="text-blue-200 mt-2">{t('home.stats.projects')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.impact.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.impact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <AnimatedCounter end={50} duration={2000} suffix="+" />
              <p className="text-gray-600 mt-2">{t('home.stats.institutions')}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={15} duration={2000} />
              <p className="text-gray-600 mt-2">{t('home.stats.countries')}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={500} duration={2000} suffix="+" />
              <p className="text-gray-600 mt-2">{t('home.stats.professionals')}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={25} duration={2000} suffix="+" />
              <p className="text-gray-600 mt-2">{t('home.stats.projects')}</p>
            </div>
          </div>

          {/* World Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="h-64 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center group">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group"
            >
              {t('common.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Quote className="h-8 w-8 text-teal-500 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{t('home.testimonials.testimonial1')}"
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full w-12 h-12"></div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{t('home.testimonials.author1')}</p>
                  <p className="text-gray-600">{t('home.testimonials.country1')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Quote className="h-8 w-8 text-teal-500 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{t('home.testimonials.testimonial2')}"
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full w-12 h-12"></div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{t('home.testimonials.author2')}</p>
                  <p className="text-gray-600">{t('home.testimonials.country2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Governance?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join leading organizations across Africa and Canada in building data-driven futures.
          </p>
          <Link
            to="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group"
          >
            {t('common.getStarted')}
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;