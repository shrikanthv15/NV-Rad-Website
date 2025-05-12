import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ResearchSection = () => {
  const researchItems = [
    {
      title: "Advanced Imaging Techniques",
      description: "Exploring cutting-edge MRI and CT scanning methodologies for improved diagnostic accuracy.",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8"
    },
    {
      title: "AI in Radiology",
      description: "Implementing machine learning algorithms for faster and more accurate image analysis.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Patient Care Innovation",
      description: "Developing new protocols to enhance patient comfort and reduce scanning times.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
    }
  ];

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-5">Our Research Initiatives</h2>
        <Row>
          {researchItems.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-100 shadow-sm hover-card">
                  <Card.Img 
                    variant="top" 
                    src={item.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default ResearchSection;

