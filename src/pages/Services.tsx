import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Database, BarChart3, Brain, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Database,
      title: t('services.governance.title'),
      subtitle: t('services.governance.subtitle'),
      features: t('services.governance.features', { returnObjects: true }) as string[],
      color: 'bg-blue-500'
    },
    {
      icon: BarChart3,
      title: t('services.management.title'),
      subtitle: t('services.management.subtitle'),
      features: t('services.management.features', { returnObjects: true }) as string[],
      color: 'bg-teal-500'
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      subtitle: t('services.ai.subtitle'),
      features: t('services.ai.features', { returnObjects: true }) as string[],
      color: 'bg-purple-500'
    },
    {
      icon: GraduationCap,
      title: t('services.training.title'),
      subtitle: t('services.training.subtitle'),
      features: t('services.training.features', { returnObjects: true }) as string[],
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`${service.color} rounded-full p-4 mr-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-lg text-gray-600 mt-2">{service.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
                  >
                    {t('common.learnMore')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 h-64 flex items-center justify-center">
                    <service.icon className={`h-32 w-32 text-gray-400`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive evaluation of current data maturity and AI readiness' },
              { step: '02', title: 'Strategy', description: 'Custom roadmap development aligned with organizational goals' },
              { step: '03', title: 'Implementation', description: 'Phased execution with continuous monitoring and adjustment' },
              { step: '04', title: 'Optimization', description: 'Ongoing support and optimization for sustained success' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your organization achieve data governance excellence and AI readiness.
          </p>
          <Link
            to="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group"
          >
            {t('common.getStarted')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;