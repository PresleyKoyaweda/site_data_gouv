import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Data Governance',
    'AI & Machine Learning',
    'Digital Transformation',
    'Policy & Regulation',
    'Case Studies',
    'Best Practices'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building AI-Ready Data Governance Frameworks in African Public Sector',
      excerpt: 'A comprehensive guide to establishing data governance foundations that enable responsible AI adoption in government institutions.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Data Quality Management: Lessons from Rwanda\'s Digital Health Initiative',
      excerpt: 'Key insights and practical strategies from implementing data quality frameworks in healthcare systems across Rwanda.',
      author: 'Marie Dubois',
      date: '2024-01-10',
      category: 'Case Studies',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Navigating GDPR Compliance in African Data Governance Programs',
      excerpt: 'Understanding the intersection between international data protection regulations and local African data governance requirements.',
      author: 'Prof. Ahmed Diallo',
      date: '2024-01-05',
      category: 'Policy & Regulation',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'The Data Maturity Assessment: A Practical Framework for African Organizations',
      excerpt: 'Step-by-step methodology for assessing and improving data governance maturity in resource-constrained environments.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      category: 'Data Governance',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Ethical AI in Development: Considerations for African Contexts',
      excerpt: 'Exploring the unique ethical challenges and opportunities when implementing AI solutions in African development contexts.',
      author: 'Prof. Ahmed Diallo',
      date: '2023-12-20',
      category: 'AI & Machine Learning',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Building Data Capacity: Training Programs That Actually Work',
      excerpt: 'Best practices for designing and implementing effective data literacy and governance training programs in African institutions.',
      author: 'Marie Dubois',
      date: '2023-12-15',
      category: 'Best Practices',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & Expertise
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Latest insights on data governance, AI readiness, and digital transformation in Africa
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-teal-600 font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors group text-sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Get the latest insights on data governance and AI readiness delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;