import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  Container,
  Row,
  Col,
  Image,
  Carousel as BootstrapCarousel,
  Card,
  Carousel,
  Button
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import img1 from '../assets/slide-1.jpg';
import img2 from '../assets/slide-2.jpg';
import logo from '../assets/50years.jpg';

import test1 from '../assets/img-1.jpg';
import test2 from '../assets/img-2.jpg';
import test3 from '../assets/img-3.jpg';
import pray from '../assets/St.Christina.jpeg';
import holyangels from '../assets/holy.jpg';
import childline from '../assets/childline.png';
import axios from 'axios';


// const events = [
//   { id: 1, title: 'പള്ളഴി സെന്റ് ക്രിസ്റ്റ...', desc: "Dear Friends, Christina's Home was established in 1967...", img: event1 },
//   { id: 2, title: 'കുഞ്ഞുങ്ങളുടെ വേദന്ത...', desc: "Holy Angel's Founding home ൽ ശുഭാശംസയും...", img: event2 },
//   { id: 3, title: "Children's Day Celeb...", desc: "Greetings from Holy Angels Founding Home Pullazhy...", img: event3 },
//   { id: 4, title: 'പള്ളഴി സെന്റ് ക്രിസ്റ്റ...', desc: '52-ാമത് കുടുംബസമ്മേളനം ജൂലൈ 21ന് ആചരിച്ചു...', img: event4 },
//   { id: 5, title: 'പള്ളഴി സെന്റ് ക്രിസ്റ്റ...', desc: 'സുവർണ്ണ ജൂബിലി ആഘോഷദിനമായി...', img: event5 },
//   { id: 6, title: 'സുവർണ്ണ ജൂബിലി ദിവ്യ...', desc: 'ദിവ്യബലിക്ക് ആദരവായി ചേർന്ന അഭിവന്ദ്യ...', img: event6 },
// ];

