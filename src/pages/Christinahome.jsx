import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Card, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaUser } from 'react-icons/fa';
import christina from '../assets/about-img1.jpg';

const directors = [
  { date: '15.08.1967', name: 'Fr. JOSEPH KUNDUKULAM', location: 'ഹാ. ജോസഫ് കുണ്ടുകുളം' },
  { date: '08.09.1970', name: 'Fr. JOSEPH VILANGADAN', location: 'ഹാ. ജോസഫ് വിലങ്ങാടൻ' },
  { date: '21.05.1997', name: 'Fr. FRANKO KAVALAKKATT', location: 'ഹാ. ഫ്രാങ്കോ കാവലക്കാട്ട്' },
  { date: '04.01.2004', name: 'Fr. RAPHAEL THANISSERY', location: 'ഹാ. റാഫേൽ താണിശ്ശേരി' },
  { date: '06.02.2008', name: 'Fr. PAULY NEELANKAVIL', location: 'ഹാ. പൗലി നീലങ്കാവിൽ' },
  { date: '06.02.2013', name: 'Fr. JOSE KONIKKARA', location: 'ഹാ. ജോസ് കോണിക്കര' },
  { date: '03.02.2016', name: 'Fr. CHALISSERY JOHNSON', location: 'ഹാ. ജോൺസൺ ചാലിശ്ശേരി' },
];

const assistants = [
  { date: '12.12.1974', name: 'Fr. LOUIS KANNATH', location: 'ഹാ. ലൂയിസ് കണ്ണത്ത്' },
  { date: '13.08.1975', name: 'Fr. JOSE U. VAZHAPILLY', location: 'ഹാ. ജോസ് യു. വാഴപിളളി' },
  { date: '07.04.1978', name: 'Fr. GEORGE KALAN', location: 'ഹാ. ജോർജ് കലാൻ' },
  { date: '30.09.1978', name: 'Fr. GEORGE CHITTILAPILLY', location: 'ഹാ. ജോർജ് ചിട്ടിലപിളളി' },
  { date: '07.01.1988', name: 'Fr. FRANKO KAVALAKKATT', location: 'ഹാ. ഫ്രാങ്കോ കാവലക്കാട്ട്' },
  { date: '10.01.1990', name: 'Fr. ANTONY CHEMBAKASSERY', location: 'ഹാ. ആന്റണി ചെമ്പകശ്ശേരി' },
  { date: '30.05.1994', name: 'Fr. KUTTIKKATT ANDREWS', location: 'ഹാ. കുട്ടിക്കാട്ട് ആൻഡ്രൂസ്' },
  { date: '10.01.1996', name: 'Fr. ALOOR JOJU', location: 'ഹാ. ജോജു ആലൂർ' },
  { date: '10.01.1996', name: 'Fr. JOSHY VENNATTUPARAMBIL', location: 'ഹാ. ജോഷി വെണ്ണാട്ടുപറമ്പിൽ' },
  { date: '03.02.2016', name: 'Fr. JOSEPH VAIKKADAN', location: 'ഹാ. ജോസഫ് വൈക്കാടൻ' },
];

const ListItem = ({ date, name, location }) => (
  <li className="mb-2">
    <FaUser className="text-danger me-2" />
    <strong>{date}</strong> - {name} ({location})
  </li>
);
function Christinahome() {
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
          <h3 className="mb-3 text-dark">Welcome to St. Christina's Home</h3>
          <img
            src={christina}
            alt="St. Christina's Home"
            className="img-fluid mb-3"
          />
          <p style={{textAlign:"justify"}}>
          A home for every unmarried mothers and homeless children. Established by late Mar Joseph Kundukul
          am former Archbishop of Thrissur Archdiocese driven by the sisters of Nirmaladasi aided by the Go
          vt of Kerala . This institution was run by the sole purpose of providing shelter and care for those women and children who have nowhere to go. It is one of the oldest adoption centers in Kerala. Women and children here are provided with all the facilities that they are denied in their family or in the society. They are looked after even in their old age with pure love and care. Unmarried mothers can leave their babies in the hands of St Christina Home w\
          ho ensures a bright and colorful future of these children when they grow up.
          </p>
          <p  style={{textAlign:"justify"}}>
          The women here are from different backgrounds like different religion, different socio
           economic status, differently abled etc.. But all despite their differences are equally
            treated and gifted with motherly love and care by its staffs who are nuns. The organization runs by sisters headed by the priest. A very homely and eco friendly environment is provided to the inmates which can bring solace even to the most depressed or distressed soul. Sisters take special care of the ones who can’t handle their life on their own. Every inmate is assigned some or the other task like looking after the children, taking care of the old, or the terminally ill patients or cleaning or cooking chores so as to free them from other unwanted th
          oughts. Any help be it medical or financial is provided by the institution.
          </p>
          <Container className="my-4">
      <Row>
        <Col>
          <blockquote className="blockquote-custom">
            <span className="quote-icon"><FaQuoteLeft /></span>
            <p className="mb-0">
              The organization is also home for homeless children from their birth till the age of six.
            </p>
          </blockquote>
        </Col>
      </Row>
    </Container>
    <p  style={{textAlign:"justify"}}>
    The organization is also home for homeless children from their birth till the age of six. They can be adopted by the persons or couples with or without children who has the capacity to give them a home filled with love and care. Children who have got mothers, who live in the organization, can stay with them till they turn six and later on are moved into another organization for further education. They can come here during vacation and other festival and celebration. The children in need of medical help are provided with the best possible medical help and facilities. They are provided with the care takers 24/7 who looks after them with much love and care. They
     are supported by the organization by providing them opportunities for further education.
    </p>
    <p  style={{textAlign:"justify"}}>
    The organization is not only home for these people but also to many animals, birds and wide
     varieties of plant species. The organization is very well maintained with all need facilities.
      The organization is a home for almost 85 inmates who have nothing but love and thankful heart 
      for this institution. Their life is made into heaven with daily prayers orientation and love. St
       Christina home is indeed a heaven on earth which works for the betterment of the people without demanding anything in return. This organization is pure
     example of humanity love and peace.
    </p>
    <Container id='directors' className="my-4">
      <Row>
        <Col>
          <h5 className="fw-bold text-black">Directors from 1967 to 2018</h5>
          <ul className="list-unstyled">
            {directors.map((d, i) => (
              <ListItem key={i} {...d} />
            ))}
          </ul>

          <h5 className="fw-bold text-black mt-4">Assistant Directors from 1967 to 2018</h5>
          <ul className="list-unstyled">
            {assistants.map((a, i) => (
              <ListItem key={i} {...a} />
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
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
                  <Link to={'/Holyangels'} className="text-danger text-decoration-none">› Holy Angels Foundling Home</Link>
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
      </div>
    </div>
  );
}

export default Christinahome;
