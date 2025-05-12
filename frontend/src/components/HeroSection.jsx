import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import image1 from '../assets/Radiology and AI with LLMS .jpg';
import image2 from '../assets/Radiology and AI with LLMS  (1).jpg';
import image3 from '../assets/Radiology and AI with LLMS  (2).jpg';
import image4 from '../assets/Radiology and AI with LLMS  (3).jpg';

const HeroSection = () => {
  const carouselItems = [
    {
      image: image1,
      title: "Advanced AI-Powered Radiology",
      description: "Leveraging cutting-edge AI and LLMs for precise diagnostics"
    },
    {
      image: image2,
      title: "Next-Generation Imaging",
      description: "State-of-the-art technology for superior image quality"
    },
    {
      image: image3,
      title: "Intelligent Diagnostics",
      description: "Combining expert radiologists with AI assistance"
    },
    {
      image: image4,
      title: "Innovation in Healthcare",
      description: "Leading the future of medical imaging technology"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Carousel fade interval={5000} className="hero-carousel">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container" style={{ height: '90vh', overflow: 'hidden' }}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div className="carousel-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
              }}></div>
            </div>
            <Carousel.Caption className="text-center p-4" style={{
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '15px',
              maxWidth: '800px',
              margin: '0 auto',
              bottom: '20%'
            }}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="display-4 fw-bold mb-3" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>{item.title}</h1>
                <p className="lead fs-3" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>{item.description}</p>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default HeroSection;