function Home() {
const [event,setEvent]=useState([])
  const baseURL = 'https://christinahome-backend.onrender.com'; // ✅ Base API URL

  const getAllNews = async () => {
    try {
      const result = await axios.get(`${baseURL}/all-news`, {
        headers: { "Content-Type": "application/json" },
      });
      setEvent(result.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
    }
  };
    useEffect(() => {
      getAllNews();
    }, []);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const images = [img1, img2];

  const testimonials = [
    {
      id: 1,
      quote: " 1967 ആഗസ്റ്റ് 15 തീയ്യതി മാർ ജൊസഫ് കുണ്ടുകുളം പിതാവ് അടിത്തറ പാകിയ പുല്ലഴി സെൻറ് ക്രിസ്റ്റീന ഹോം എന്ന ഈ സ്ഥാപനത്തിലേക്കു ഓരോ തവണ കടന്നുവരുമ്പൊഴും വളരെ സന്തോഷത്തോടെയാണ് തിരിച്ചുപോകാറുള്ളത്. അമ്മതൊട്ടിലിലൂടെയും മറ്റ് ഇവിടെ എത്തിച്ചേർന്ന പൈതങ്ങളെയും ഏല്ലാവരാലും ഉപേക്ഷിക്കപ്പെട്ട് ഇവിടെ അഗതികളായി എത്തിച്ചേരുന്നവരേയും എറ്റവും കരുണയോടെയും കരുതലോടെയുമാണ് സിസ്റ്റേഴ്സും മറ്റും പരിചരിക്കുന്നതു്. യാതൊരുവിധ മടിയൊ മടുപ്പൊ കൂടാതെ സദാ പുഞ്ചിരിച്ചുകൊണ്ടു ദൈവമഹത്വത്തിനായി ചെയ്യുന്ന ഇത്തരം കാര്യങ്ങൾ കാണുമ്പോൾ എൻറെ മനസു നിറയാറുണ്ട്. ഇപ്പൊഴത്തെ ഡയറക്റ്ററായ ബഹുഃ ജോൺസൺ ചാലിശേരി അച്ചൻറെ നേതൃത്വ പാടവവും ഊർജ്ജസ്വലതയും കർമശേഷിയും ഈ സ്ഥാപനത്തെ ഉന്നതത്തിലേക്കുയർത്തുവാൻ കാരണമായിട്ടുണ്ട്. ഇവിടേ സേവനമനുഷ്ഠിച്ച മറ്റ് വന്ദ്യവൈദീകരേയും സന്യാസിനികളേയും ഞാൻ ഈ അവസരത്തിൽ സ്നേഹത്തോടെ ഓർക്കുന്നു. കരുണയുടെ കൈത്തിരി സമൂഹമനസാക്ഷിക്ക് മുൻപിൽ കൊളുത്തിവെക്കുവാൻ ഇതിൻറെ അണിയറ പ്രവർത്തകർക്ക് കഴിയട്ടെയെന്നു സർവേശ്വരനോട് പ്രാർത്ഥിച്ചുകൊണ്ടു, യേശുവിൽ സ്നേഹത്തോടെ,",
      author: "Mar Thattil Raphael",
      title: "Bishop - Shamshabad",
      image: test1
    },
    {
      id: 2,
      quote: "തൃശ്ശൂർ അതിരൂപതക്ക് കീഴിൽ പ്രവർത്തിക്കുന്ന പുല്ലഴി സെൻറ് ക്രിസ്റ്റീന ഹോം എന്ന സ്ഥാപനം സുവർണ്ണ ജൂബിലിയുടെ പൊൻപ്രഭ തൂകി നിൽക്കുകയാണിപ്പോൾ. ഈ അവസരത്തിൽ ഒട്ടേറേ പ്രവർത്തനങ്ങൾ നടത്തപ്പെടുകയും അതിൻറെ ഭാഗമായി പലതവണ ഈ സ്ഥാപനത്തിൽ എത്തിചേരുവാനും ഭാഗ്യവും ലഭിച്ചു്. ഇപ്പോഴത്തെ ഡയറക്റ്ററായ ബഹുഃ ജോൺസൺ ചാലിശേരി അച്ചൻറെയും സിസ്റേഴ്സിന്റെയും മേൽട്ടത്തിൽ നടത്തപെട്ട ഒരോ ജൂബിലീ പരിപാടികലും ഒന്നിനൊന്ന് മികവുറ്റതാണ്. അതിൻറെ ഒരു ഭാഗമാണല്ലോ ഈ സ്പ്ലിമെന്റും. ജൂബിലിവർഷം ഒരു തിരിഞ്ഞുനോട്ടത്തിൻറെ വർഷം കൂടിയാണ്. യശഃശരീരനായ ബഹുഃ മാർ ജൊസഫ് കുണ്ടുകുളം പിതാവു, ബഹുഃ ജോസഫ് വിളങ്ങാടനച്ചനും തുടങ്ങിവച്ച ഈ കൊച്ചുഭവനം അനേകം അഗതികൾകും അനാഥർക്കും അഭയനൽകുകയും ഒരുപാട് കുഞ്ഞുങ്ങൾക്ക് നല്ല ഭാവിജീവിതത്തിന് വേദിയൊരുക്കുകയു ചെയ്തിട്ടുണ്ട്. ഇതിൻറെ പിന്നിൽ പ്രവർത്തിച്ചവർ ഒരുപാടുണ്ടെന്നറിയാം. ഈ ഉദ്യമത്തിനു പിന്നിലെ ഏല്ലാ അണിയറ പ്രവർത്തകർക്കും എൻറെ ഏല്ലാവിധ ആശംസകളും അഭിനന്ദനങ്ങളും നേർന്നുകൊള്ളുന്നു.",
      author: "Mar Andrews Thazhath",
      title: "Archbishop of Trichur",
      image:test2
    },
    {
      id: 2,
      quote: "അപ്പനും അമ്മയും നിന്നെ ഉപേക്ഷിച്ചാലും കർത്താവു നിന്നെ കൈകൊള്ളും  എന്ന തിരുവചനം അന്വർത്ഥ മാകുംപോലെ ജാതി-മത-വർഗ്ഗ-വർണ്ണ ഭേദമന്യെ നിരാലംബർകും നിരാശ്രയർക്കും സുരക്ഷിതത്വത്തിൻറെ സ്നേഹക്കൂട് ഒരുക്കിയിരിക്കുകയാണ് പുല്ലഴിയിലെ സെൻറ് ക്രിസ്റ്റീന ഹോം. വിശ്വാസം എന്നതു വാക്കുകളിൽ മാത്രം ഒതുക്കിനിർത്താതെ പരസ്പര സ്നേഹത്തിൻറെയും സഹകരണത്തിൻറെയും സഹവർത്തിത്വത്തിൻറെയും സാക്ഷ്യങ്ങളായി മറ്റുള്ളവർക്കും മുന്നിൽ ജീവിച്ചുകാണിച്ചുകൊണ്ട് ഈ സ്ഥാപനവുമായി ബന്ധപ്പെട്ടു നിലകൊള്ളുന്ന ഒരോരുത്തരും ചെയ്യുന്നത് ഇതിൻറെ നടത്തിപ്പുകാരോടു ചേർന്നു കരുണയുടെ നീർചാലുകൾ വറ്റിയിട്ടില്ലാത്ത സുമനസുകളുടെ കൂട്ടായി പ്രവർത്തനങ്ങൾ ഈ സ്ഥാപനത്തിൻറെ വളർച്ചയിൽ നല്ലൊരു പങ്കുവഹിച്ചിട്ടുണ്ട്. അതിനൊരുദാഹരണമാണ് ഈ ജൂബിലീ സപ്ലിമെൻറ്. സെൻറ് ക്രിസ്റ്റീന ഹോമിൻറെ പ്രവർത്തനങ്ങൾ സമൂഹത്തിന് കൂടുതൽ ഉപകാരപ്രഥമാകുംവിധം മുന്നോട്ട് കൊണ്ടുപോകുവാൻ ഇതിൻറെ സാരഥികൾക് കഴിയട്ടെയെന്ന് ആത്മാർത്ഥമായി ആഗ്രഹിക്കുകയും, അതിനായി പ്രാർത്ഥിക്കുകയും ചെയ്തുകൊണ്ടു, വാത്സല്യത്തോടെ,",
      author: "Mar Jacob Thoomkuzhy",
      title: "Archbishop Emeritus",
      image:test3
    }
  ];

  const videos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/xxXn1K6ggpo?si=yWuIWy0A7XuzSJrV",
      description: "Our video tour allows you to explore a little more about St. Christina's Home. We offer here some of our video collections hosted in YouTube."
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/ITqhwhk5yV4?si=ilmnLvZHb59z01j6"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/kT1wzknmx5Q?si=lsU3EN_qwKqccBWU"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const checkScrollLimits = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScrollLimits();
    const ref = scrollRef.current;
    if (ref) ref.addEventListener('scroll', checkScrollLimits);
    return () => ref && ref.removeEventListener('scroll', checkScrollLimits);
  }, []);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(autoplay);
  }, [testimonials.length]);

  const handleReadMore = (id) => {
    navigate(`/News/${id}`);
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <div
            className="carousel-container mb-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <BootstrapCarousel fade controls={hovered} indicators interval={3000}>
              {images.map((img, idx) => (
                <BootstrapCarousel.Item key={idx}>
                  <img
                    className="d-block w-100 carousel-image"
                    src={img}
                    alt={`Slide ${idx}`}
                    style={{ height: '50vh', objectFit: 'cover' }}
                  />
                </BootstrapCarousel.Item>
              ))}
            </BootstrapCarousel>
          </div>

          <div style={{ backgroundColor: '#6b3535', color: 'white', padding: '2rem', borderRadius: '12px' }}>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <Image src={logo} fluid style={{ maxHeight: '150px' }} />
              </Col>
              <Col xs={12} md={8}>
                <h4 className="mb-3">50 Years of Service</h4>
                <p style={{ textAlign: 'justify' }}>
                St. Christina's home is a shelter for every unmarried mothers and homeless children. Established by late Mar Joseph Kundukulam former Archbishop of Trichur Archdiocese driven by the sisters of Nirmaladasi aided by the Govt of Kerala. This institution was run by the sole purpose of providing shelter & care for those women and children who have nowhere to go.                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* News & Events Section */}
      <div className="news-carousel-section bg-light py-5 position-relative">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 style={{ color: "#aa2353" }}>News & Events</h4>
            <div className="arrow-group">
              <button className="carousel-arrow me-2" onClick={() => scroll('left')} disabled={!canScrollLeft}>
                <FaChevronLeft />
              </button>
              <button className="carousel-arrow" onClick={() => scroll('right')} disabled={!canScrollRight}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="news-scroll-wrapper">
            <div className="news-scroll d-flex gap-4 overflow-auto" ref={scrollRef}>
              {event.map((event) => (
                <div
                  key={event.id}
                  className="news-card bg-white p-3 rounded shadow-sm flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <img
                        src={`${baseURL}/uploads/${event.image}`}
                        alt={event.
                      newstitle}
                    className="img-fluid rounded mb-2"
                    style={{ height: '160px', objectFit: 'cover', width: '100%' }}
                  />
                  <h6 className="text-truncate fw-bold text-dark" title={event.newstitle}>{event.newstitle}</h6>
                  <p className="small mb-2">
  {event.description ? (event.description.length > 70 ? event.description.substring(0, 70) + "..." : event.description) : "No description"}
</p>               
                  <Button variant='light' className="read-more text-danger"  size="sm" as={Link} to={`/newsdetail/${event._id}`}>
                  Read more <span className="ms-1">&rsaquo;</span></Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Video and Testimonials */}
      <Container className="video-tour-section py-5">
  <Row className="align-items-stretch g-4">
    {/* St. Christina Image - Wider and Centered */}
    <Col xs={12} md={6} lg={3} className="d-flex flex-column align-items-center text-center">
      <Image 
        src={pray}
        alt="St. Christina" 
        fluid 
        className="rounded shadow saint-image mb-3"
      />
      {/* <p className=" fs-6 mb-0">ST. CHRISTINA, PRAY FOR US</p> */}
    </Col>

    {/* Video Tour Section */}
    <Col xs={12} lg={5} className="d-flex flex-column">
      <h2 className="video-tour-title text-center text-lg-start mb-3">Video Tour</h2>

      <div className="video-carousel-container flex-grow-1 d-flex flex-column h-100">
        <Carousel
          indicators={false}
          interval={null}
          prevIcon={<FaChevronLeft className="control-icon" />}
          nextIcon={<FaChevronRight className="control-icon" />}
        >
          {videos.map((video) => (
            <Carousel.Item key={video.id}>
              <div className="ratio ratio-16x9">
                <iframe
                  src={video.embedUrl}
                  title={`Video ${video.id}`}
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="video-description mt-3">
          <p>{videos[0]?.description}</p>
        </div>
      </div>
    </Col>

    {/* Testimonials Section */}
    <Col xs={12} lg={4} className="d-flex flex-column">
  <Card className="testimonial-card d-flex flex-column shadow-sm p-3" style={{ maxHeight: '400px' }}>
    <Card.Body className="d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="testimonial-title mb-0">Testimonials</h5>
        <div>
          <button
            onClick={() =>
              setActiveTestimonial(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="btn btn-outline-primary btn-sm me-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() =>
              setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
            }
            className="btn btn-outline-primary btn-sm"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="testimonial-quote-container flex-grow-1 overflow-auto small" style={{ maxHeight: '200px' }}>
        <p className="testimonial-quote fst-italic mb-2">
          "{testimonials[activeTestimonial].quote}"
        </p>
      </div>

      <footer className="blockquote-footer mt-2 d-flex align-items-center gap-2">
        <Image
          src={testimonials[activeTestimonial].image}
          fluid
          roundedCircle
          className="img-thumbnail"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
        <div>
          <cite className="fw-semibold small">{testimonials[activeTestimonial].author}</cite>
          <div className="text-muted small">{testimonials[activeTestimonial].title}</div>
        </div>
      </footer>
    </Card.Body>
  </Card>
</Col>

  </Row>
</Container>



{/* new activities  */}
<div>
<Container fluid className="bg-light py-4">
      <Row className="g-4">
        {/* Activities Section */}
        <Col xs={12} md={4}>
          <Card className="p-3 border-0 bg-light shadow-sm h-100">
            <h5 className="pb-2 border-bottom border-2 border-danger" style={{ color: 'brown' }}>
              Activities
            </h5>
            <div className="d-flex align-items-center my-2">
              <Image
                src={holyangels}
                alt="Activity 1"
                roundedCircle
                width={50}
                height={50}
                className="me-2"
              />
           <Link to={'/Holyangels'} style={{textDecoration:"none",color:"black"}}>  <span>Holy Angels Foundling Home</span></Link> 
            </div>
            <div className="d-flex align-items-center">
              <Image
                src={childline}
                alt="Activity 2"
                roundedCircle
                width={50}
                height={50}
                className="me-2"
              />
           <Link to={'/Childline'} style={{textDecoration:"none",color:"black"}}>  <span>Childline, Thrissur, 1098</span></Link>   
            </div>
          </Card>
        </Col>

        {/* Support Us Section */}
        <Col xs={12} md={4}>
          <Card className="p-3 border-0 bg-light shadow-sm h-100">
            <h5 className="pb-2 border-bottom border-2 border-danger" style={{ color: 'brown' }}>
              Support Us
            </h5>
            <p className="mb-2 small">
              There are several ways that you can help out. You can make a difference.
              Make a difference, right now.
            </p>
            <a href="#" className="text-danger small"><Link to={'/Supportus'} style={{textDecoration:"none",color:"brown"}}>
              Support Now…</Link> <span>&#8250;</span>
            </a>
          </Card>
        </Col>

        {/* Quick Links Section */}
        <Col xs={12} md={4}>
          <Card className="p-3 border-0 bg-light shadow-sm h-100">
            <h5 className="pb-2 border-bottom border-2 border-danger" style={{ color: 'brown' }}>
              Quick Links
            </h5>
            <ul className="list-unstyled mb-0 small">
              <li><a href="#" className="text-danger text-decoration-none">&#9656;            <Link to={'/Gallery'} style={{textDecoration:"none",color:"brown"}}>  <span>Gallery</span></Link> 
              </a></li>
              <li><a href="#" className="text-danger text-decoration-none">&#9656;           <Link to={'/News'} style={{textDecoration:"none",color:"brown"}}>  <span>News</span></Link> 
              </a></li>
              <li><a href="#" className="text-danger text-decoration-none">&#9656;          <Link to={'/Supportus'} style={{textDecoration:"none",color:"brown"}}>  <span>Support Us  </span></Link> 
              </a></li>
              <li><a href="#" className="text-danger text-decoration-none">&#9656;   <Link to={'/Contact'} style={{textDecoration:"none",color:"brown"}}>  <span>Contact  </span></Link> </a></li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
</div>

    </div>
  );
}

export default Home;
