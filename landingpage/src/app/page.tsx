import React from 'react';
import { CheckCircle, Star, Users } from 'lucide-react';

// Reusable Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ name, company, feedback }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
    </div>
    <p className="text-gray-600">"{feedback}"</p>
  </div>
);

const PricingCard = ({ name, price, features }) => (
  <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-4xl font-bold mb-6">{price}<span className="text-lg text-gray-600">/month</span></p>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index} className="hover:text-white cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

// Main Component
const LandingPage = () => {
  const features = [
    { icon: <CheckCircle className="w-8 h-8 text-blue-600" />, title: 'Easy to Use', description: 'Intuitive interface designed for maximum productivity' },
    { icon: <Star className="w-8 h-8 text-blue-600" />, title: 'Powerful Tools', description: 'Advanced features to handle any task' },
    { icon: <Users className="w-8 h-8 text-blue-600" />, title: 'Team Collaboration', description: 'Work together seamlessly with your team' },
  ];

  const testimonials = [
    { name: 'User 1', company: 'Company 1', feedback: 'This platform has completely transformed how we work.' },
    { name: 'User 2', company: 'Company 2', feedback: 'The features are incredible and the support team is amazing!' },
    { name: 'User 3', company: 'Company 3', feedback: 'Best platform for productivity and collaboration!' },
  ];

  const pricingPlans = [
    { name: 'Basic', price: '$9', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Pro', price: '$29', features: ['Everything in Basic', 'Pro Feature 1', 'Pro Feature 2'] },
    { name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Enterprise Feature 1', 'Enterprise Feature 2'] },
  ];

  const footerLinks = [
    { title: 'Product', links: ['Link 1', 'Link 2', 'Link 3', 'Link 4'] },
    { title: 'Company', links: ['Link 1', 'Link 2', 'Link 3', 'Link 4'] },
    { title: 'Resources', links: ['Link 1', 'Link 2', 'Link 3', 'Link 4'] },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full p-4 bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">CountYou</div>
          <div className="space-x-4">
            <a href="/login">
              <button className="px-6 py-2 rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition-colors">
                Login
              </button>
            </a>
            <a href="/register">
              <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Register
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">Welcome to Our Platform</h1>
              <p className="text-xl text-gray-600">Discover amazing features and boost your productivity with our innovative solutions.</p>
              <div className="space-x-4">
                <button className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Get Started</button>
                <button className="px-8 py-3 rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition-colors">Learn More</button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/api/placeholder/800/600" alt="Hero image" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied users today</p>
          <button className="px-8 py-3 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors">Start Free Trial</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Brand</h3>
              <p>Making the world a better place through innovative solutions.</p>
            </div>
            {footerLinks.map((section, index) => (
              <FooterColumn key={index} {...section} />
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2025 Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
