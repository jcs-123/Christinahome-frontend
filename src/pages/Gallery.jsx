import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  Card } from 'react-bootstrap';
import ga1 from '../assets/g1.jpg';
import ga2 from '../assets/g2.jpg';
import ga3 from '../assets/g3.jpg';
import ga4 from '../assets/g4.jpg';
import ga5 from '../assets/g5.jpg';
import ga6 from '../assets/g6.jpg';
import ga7 from '../assets/g7.jpg';
import ga8 from '../assets/g8.jpg';
import ga9 from '../assets/g9.jpg';
import ga10 from '../assets/g10.jpg';
import ga11 from '../assets/g11.jpg';
import ga12 from '../assets/g12.jpg';
import ga13 from '../assets/g13.jpg';
import ga14 from '../assets/g14.jpg';
import ga15 from '../assets/g15.jpg';

function Gallery() {
  return (
    <div>
<Container fluid className="pt-4 border-bottom">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <h2 style={{ color: 'black' }} className="fw-normal mb-2">Gallery <span style={{fontSize:"15px"}}>the impressions</span></h2>
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
           Gallery
                </Breadcrumb.Item>
              </Breadcrumb>
            </small>
          </Col>
        </Row>
        <hr className="mt-2 mb-0" />
      </Container>


      <section id="gallery" className="py-5">
      <Container>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <p>A picture tells a thousand words. We here share you the moments we get from our home.</p>
          </Col>
        </Row>

        <Row>
          {/* Card 1 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipMiDsdkxFEwrcGD_8yNFZpI5HWl8NU0jzw01NQtRG-tda4gmNKkBAOR0Her1fEahg?key=VzlIZFNlUWlHQVV6eGpKd2plZ3FfNmdYcTZLVXZ3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga1} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Christmas Celebration 2019</Card.Title>
                <Card.Text>Christmas Celebration 2019</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipMuI1BrGdy8mhJyQL6Dv2jN0x5Wu_1ETJw12OKOn8XoSl7aNFQnHW4y7pJKU8MzJQ?key=UXhjM3dPN1RPbkhzU2RDdC1taGYyOU9YcFlYM0Zn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga2} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Ollur St. Evupraisia</Card.Title>
                <Card.Text>Pilgrimage to Ollur St. Evupraisia</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipOrcpPei96vVLhrp3O1ykbtCVE7g-HK8y1Y4RSoM9AmIyhpHFhn67OBHRyd9WPs5A?key=LUVZU2FKNkRpcTdqX244LUJNYV9mMWpldjBjR2J3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga3} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Holy Land</Card.Title>
                <Card.Text>Holy land visiting</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>
        </Row>



        <Row>
          {/* Card 1 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipPDqPmHmR5XjPj4PyhbMRXiI3d07cJ1BH7R7KlWxvVD3ZneY5ukB9e4zsNAMXk1WA?key=anQ0dUJscXdXVHRFUFljMHJORkVMWktaajZpU0VR"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga4} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">St.Mariyam Thresia</Card.Title>
                <Card.Text>Christmas Celebration 2019</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipOtsR9cQpMYwzVMfZYVi6nntaYeFAxbz7HtEBMfQo-d6Sfr5-N4Gsl7kZctx0CW1w?key=NVhja0F1WXJxd013Z2ZtcFdPOE5KSkJURVltazRR"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga5} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Vegetables</Card.Title>
                <Card.Text>Vegetables from our farm-field</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipPSwh9nVWZFfWwm7ebYtrtEsSGgckXbG820j2vA_qi_99i0rL2Zzrvtq8WQ5_YZ1A?key=YTFuX21KMk0xbkswdzlYSmV2a3Jfd0IyS1BXV0tB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga6} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Children's Day 2019</Card.Title>
                <Card.Text>Children's Day celebration</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>
        </Row>




        <Row>
          {/* Card 1 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipO_xre0yyZqBObAW6TRU0RUkAJErPUECtF-6vgQKG3QX7wF5SM5eE5-nYUVSV2TkQ?key=b2s3dXRnVkNUSlZlVmo4T3dRcEttQXBfSEJpd3Fn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga7} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Flood 2019</Card.Title>
                <Card.Text>Flood effected area</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipM1f22GrOYnhWh6bSaWbpI-ppdEqf0pPHMGYfRD5vLSTXHq8kCD0K5zpnCgJQ6bMA?key=UFpXczdIbWNVWEJfdV9aWXBTX3JZc094ZmZHa0VB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga8} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Home day 2019</Card.Title>
                <Card.Text>Home day celebration</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
          <a
              href="https://photos.google.com/share/AF1QipN13O9zW-I5_ZE4lybbvlXt-fZLrVyfI_gJItwVLMP_d0EI5I78Hw3jjIDEMKHB_w?key=ajR0NVFZUFRBZmJrOS1xekxhWGNHNGQ5em5hSlpn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga9} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">St. Christina Home</Card.Title>
                <Card.Text>Our world</Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>
        </Row>


        
        <Row>
          {/* Card 1 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga10} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Holy Angels Foundling Home</Card.Title>
                <Card.Text>Our world</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga11} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Children's Day</Card.Title>
                <Card.Text>November 14, 2018</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga12} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Flood 2018</Card.Title>
                <Card.Text>Kerala Flood 2018</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
           
        <Row>
          {/* Card 1 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga13} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Childline</Card.Title>
                <Card.Text>1098 Night & Day</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga14} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">മാര്‍ ജോസഫ് കുണ്ടുകുളം</Card.Title>
                <Card.Text>ജന്മശതാബ്ദി ആഘോഷം</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ga15} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">Birds & Cattles</Card.Title>
                <Card.Text>Feel the nature</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    </div>
  )
}

export default Gallery