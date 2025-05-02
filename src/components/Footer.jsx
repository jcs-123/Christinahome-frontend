import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>

      {/* footer */}
<footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row>
          {/* Quick Links */}
          <Col xs={12} md={8}>
            <h5 className="text-white mb-3">Quick Links</h5>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled small">
                  <li>&#9656;<Link to={'/Holyangels'}  style={{textDecoration:"none" ,color:"white"}}> Holy Angels Foundling Home</Link></li>
                  <li>&#9656;<Link to={'/Childline'} style={{textDecoration:"none" ,color:"white"}}>Childline, Thrissur</Link> </li>
                  <li>&#9656;<Link to={'/Supportus'} style={{textDecoration:"none" ,color:"white"}}> Support Us</Link></li>
                  <li>&#9656;<a href='/Christinahome#directors' style={{textDecoration:"none" ,color:"white"}}>Our Directors</a> </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled small">
                  <li>&#9656; <Link to={'/News'}  style={{textDecoration:"none" ,color:"white"}}>News</Link></li>
                  <li>&#9656;<Link to={'/Christinahome'}  style={{textDecoration:"none" ,color:"white"}}>About Us</Link> </li>
                  <li>&#9656;<Link to={'/Contact'} style={{textDecoration:"none" ,color:"white"}}>Contact Us</Link> </li>
                  <li>&#9656;<Link to={'/Login'} style={{textDecoration:"none" ,color:"white"}}>Admin</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Contact Us */}
          <Col xs={12} md={4} className="mt-4 mt-md-0">
            <h5 className="text-white mb-3">Contact us</h5>
            <ul className="list-unstyled small">
              <li>
                <FaMapMarkerAlt className="me-2" />
                St. Christina's Home <br />
                P.O. Pullazhy<br />
                Thrissur, Kerala<br />
                India. PIN-680012
              </li>
              <li className="mt-2">
                <FaPhone className="me-2" /> 0487-2360244
              </li>
              <li>
                <FaEnvelope className="me-2" /> holyangelf@yahoo.com
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-4 border-top pt-3 justify-content-between align-items-center">
          <Col xs={12} md={8}>
            <p className="small mb-0 text-light">
              Copyright © 2018 St. Christina’s Home |
              Designed & Developed by <a href="" style={{ color: 'blue' }}>tbi@jec, Jyothi Engineering College</a>

            </p>
          </Col>
          <Col xs={12} md={4} className="text-md-end mt-3 mt-md-0">
         <a href="https://www.youtube.com/channel/UCPkXb6Yx4l0lweSIOQpkhJQ"> <FaYoutube className="icon1 text-light mx-2" /></a>  
            <FaFacebook className="icon1 text-light mx-2" />
            <FaTwitter className="icon1 text-light mx-2" />
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer