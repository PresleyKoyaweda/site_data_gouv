import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  organization: string;
  inquiryType: 'public' | 'private' | 'training';
  message: string;
  consent: boolean;
};

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'public',
    message: '',
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isValid =
    formData.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.message.trim().length > 5 &&
    formData.consent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    // TODO: send to backend / email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      inquiryType: 'public',
      message: '',
      consent: false,
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('contact.form.title')}
              </h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800">{t('contact.form.success')}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')} <span className="text-gray-400">({t('contact.form.optional')})</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.phonePlaceholder') || ''}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.organization')}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.inquiryType')}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="public">{t('contact.form.inquiry.public')}</option>
                    <option value="private">{t('contact.form.inquiry.private')}</option>
                    <option value="training">{t('contact.form.inquiry.training')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-900 focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    {t('contact.form.consent')}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
                    isValid ? 'bg-blue-900 hover:bg-blue-800' : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.offices.title')}</h2>

              {/* Canada - Montréal */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.offices.canada')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-blue-900" />
                    <div>
                      <p>{t('contact.offices.montreal.address1')}</p>
                      <p>{t('contact.offices.montreal.address2')}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.montreal.phone')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.montreal.email')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.montreal.hours')}</span>
                  </div>
                </div>
              </div>

              {/* RCA - Bangui */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.offices.rca')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-blue-900" />
                    <div>
                      <p>{t('contact.offices.bangui.address1')}</p>
                      <p>{t('contact.offices.bangui.address2')}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.bangui.phone')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.bangui.email')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.bangui.hours')}</span>
                  </div>
                </div>
              </div>

              {/* Cameroun - Yaoundé */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.offices.cameroon')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-blue-900" />
                    <div>
                      <p>{t('contact.offices.yaounde.address1')}</p>
                      <p>{t('contact.offices.yaounde.address2')}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.yaounde.phone')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.yaounde.email')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-blue-900" />
                    <span>{t('contact.offices.yaounde.hours')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.map.title')}</h2>
            <p className="text-xl text-gray-600">{t('contact.map.subtitle')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="h-64 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">{t('contact.map.placeholder')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
