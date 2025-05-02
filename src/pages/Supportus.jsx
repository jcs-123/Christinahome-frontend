import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Card, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaUser } from 'react-icons/fa';
import donate from '../assets/donate.jpg';

function Supportus() {
  return (
    <div>



<Container fluid className="pt-4 border-bottom">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <h2 style={{ color: 'black' }} className="fw-normal mb-2">Support Us</h2>
          </Col>
          <Col xs={12} md="auto" className="text-md-end text-start">
            <small className="text-muted">
              You are here:&nbsp;
              <Breadcrumb className="d-inline-block mb-0" listProps={{ className: 'm-0' }}>
                <Breadcrumb.Item
                  linkAs={Link}
                  linkProps={{ to: '/' }}
                  className="breadcrumb-link"
                >
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-danger">
              Support Us
                </Breadcrumb.Item>
              </Breadcrumb>
            </small>
          </Col>
        </Row>
        <hr className="mt-2 mb-0" />
      </Container>

      <div>
      <Container fluid className="p-4">
      <Row>
        {/* Left Main Content */}
        <Col lg={8} md={12}>
        <section id="donate" className="py-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={10}>
            <img
              src={donate} // Replace with actual path or URL
              alt="Donate"
              className="img-fluid mb-4"
              style={{ maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <p style={{textAlign:"justify"}}>
            St. Christina's Home is a nonprofit organization running for
             the past 50 years. The members of the organization are from different par
             ts of the country. The work in the organization is based on the welfare issues,
              causes, development of 
            society. Organization get funds from various sources.
            </p>
            <p style={{textAlign:"justify"}}>
            Funding is a requirement of every social welfare organization. Organ
            ization raise funds from various sources (funding sources include grant 
            donations, philanthropic donations, private public donations), so the organ
            ization request you to provide your help through the ways that you like to dona
            te. Getting funds, grants from various sources helps to disseminate useful resourc
            es to improve the programmes and activities in the organization.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="text-center shadow border-0">
              <Card.Header style={{backgroundColor:"brown"}} className=" text-white fw-bold">
                Our Bank Details
              </Card.Header>
              <Card.Body>
                <p className="mb-1">Catholic Syrian Bank</p>
                <p className="mb-1">Main Branch, Thrissur</p>
                <p className="mb-1 fw-bold text-danger">
                  A/c No: 0094-00964598-190001
                </p>
                <p>IFSC Code: CSBK 0000094</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
        </Col>
        <Col lg={1} ></Col>
        {/* Right Sidebar */}
        <Col lg={3} md={12}>
          {/* Activities Card */}
         <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>Activities</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Link to={'/Christinahome'} className="text-danger text-decoration-none">› St. Christina's Home</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Link to={'/Holyangels'} className="text-danger text-decoration-none">› Holy Angels Foundling Home</Link>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>

          {/* Video Card */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Video tour</Card.Title>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/xxXn1K6ggpo?si=RsCTx8LxQgBw5iwu"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </Card.Body>
          </Card>

          {/* Contact Card */}
          <Card className="p-3 mb-4">
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        <p className="mb-1">St. Christina's Home</p>
        <p className="mb-1">P.O. Pullazhy</p>
        <p className="mb-1">Thrissur, Kerala</p>
        <p className="mb-1">India. PIN-680012</p>
        
        <p className="mb-1">
          <FaPhoneAlt className="me-2 text-muted" />
          <small>Tel:</small> 0487-2360244
        </p>
        
        <p>
          <FaEnvelope className="me-2 text-muted" />
          <small>Email:</small>{' '}
          <a
            href="mailto:holyangelf@yahoo.com"
            className="text-decoration-none text-danger "
          >
            holyangelf@yahoo.com
          </a>
        </p>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Supportus