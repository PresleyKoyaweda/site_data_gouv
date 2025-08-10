import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      title: 'Rwanda Ministry of Health: Digital Health Data Platform',
      client: 'Ministry of Health, Rwanda',
      sector: 'Healthcare',
      duration: '18 months',
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Fragmented health data systems across multiple provinces with poor interoperability and limited analytics capabilities.',
      solution: 'Implemented comprehensive data governance framework with unified data platform and real-time analytics dashboard.',
      results: [
        '85% reduction in data processing time',
        '95% improvement in data quality scores',
        'Real-time health monitoring across all provinces',
        '500+ healthcare professionals trained'
      ],
      impact: 'Enabled evidence-based policy making and improved patient outcomes through better data-driven decision making.'
    },
    {
      title: 'Senegal Revenue Authority: AI-Powered Tax Analytics',
      client: 'Direction Générale des Impôts et des Domaines, Senegal',
      sector: 'Government Revenue',
      duration: '24 months',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Low tax compliance rates and manual audit processes leading to revenue losses and inefficient resource allocation.',
      solution: 'Developed AI-powered risk assessment system with automated compliance monitoring and predictive analytics.',
      results: [
        '40% increase in tax compliance rates',
        '60% reduction in audit processing time',
        '$50M additional revenue identified',
        'Automated risk scoring for 100k+ taxpayers'
      ],
      impact: 'Significantly improved revenue collection while reducing administrative burden and enhancing taxpayer experience.'
    },
    {
      title: 'Ghana Education Service: Student Performance Analytics',
      client: 'Ghana Education Service',
      sector: 'Education',
      duration: '12 months',
      image: 'https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Lack of centralized student data and inability to track learning outcomes across different regions and schools.',
      solution: 'Built integrated education data platform with predictive analytics for early intervention and resource optimization.',
      results: [
        '25% improvement in student retention rates',
        'Early identification of at-risk students',
        'Optimized resource allocation across 2000+ schools',
        '1000+ teachers trained in data literacy'
      ],
      impact: 'Enhanced educational outcomes through data-driven interventions and improved resource allocation strategies.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming institutions across Africa through data governance excellence and AI readiness
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Building className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <p className="text-gray-600">Institutions Transformed</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-teal-600 mb-2">$200M+</div>
              <p className="text-gray-600">Value Generated</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
              <p className="text-gray-600">Professionals Trained</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real-world transformations with measurable impact
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.sector}
                      </span>
                      <span className="text-gray-500 text-sm">{study.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-teal-600 font-medium mb-6">{study.client}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{study.impact}</p>
                    </div>

                    <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across critical government and institutional sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { sector: 'Healthcare', description: 'Digital health platforms and patient data management' },
              { sector: 'Education', description: 'Student information systems and learning analytics' },
              { sector: 'Revenue & Taxation', description: 'Tax compliance and revenue optimization systems' },
              { sector: 'Agriculture', description: 'Farmer registration and agricultural data platforms' },
              { sector: 'Social Protection', description: 'Beneficiary management and social program analytics' },
              { sector: 'Financial Services', description: 'Regulatory compliance and risk management systems' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.sector}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join the growing number of institutions transforming their operations through data governance excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;