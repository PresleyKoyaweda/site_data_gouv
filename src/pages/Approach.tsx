import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Search, Cog, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const Approach: React.FC = () => {
  const { t } = useTranslation();

  const phases = [
    {
      icon: Search,
      title: 'Assessment & Discovery',
      description: 'Comprehensive evaluation of current data governance maturity, infrastructure, and organizational readiness.',
      steps: [
        'Data governance maturity assessment',
        'Infrastructure and technology audit',
        'Stakeholder interviews and workshops',
        'Risk and compliance evaluation'
      ]
    },
    {
      icon: Target,
      title: 'Strategy Development',
      description: 'Custom roadmap creation aligned with organizational goals and international best practices.',
      steps: [
        'Strategic roadmap development',
        'Goal setting and KPI definition',
        'Resource planning and budgeting',
        'Change management strategy'
      ]
    },
    {
      icon: Cog,
      title: 'Implementation',
      description: 'Phased execution with continuous monitoring, training, and knowledge transfer.',
      steps: [
        'Phased implementation plan',
        'System integration and deployment',
        'Staff training and capacity building',
        'Process optimization and testing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Optimization & Growth',
      description: 'Ongoing support, monitoring, and continuous improvement for sustained success.',
      steps: [
        'Performance monitoring and analytics',
        'Continuous improvement processes',
        'Advanced feature implementation',
        'Long-term sustainability planning'
      ]
    }
  ];

  const principles = [
    {
      title: 'Local Context First',
      description: 'We adapt international standards to fit the unique regulatory, cultural, and economic contexts of African markets.'
    },
    {
      title: 'Sustainable Capacity Building',
      description: 'Our approach emphasizes knowledge transfer and skills development to ensure long-term organizational independence.'
    },
    {
      title: 'Ethical AI Implementation',
      description: 'We prioritize responsible AI adoption with strong governance frameworks and bias mitigation strategies.'
    },
    {
      title: 'Measurable Impact',
      description: 'Every initiative includes clear metrics and KPIs to track progress and demonstrate tangible value.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Proven Approach
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              A systematic methodology that bridges international best practices with African realities, ensuring sustainable digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Four-Phase Methodology
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach designed for maximum impact and sustainability
            </p>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-8 top-32 w-0.5 h-16 bg-gray-300 z-0"></div>
                )}
                
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="bg-blue-900 rounded-full p-6 mb-4">
                        <phase.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                    <p className="text-gray-700 text-lg mb-6">{phase.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600">
              The foundational beliefs that guide every engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Governance Maturity Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Governance Maturity Model
            </h2>
            <p className="text-xl text-gray-600">
              Our proprietary framework for assessing and advancing organizational data maturity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { level: 1, title: 'Initial', color: 'bg-red-100 text-red-800', description: 'Ad-hoc data management' },
              { level: 2, title: 'Managed', color: 'bg-orange-100 text-orange-800', description: 'Basic policies in place' },
              { level: 3, title: 'Defined', color: 'bg-yellow-100 text-yellow-800', description: 'Standardized processes' },
              { level: 4, title: 'Quantitatively Managed', color: 'bg-blue-100 text-blue-800', description: 'Metrics-driven approach' },
              { level: 5, title: 'Optimizing', color: 'bg-green-100 text-green-800', description: 'Continuous improvement' }
            ].map((level, index) => (
              <div key={index} className="text-center">
                <div className={`${level.color} rounded-lg p-6 mb-4`}>
                  <div className="text-2xl font-bold mb-2">Level {level.level}</div>
                  <div className="font-semibold">{level.title}</div>
                </div>
                <p className="text-sm text-gray-600">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Transformation Journey?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's assess your current data governance maturity and create a customized roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center group"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;