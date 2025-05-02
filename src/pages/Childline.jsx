import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Card, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaUser } from 'react-icons/fa';
import child from '../assets/childline.jpg';
function Childline() {
  return (
    <div>


<Container fluid className="pt-4 border-bottom">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <h2 style={{ color: 'black' }} className="fw-normal mb-2">About</h2>
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
                  About
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
          <h3 className="mb-3 text-dark">
          Childline, Thrissur - 1098</h3>
          <img
            src={child}
            alt="St. Christina's Home"
            className="img-fluid mb-3"
          />
          <p style={{textAlign:"justify"}}>
          CHILDLINE is a national 24 hour free emergency telephone helpline & outreach service for children in need of care & protection. It comes under Ministry of Women & Child development. By dialing 1098 from within the district anyone can contact CHILDLINE in that district.          </p>
          <p  style={{textAlign:"justify"}}>
          1098 is not a mere number. 10 - 9 - 8 or CHILDLINE is a countdown to a better life for the street child. A friendly or sympathetic 'didi' or 'bhaiya' who is always there for them 24 hours of the day, 365 days of the year.          </p>
         
    <p  style={{textAlign:"justify"}}>
    CHILDLINE reaches out to all children in need of care and protection. These include: street children, child labourers, children who have been abused, child victims of the flesh trade, differently-abled children, child addicts, mentally ill children, and children infected by HIV/AIDS - any child who needs our help    </p>

    <p  style={{textAlign:"justify"}}>
    Children / concerned adults call CHILDLINE for medical assistance, shelter, missing children, Repatriation, Protection from abuse, Emotional support and guidance, Death, information about CHILDLINE, Volunteers, Information and referral to services, Silent calls, Chat calls etc. It intervenes in case of sickness, death and abuse of children, runaways and child labour, always focusing on the marginalized child. After the initial crisis intervention, CHILDLINE links these children to long-term services.</p>  
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

export default Childline