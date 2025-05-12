import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">NV Rad Imaging</h5>
            <p className="mb-0">
              Providing state-of-the-art radiology services with a commitment to patient care and technological excellence.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/research" className="text-light text-decoration-none">Research</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Connect With Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
            <div className="mt-3">
              <p className="mb-1">Email: contact@nvradimaging.com</p>
              <p className="mb-1">Phone: (555) 123-4567</p>
              <p className="mb-0">Address: 123 Medical Center Dr, Suite 100</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <hr className="bg-light" />
            <p className="mb-0">© {new Date().getFullYear()} NV Rad Imaging. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;