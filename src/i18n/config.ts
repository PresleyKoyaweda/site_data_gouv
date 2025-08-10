import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About Us',
        approach: 'Our Approach',
        services: 'Services',
        caseStudies: 'Case Studies',
        blog: 'Blog',
        contact: 'Contact'
      },

      // Common
      common: {
        learnMore: 'Learn More',
        getStarted: 'Get Started',
        contactUs: 'Contact Us',
        readMore: 'Read More',
        viewAll: 'View All',
        backToTop: 'Back to Top'
      },

      // Home Page
      home: {
        hero: {
          title: 'Empowering Africa Through',
          titleHighlight: 'Data Governance & AI Readiness',
          subtitle:
            'We elevate African institutions to advanced levels of data maturity, preparing the foundation for responsible AI adoption and digital transformation.',
          cta: 'Discover Our Impact'
        },
        stats: {
          institutions: 'Institutions Transformed',
          countries: 'Countries Served',
          professionals: 'Professionals Trained',
          projects: 'Successful Projects'
        },
        impact: {
          title: 'Our Global Impact',
          subtitle: 'Transforming data governance across Canada and Africa'
        },
        services: {
          title: 'Our Core Services',
          subtitle: 'Comprehensive solutions for digital transformation',
          governance: {
            title: 'Data Governance',
            description: 'Strategic frameworks for data management maturity'
          },
          analytics: {
            title: 'Data Analytics',
            description: 'Advanced analytics and business intelligence solutions'
          },
          ai: {
            title: 'AI Readiness',
            description: 'Preparing organizations for responsible AI adoption'
          },
          training: {
            title: 'Professional Training',
            description: 'Capacity building in data science and AI'
          }
        },
        testimonials: {
          title: 'What Our Clients Say',
          testimonial1:
            'Their expertise in data governance transformed our ministry operations, leading to more informed policy decisions.',
          author1: 'Minister of Digital Affairs',
          country1: 'Rwanda',
          testimonial2:
            'The AI readiness assessment provided a clear roadmap for our digital transformation journey.',
          author2: 'IT Director',
          country2: 'Senegal'
        }
      },

      // About Page
      about: {
        hero: {
          title: "Leading Africa's Digital Transformation",
          subtitle:
            'Our mission is to bridge the gap between international data governance standards and African realities.'
        },
        mission: {
          title: 'Our Mission',
          description:
            'To elevate African institutions, ministries, and organizations to advanced levels of data governance and management maturity, preparing the foundation for responsible and effective adoption of Artificial Intelligence.'
        },
        vision: {
          title: 'Our Vision',
          description:
            'A digitally empowered Africa where data-driven decision making and responsible AI adoption drive sustainable development and economic growth.'
        },
        values: {
          title: 'Our Values',
          excellence: {
            title: 'Excellence',
            description:
              'We deliver world-class solutions with the highest standards of quality and professionalism.'
          },
          innovation: {
            title: 'Innovation',
            description:
              'We embrace cutting-edge technologies and methodologies to solve complex challenges.'
          },
          collaboration: {
            title: 'Collaboration',
            description:
              'We work closely with our clients to ensure sustainable knowledge transfer and capacity building.'
          }
        },

        team: {
          title: 'Our Co-Founders & Experts',
          subtitle:
            'Three complementary backgrounds in data governance, AI, and strategy.',
          cofounder: 'Co-founder',
          readMore: 'Read more',
          readLess: 'Show less',

          presley: {
            name: 'Presley Koyaweda',
            role: 'Co-founder — Data Scientist (NLP/LLM), MLOps/Cloud',
            bioShort:
              'NLP/LLM expert, MLOps/LLMOps, cloud and BI. End-to-end applied AI experience.',
            bioLong:
              'Presley Koyaweda is a Data Engineer at Desjardins specializing in NLP/LLM, MLOps/LLMOps, cloud and BI. A former analyst in the Central African Republic, he has designed and deployed AI and analytics solutions across sectors. Graduate of ISSEA-CEMAC (Statistics & Probability) with AI training at Polytechnique Montréal.',
            linkedin: 'https://www.linkedin.com/in/presley-koyaweda/',
            image:
              'https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },

          fabrice: {
            name: 'Fabrice Yanou',
            role:
              'Co-founder — Senior Advisor, Data Strategy & Governance (ACCA)',
            bioShort:
              '20+ years in strategic consulting, operational excellence and digital transformation (Canada & Africa).',
            bioLong:
              'Fabrice Yanou is a Senior Advisor in Data Strategy & Governance (Desjardins). ACCA-certified with 20+ years in business strategy, financial/operational excellence and digital transformation. He has supported ministries, financial institutions and large enterprises to improve governance and performance.',
            linkedin: 'https://www.linkedin.com/in/fabrice-yanou/',
            image:
              'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },

          theophile: {
            name: 'Théophile Ndjanmou',
            role:
              'Co-founder — Senior Data Governance Advisor, Economist & Statistician',
            bioShort:
              'Expert in data governance and project management with international experience.',
            bioLong:
              'Théophile Ndjanmou is a Senior Data Governance Advisor at Desjardins Financial Security Investments Inc. PhD in Economics (UQAM), statistician, and former World Bank program officer. Recognized expertise in governance frameworks and the valorization of information assets.',
            linkedin:
              'https://www.linkedin.com/in/th%C3%A9ophile-ndjanmou-0a8120126/',
            image:
              'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        },

        partners: {
          title: 'Our Strategic Partners',
          subtitle: 'We collaborate with leading international organizations.',
          items: {
            p1: 'World Bank',
            p2: 'African Union',
            p3: 'UNDP',
            p4: 'Government of Canada'
          }
        }
      },

      // Services Page
      services: {
        hero: {
          title: 'Comprehensive Data & AI Solutions',
          subtitle:
            'From strategy to implementation, we provide end-to-end services for digital transformation.'
        },
        governance: {
          title: 'Data Governance Strategy',
          subtitle: 'Building robust frameworks for data management excellence',
          features: [
            'Data governance maturity assessment',
            'Policy and procedure development',
            'Data quality management systems',
            'Compliance and regulatory frameworks'
          ]
        },
        management: {
          title: 'Data Management & Analytics',
          subtitle: 'Turning data into actionable insights',
          features: [
            'Data architecture design',
            'Business intelligence solutions',
            'Advanced analytics and reporting',
            'Data warehouse implementation'
          ]
        },
        ai: {
          title: 'AI Readiness & Adoption',
          subtitle: 'Preparing organizations for the AI revolution',
          features: [
            'AI readiness assessment',
            'Ethical AI framework development',
            'AI use case identification',
            'Implementation roadmap creation'
          ]
        },
        training: {
          title: 'Professional Training',
          subtitle: 'Building internal capacity for sustainable growth',
          features: [
            'Data governance certification programs',
            'AI literacy workshops',
            'Technical skills development',
            'Leadership training in digital transformation'
          ]
        }
      },

      // Contact Page (updated with Montreal / Bangui / Yaoundé)
      contact: {
        hero: {
          title: "Let's Transform Your Organization",
          subtitle:
            'Get in touch to discuss how we can elevate your data governance and AI readiness.'
        },
        form: {
          title: 'Get In Touch',
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          phonePlaceholder: '+1 514 555 1234',
          optional: 'optional',
          organization: 'Organization',
          inquiryType: 'Inquiry Type',
          inquiry: {
            public: 'Public sector',
            private: 'Private sector',
            training: 'Training & workshops'
          },
          message: 'Message',
          consent:
            'I consent to the processing of my information for the purpose of responding to my inquiry.',
          submit: 'Send Message',
          success: "Thank you! We'll get back to you within 24 hours."
        },
        offices: {
          title: 'Our Offices',
          canada: 'Canada — Montréal',
          rca: 'Central African Republic — Bangui',
          cameroon: 'Cameroon — Yaoundé',

          montreal: {
            address1: '1250 René-Lévesque Blvd W, Suite 2200',
            address2: 'Montreal, QC H3B 4W8, Canada',
            phone: '+1 (514) 555-1234',
            email: 'canada@datagovafrica.com',
            hours: 'Mon–Fri: 9:00 AM – 6:00 PM EST'
          },
          bangui: {
            address1: 'Avenue des Martyrs, Immeuble Administratif',
            address2: 'Bangui, Central African Republic',
            phone: '+236 75 55 55 55',
            email: 'rca@datagovafrica.com',
            hours: 'Mon–Fri: 8:00 AM – 5:00 PM WAT'
          },
          yaounde: {
            address1: 'Boulevard du 20 Mai, Quartier du Lac',
            address2: 'Yaoundé, Cameroon',
            phone: '+237 6 90 00 00 00',
            email: 'cm@datagovafrica.com',
            hours: 'Mon–Fri: 8:00 AM – 5:00 PM WAT'
          }
        },
        map: {
          title: 'Find Us',
          subtitle:
            "We're present in both Canada and Africa to serve you better",
          placeholder: 'Interactive Map Integration Coming Soon'
        }
      }
    }
  },

  fr: {
    translation: {
      // Navigation
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        approach: 'Notre Approche',
        services: 'Services',
        caseStudies: 'Études de Cas',
        blog: 'Blog',
        contact: 'Contact'
      },

      // Commun
      common: {
        learnMore: 'En Savoir Plus',
        getStarted: 'Commencer',
        contactUs: 'Nous Contacter',
        readMore: 'Lire Plus',
        viewAll: 'Voir Tout',
        backToTop: 'Retour en Haut'
      },

      // Accueil
      home: {
        hero: {
          title: 'Autonomiser l’Afrique Grâce à la',
          titleHighlight: 'Gouvernance des Données et la Préparation à l’IA',
          subtitle:
            'Nous élevons les institutions africaines vers des niveaux avancés de maturité des données, en préparant les bases pour une adoption responsable de l’IA.',
          cta: 'Découvrez Notre Impact'
        },
        stats: {
          institutions: 'Institutions Transformées',
          countries: 'Pays Servis',
          professionals: 'Professionnels Formés',
          projects: 'Projets Réussis'
        },
        impact: {
          title: 'Notre Impact Mondial',
          subtitle:
            'Transformer la gouvernance des données au Canada et en Afrique'
        },
        services: {
          title: 'Nos Services Principaux',
          subtitle: 'Solutions complètes pour la transformation numérique',
          governance: {
            title: 'Gouvernance des Données',
            description:
              'Cadres stratégiques pour la maturité de la gestion des données'
          },
          analytics: {
            title: 'Analyse des Données',
            description:
              'Solutions avancées d’analyse et d’intelligence d’affaires'
          },
          ai: {
            title: 'Préparation à l’IA',
            description:
              'Préparer les organisations pour une adoption responsable de l’IA'
          },
          training: {
            title: 'Formation Professionnelle',
            description:
              'Renforcement des capacités en science des données et IA'
          }
        },
        testimonials: {
          title: 'Ce Que Disent Nos Clients',
          testimonial1:
            'Leur expertise en gouvernance des données a transformé les opérations de notre ministère, conduisant à des décisions politiques mieux informées.',
          author1: 'Ministre du Numérique',
          country1: 'Rwanda',
          testimonial2:
            'L’évaluation de la préparation à l’IA a fourni une feuille de route claire pour notre transformation numérique.',
          author2: 'Directeur TI',
          country2: 'Sénégal'
        }
      },

      // À propos
      about: {
        hero: {
          title: 'Leader de la Transformation Numérique de l’Afrique',
          subtitle:
            'Notre mission est de réduire le fossé entre les normes internationales de gouvernance des données et les réalités africaines, tout en préparant les institutions à tirer pleinement parti de l’intelligence artificielle pour stimuler l’innovation, la performance et la souveraineté numérique.'
        },
        mission: {
          title: 'Notre Mission',
          description:
            'Élever les institutions, ministères et organisations africaines vers des niveaux avancés de maturité en gouvernance et gestion des données, en s’appuyant sur les meilleures pratiques internationales. Nous intégrons stratégie, intelligence artificielle, analytique avancée, MLOps/LLMOps, cloud computing et formation pour bâtir les fondations d’une adoption responsable, éthique et efficace de l’IA.'
        },
        vision: {
          title: 'Notre Vision',
          description:
            'Une Afrique numériquement autonome, où les décisions basées sur les données et l’adoption responsable de l’IA stimulent le développement durable, la croissance économique, l’innovation et le renforcement des compétences locales.'
        },
        values: {
          title: 'Nos Valeurs',
          excellence: {
            title: 'Excellence',
            description:
              'Nous livrons des solutions de classe mondiale, en respectant les plus hauts standards de qualité, de rigueur et de professionnalisme, afin de générer un impact concret et durable.'
          },
          innovation: {
            title: 'Innovation',
            description:
              'Nous exploitons les technologies émergentes, l’analytique avancée et les approches créatives pour résoudre des défis complexes et anticiper les évolutions du marché.'
          },
          collaboration: {
            title: 'Collaboration',
            description:
              'Nous travaillons main dans la main avec nos clients et partenaires, favorisant un transfert de compétences durable et un véritable partenariat stratégique pour atteindre des objectifs communs.'
          },
          impact: {
            title: 'Impact',
            description:
              'Nous plaçons l’impact positif au cœur de notre démarche, en contribuant à la transformation numérique et au développement socio-économique des communautés et organisations que nous accompagnons.'
          },
          éthique: {
            title: 'Éthique',
            description:
              'Nous promouvons une utilisation responsable, équitable et transparente des données et de l’IA, en veillant à respecter la confidentialité, la sécurité et les valeurs humaines.'
          }
      
        },

        team: {
          title: 'Nos Cofondateurs et Experts',
          subtitle:
            'Trois parcours d’excellence alliant science de données, gouvernance des données, intelligence artificielle et stratégie, pour offrir une vision complète de la transformation numérique.',
          cofounder: 'Cofondateur',
          readMore: 'Lire plus',
          readLess: 'Réduire',

          fabrice: {
            name: 'Fabrice Yanou',
            role:
              'Cofondateur — Conseiller principal en stratégie & gouvernance des données (ACCA)',
            bioShort:
              '20+ ans en conseil stratégique, excellence opérationnelle et transformation numérique (Canada & Afrique).',
            bioLong:
              'Fabrice Yanou est Conseiller principal en stratégie et gouvernance des données (Desjardins). Certifié ACCA, il cumule 20+ ans en stratégie d’entreprise, excellence financière/opérationnelle et transformation numérique. Il a accompagné ministères, institutions financières et grandes entreprises dans l’amélioration de leur gouvernance et performance.',
            linkedin: 'https://www.linkedin.com/in/fabrice-yanou/',
            image:
              'https://pbs.twimg.com/profile_images/1752163247753494528/gniWVsYI_400x400.jpg'
               }

          ,

          presley: {
            name: 'Presley Koyaweda',
            role:
              'Cofondateur — Expert en Science des dDonnées et Intélligence Artificielle',
            bioShort:
              'Expert en intelligence artificielle, science des données, MLOps/LLMOps, cloud et BI, avec une solide expérience dans le développement et la mise en production de solutions technologiques de bout en bout.',
            bioLong:
              'Presley Koyaweda est Data Engineer chez Desjardins, spécialisé dans l’intelligence artificielle, la science des données, le MLOps/LLMOps, le cloud computing et la Business Intelligence. Il a piloté la conception et le déploiement de solutions innovantes couvrant l’analyse prédictive, la vision par ordinateur, le traitement du langage naturel, et l’optimisation de processus dans divers secteurs, tant en Afrique qu’en Amérique du Nord. Diplômé de l’ISSEA-CEMAC en Statistiques & Probabilités et formé en Intelligence Artificielle à Polytechnique Montréal, il combine une expertise technique approfondie et une vision stratégique pour accompagner les organisations vers une exploitation optimale de leurs données.',
            linkedin: 'https://www.linkedin.com/in/presley-koyaweda/',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZPa0O_EUXmImrLKg_8D71QfNRtV72x-fgw&s'
          }

          ,

          theophile: {
            name: 'Théophile Ndjanmou',
            role:
              'Cofondateur — Conseiller principal en gouvernance des données, économiste & statisticien',
            bioShort:
              'Spécialiste gouvernance des données et gestion de projets, expérience internationale.',
            bioLong:
              'Théophile Ndjanmou est Conseiller principal en gouvernance des données chez Desjardins Financial Security Investments Inc. Docteur en économie (UQAM), statisticien, ex-responsable de programme à la Banque mondiale. Expertise reconnue en cadres de gouvernance et valorisation des actifs informationnels.',
            linkedin:
              'https://www.linkedin.com/in/th%C3%A9ophile-ndjanmou-0a8120126/',
            image:
              'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        },

        partners: {
          title: 'Nos partenaires stratégiques',
          subtitle:
            'Nous collaborons avec des organisations de premier plan à l’échelle internationale.',
          items: {
            p1: 'Banque mondiale',
            p2: 'Union africaine',
            p3: 'PNUD',
            p4: 'Gouvernement du Canada'
          }
        }
      },

      // Services
      services: {
        hero: {
          title: 'Solutions Complètes de Données et IA',
          subtitle:
            'De la stratégie à l’implémentation, nous fournissons des services de bout en bout pour la transformation numérique.'
        },
        governance: {
          title: 'Stratégie de Gouvernance des Données',
          subtitle: 'Construire des cadres robustes pour l’excellence',
          features: [
            'Évaluation de la maturité de gouvernance',
            'Développement de politiques et procédures',
            'Systèmes de gestion de la qualité des données',
            'Conformité & cadres réglementaires'
          ]
        },
        management: {
          title: 'Gestion et Analyse des Données',
          subtitle: 'Transformer les données en insights actionnables',
          features: [
            'Conception d’architecture de données',
            'Solutions d’intelligence d’affaires',
            'Analyses avancées et rapports',
            'Implémentation d’entrepôts de données'
          ]
        },
        ai: {
          title: 'Préparation & Adoption de l’IA',
          subtitle: 'Préparer les organisations à la révolution IA',
          features: [
            'Évaluation de la préparation à l’IA',
            'Cadre IA éthique',
            'Identification des cas d’usage',
            'Feuille de route d’implémentation'
          ]
        },
        training: {
          title: 'Formation Professionnelle',
          subtitle: 'Construire des capacités internes durables',
          features: [
            'Certifications en gouvernance des données',
            'Ateliers de littératie IA',
            'Développement de compétences techniques',
            'Leadership de la transformation numérique'
          ]
        }
      },

      // Contact (Montréal / Bangui / Yaoundé)
      contact: {
        hero: {
          title: 'Transformons Votre Organisation',
          subtitle:
            'Contactez-nous pour discuter de comment nous pouvons élever votre gouvernance des données et votre préparation à l’IA.'
        },
        form: {
          title: 'Entrer en Contact',
          name: 'Nom complet',
          email: 'Adresse courriel',
          phone: 'Téléphone',
          phonePlaceholder: '+237 690 00 00 00',
          optional: 'optionnel',
          organization: 'Organisation',
          inquiryType: 'Type de demande',
          inquiry: {
            public: 'Secteur public',
            private: 'Secteur privé',
            training: 'Formation & ateliers'
          },
          message: 'Message',
          consent:
            'J’accepte le traitement de mes informations afin de répondre à ma demande.',
          submit: 'Envoyer le message',
          success: 'Merci ! Nous vous répondrons sous 24 heures.'
        },
        offices: {
          title: 'Nos Bureaux',
          canada: 'Canada — Montréal',
          rca: 'République centrafricaine — Bangui',
          cameroon: 'Cameroun — Yaoundé',

          montreal: {
            address1: '1250 boul. René-Lévesque O, Suite 2200',
            address2: 'Montréal, QC H3B 4W8, Canada',
            phone: '+1 (514) 555-1234',
            email: 'canada@datagovafrica.com',
            hours: 'Lun–Ven : 9h00 – 18h00 (EST)'
          },
          bangui: {
            address1: 'Avenue des Martyrs, Immeuble Administratif',
            address2: 'Bangui, République centrafricaine',
            phone: '+236 75 55 55 55',
            email: 'rca@datagovafrica.com',
            hours: 'Lun–Ven : 8h00 – 17h00 (WAT)'
          },
          yaounde: {
            address1: 'Boulevard du 20 Mai, Quartier du Lac',
            address2: 'Yaoundé, Cameroun',
            phone: '+237 6 90 00 00 00',
            email: 'cm@datagovafrica.com',
            hours: 'Lun–Ven : 8h00 – 17h00 (WAT)'
          }
        },
        map: {
          title: 'Nous Trouver',
          subtitle:
            'Présents au Canada et en Afrique pour mieux vous servir',
          placeholder: 'Intégration de carte interactive à venir'
        }
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',          // tu peux mettre 'fr' par défaut pour Québec
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
