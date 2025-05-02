import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Card, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaUser } from 'react-icons/fa';
import holy from '../assets/holyimg2.jpg';

function Holyangel() {
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
          <h3 className="mb-3 text-dark">Holy Angels Foundling Home</h3>
          <img
            src={holy}
            alt="St. Christina's Home"
            className="img-fluid mb-3"
          />
          <p style={{textAlign:"justify"}}>
          Holy Angels Foundling Home is attached to St Christinas home. It is primarly for the care and protection of the children. This is a registered home for the children below 6 year. Its provide shelter and care for children who are abandoned, relinquished and also destitute children with their mothers. Around 4200 children were sheltered here since 1967. Now almost 23 children are giving care and protection in the Home
          </p>
          <p  style={{textAlign:"justify"}}>
          Kindergarten is also functions here. After 5 years, they are sent to nearby Schools and institutions for education. Technical as well as professional education is given to them according to their capacity. Those who can’t go for higher studies are given skill training according to their aptitude. Institution supports them in all their life events & guides them throughout their life. The ultimate objective is to make them self dependent & successful in life and moreover helping them to find a better carrier.
          </p>
         
    <p  style={{textAlign:"justify"}}>
    The home has license for in country and inter country adoption from Ministry of women & child development. It also has license from the state Government. The objective of this project is to give Indian children in adoption to Indian couples. At a time there are 10 children in this scheme. Those who want to adopt the child should register their names in online under the site of <Link style={{color:"brown"}}>cara.nic.in</Link> and upload their documents. Central Adoption Resource Authority (CARA) is a statutory body of Ministry of Women & Child Development, Government of India. It functions as the nodal body for adoption of Indian children and is mandated to monitor and regulate in-country and inter-country adoptions.
    </p>

    <p  style={{textAlign:"justify"}}>
    The Institution is headed by Director who is appointed by Archbishop. Other than the Project staff, 8 Nirmaladasi sisters give their service here. Five sisters are working at Thiruvillamala & Kozhinjampara.    </p>
  
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
                  <Link to={'/Childline'} className="text-danger text-decoration-none">› Childline, Thrissur 1098</Link>
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
    </div></div>
  )
}

export default Holyangel