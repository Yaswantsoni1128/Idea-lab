import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, Cloud, TrendingUp, Briefcase, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance and user experience. We create responsive, fast, and SEO-friendly websites that convert visitors into customers.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      features: ["React & Next.js", "Responsive Design", "SEO Optimization", "Performance Tuning"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user interfaces. From concept to deployment, we deliver apps that users love.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with user experience and accessibility in mind. We create designs that not only look great but also drive conversions.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      features: ["User Research", "Prototyping", "Design Systems", "Accessibility"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to support your business growth and digital transformation. We help you leverage the power of cloud computing.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      features: ["AWS & Azure", "DevOps", "Scalability", "Security"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive engagement. We help you reach your target audience and grow your business.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      title: "Consulting",
      description: "Expert technology consulting to help you make informed decisions and achieve your business goals. We provide strategic guidance and technical expertise.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      features: ["Strategy Planning", "Technical Audits", "Architecture Design", "Best Practices"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 px-4"
          >
            Comprehensive solutions tailored to your business needs. We deliver excellence in every project.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.article
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white p-0 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:gap-2 gap-1"
                    >
                      Get Started
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            We're here to help you find the perfect solution for your unique needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;

