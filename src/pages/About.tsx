import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Lightbulb, Users2, Target, Eye, Linkedin, X } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: Users2,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
    },
  ];

  const teamKeys = ['about.team.fabrice', 'about.team.presley', 'about.team.theophile'];
  const team = teamKeys.map((k) => ({
    name: t(`${k}.name`),
    role: t(`${k}.role`),
    bio: t(`${k}.bioShort`, { defaultValue: t(`${k}.bio`) }),
    bioLong: t(`${k}.bioLong`, { defaultValue: t(`${k}.bio`) }),
    image: t(`${k}.image`),
    linkedin: t(`${k}.linkedin`, { defaultValue: '' }),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Target className="h-8 w-8 text-blue-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('about.mission.title')}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 rounded-full p-3 mr-4">
                <Eye className="h-8 w-8 text-teal-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('about.vision.title')}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-900 mt-4 font-semibold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Bio Long */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedMember(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-40 h-40 object-cover rounded-full mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
              <p className="text-teal-600 font-medium mb-4">{selectedMember.role}</p>
              <p className="text-gray-700 leading-relaxed">{selectedMember.bioLong}</p>
              {selectedMember.linkedin && (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-900 mt-4 font-semibold hover:underline"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.partners.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {t('about.partners.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['p1', 'p2', 'p3', 'p4'].map((key) => (
              <div key={key} className="text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="bg-gray-100 rounded-lg p-8">
                  <p className="text-gray-700 font-semibold">
                    {t(`about.partners.items.${key}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
