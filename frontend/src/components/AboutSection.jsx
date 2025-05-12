import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      title: "AI-Powered Diagnostics",
      description: "Our advanced AI algorithms assist radiologists in detecting anomalies with 99.9% accuracy, reducing diagnosis time by 60%.",
      icon: "🤖"
    },
    {
      title: "Expert Team",
      description: "Board-certified radiologists with specialized training in AI-enhanced imaging interpretation and decades of clinical experience.",
      icon: "👨‍⚕️"
    },
    {
      title: "Latest Technology",
      description: "State-of-the-art imaging equipment integrated with cutting-edge LLM-based analysis tools for comprehensive diagnostics.",
      icon: "🔬"
    }
  ];

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="display-4 mb-4">Revolutionizing Radiology with AI</h2>
            <p className="lead mb-4">
              At NV Rad Imaging, we're pioneering the integration of artificial intelligence 
              and large language models in diagnostic radiology, setting new standards in 
              healthcare innovation.
            </p>
            <p className="mb-4">
              Founded in 2023, we've successfully analyzed over 50,000 medical images using 
              our proprietary AI algorithms, achieving a remarkable 95% reduction in diagnostic 
              time while maintaining the highest standards of accuracy.
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="me-4">
                <h3 className="h2 mb-0">99.8%</h3>
                <p className="text-muted">Accuracy Rate</p>
              </div>
              <div className="me-4">
                <h3 className="h2 mb-0">60min</h3>
                <p className="text-muted">Average Response Time</p>
              </div>
              <div>
                <h3 className="h2 mb-0">24/7</h3>
                <p className="text-muted">AI Support</p>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
              alt="Medical team"
              className="img-fluid rounded shadow-lg"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </motion.div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            Why Choose NV Rad Imaging?
          </motion.h3>
        </Col>
        {features.map((feature, index) => (
          <Col md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Body className="text-center p-4">
                  <div className="display-4 mb-3">{feature.icon}</div>
                  <Card.Title className="h4 mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-light p-4 rounded-3"
          >
            <h3 className="mb-4">Our AI & LLM Integration</h3>
            <p>
              Our revolutionary approach combines traditional radiology expertise with 
              state-of-the-art artificial intelligence and large language models. This 
              integration allows us to:
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Process and analyze medical images in real-time using advanced neural networks
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Generate detailed, natural language reports using specialized medical LLMs
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Provide instant preliminary assessments while maintaining human oversight
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Cross-reference findings with vast medical databases for accurate diagnosis
              </li>
            </ul>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;