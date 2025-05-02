import React, { useState } from 'react'
import { Container, Row, Col , Nav ,Navbar, NavDropdown} from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaYoutube , FaPhone, FaEnvelope  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Header() {
    const [expanded, setExpanded] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [activePage, setActivePage] = useState("home");
  
    const handleSelect = (selectedKey) => {
      setActivePage(selectedKey);
      setExpanded(false);     // Close mobile nav
      setAboutOpen(false);    // Close dropdown
    };
  

  return (
    <div>
        {/* 1st header */}
 <div className="topbar bg-dark-burgundy py-2">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <div className="d-md-flex d-none gap-2">
              <a href="#" className="icon-circle text-white">
                <FaTwitter />
              </a>
              <a href="#" className="icon-circle text-white">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/channel/UCPkXb6Yx4l0lweSIOQpkhJQ" className="icon-circle text-white">
                <FaYoutube />
              </a>
            </div>
          </Col>
          <Col xs="auto">
            <button  className="support-btn"><Link style={{textDecoration:"none",color:"white"}} to={'/Supportus' }>Support Us</Link></button>
          </Col>
        </Row>
      </Container>
    </div>

{/* second header */}
<div className="custom-header py-3">
      <Container>
        <Row className="align-items-start">
          {/* Left: Logo + Name */}
          <Col md={6} className="d-flex align-items-start">
            <div className="logo-box me-2">C</div>
            <div>
              <div className="logo-text fw-bold">ST. CHRISTINA’S HOME</div>
              <div className="logo-subtext">Pullazhy, Thrissur</div>
            </div>
          </Col>

          {/* Right: Nav + Contact */}
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            {/* Nav */}
            <Nav className="d-md-flex d-none justify-content-md-end mb-2 nav-links" as="ul">
              <Nav.Item as="li">
                <Nav.Link  className="px-2"><Link style={{textDecoration:"none",color:"black"}} to={'/'}>Home</Link></Nav.Link>
              </Nav.Item>
              <span className="divider">|</span>
              <Nav.Item as="li">
                <Nav.Link  className="px-2"><Link style={{textDecoration:"none",color:"black"}} to={'/Supportus'}>Support Us</Link></Nav.Link>
              </Nav.Item>
              <span className="divider">|</span>
              <Nav.Item as="li">
                <Nav.Link  className="px-2"><Link style={{textDecoration:"none",color:"black"}} to={'/Contact'}>Contact</Link></Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Contact Info */}
            <div className="d-flex justify-content-md-end flex-wrap gap-3 contact-info">
              <div className="d-flex align-items-center gap-2">
                <FaPhone className="contact-icon" />
                <span className="contact-text">0487-2360244</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope className="contact-icon" />
                <a
            href="mailto:holyangelf@yahoo.com"
            className="text-decoration-none text-dark"
          >
            holyangelf@yahoo.com
          </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* main nav */}
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="custom-navbar"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav
            activeKey={activePage}
            onSelect={handleSelect}
            className="mx-auto custom-nav-links"
          >
            <Nav.Link eventKey="home" >
            <Link style={{textDecoration:"none",color:"white"}} to={'/'}>                Home

</Link>
            </Nav.Link>

            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <NavDropdown
                title="About"
                id="about-dropdown"
                show={aboutOpen}
                menuVariant="dark"
              >
                <NavDropdown.Item
                  eventKey="about-mission"
                  active={activePage === "about-mission"}
                >
                         <Link style={{textDecoration:"none",color:"white"}} to={'/christinahome'}>                       St.Christina Home

                         </Link>
                </NavDropdown.Item>
                <NavDropdown.Item

                  eventKey="about-team"
                  active={activePage === "about-team"}
                >
                                    <Link style={{textDecoration:"none",color:"white"}} to={'/Holyangels'}>                 Holy Angels Founding Home
                                    </Link>

                </NavDropdown.Item>
                <NavDropdown.Item

                  eventKey="about-team"
                  active={activePage === "about-team"}
                >
                  <Link style={{textDecoration:"none",color:"white"}} to={'/Childline'}>    Childline , Thrissur 1098</Link>
                
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link eventKey="news"><Link style={{textDecoration:"none",color:"white"}} to={'/News'}>News</Link></Nav.Link>
            <Nav.Link eventKey="gallery"><Link style={{textDecoration:"none",color:"white"}} to={'/Gallery'}>Gallery</Link></Nav.Link>
            <Nav.Link  eventKey="support"><Link style={{textDecoration:"none",color:"white"}} to={'/Supportus'}>Support Us</Link></Nav.Link>
            <Nav.Link  eventKey="contact"><Link style={{textDecoration:"none",color:"white"}} to={'/Contact'}>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header