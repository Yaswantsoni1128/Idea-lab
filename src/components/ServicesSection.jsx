import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, Cloud, TrendingUp, Briefcase } from 'lucide-react';

const ServicesSection = ({ 
  title = "Our Services", 
  subtitle = "We offer a comprehensive range of solutions to meet your needs",
  items = [],
  className = ""
}) => {
  // Default items if none provided
  const defaultItems = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance and user experience.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user interfaces.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with user experience and accessibility in mind.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to support your business growth and digital transformation.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive engagement.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Consulting",
      description: "Expert technology consulting to help you make informed decisions and achieve your business goals.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
    }
  ];

  const servicesItems = items.length > 0 ? items : defaultItems;

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
    <section id="services" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {servicesItems.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white p-0 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <img 
                  src={item.image || `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&sig=${index}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                >
                  {item.icon && <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Optional Link */}
                {item.link && (
                  <Link
                    to={item.link || "/services"}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:gap-2 gap-1"
                  >
                    Learn more
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

