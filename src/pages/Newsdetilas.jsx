import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';

import ns1 from '../assets/ns1.jpeg';
import ns2 from '../assets/ns2.jpg';
import ns3 from '../assets/ns3.jpg';
import ns4 from '../assets/ns4.jpg';
import ns5 from '../assets/ns5.jpg';
import ns6 from '../assets/ns6.jpeg';

const imageMap = {
  ns1, ns2, ns3, ns4, ns5, ns6,
};

const allNews = [
  {
    id: 'ns1',
    newstitle: 'പുല്ലഴി സെൻറ് ക്രിസ്റ്റീന ഹോമിൻറെ 57 -)o കുടുംബദിനവാർഷികവും തിരുനാളും സംയുക്തമായി ആഘോഷിച്ചു',
    description: 'Dear Friends, Christinas Home was established in 1967 by the Blessed Mar Joseph Kundukulam . 57th Family Day and Feast of Saint Christina jointly celebrated on 28th July 2024. With the service and care of Abhiwandya fathers and the hard work of Rev. Fr Joseph Vilangadan, Nirmaladasi Sisters, Christina Home has provided shelter to 4023 women and 4236 children of all castes and creeds. We remember each and every one of you in our prayers who supported us in this venture. Fr. Paulson Thattil-Director FrJustin Thadathil-Asst. Director Sr. Josephina-Mother Superior',
    image: 'ns1',
    date: '2024-07-01',
  },
  {
    id: 'ns2',
    newstitle: 'കുഞ്ഞുങ്ങളുടെ ഭവനത്തിലെ ശിശുദിനാഘോഷം',
    description: 'Mathru-Dinam celebrations on Nov 1...',
    image: 'ns2',
    date: '2023-11-01',
  },
  {
    id: 'ns3',
    newstitle: "Children's Day Celebration and Adopted Familie's Get - Together",
    description: 'Greetings from Holy Angels Foundling Home Pullazhy. We cordially invite your esteemed presence on the occasion of Childrens Day Celebration and the Adopted Families Get - Together on Sunday, 9th November 2019. We look forward to your encouraging presence on the day',
    image: 'ns3',
    date: '2019-11-09',
  },
  {
    id: 'ns4',
    newstitle: 'ശിശുദിനാഘോഷവും കുടുംബസംഘമവും',
    description: 'സുവർണ്ണ ജൂബിലി നിറവിലായിരിക്കുന്ന സെൻറ് ക്രിസ്റ്റീന ഹോമിലെ Holy Angels Foundling ഹോമിൽ ശിശു ദിനവും മാതൃഭാവനത്തിൽ നിന്ന് ദത്തെടുത്തു പോയവരുടെ കുടുംബസംഗമവും സംയുക്തതമായി 10 Nov 2018 രാവിലെ 10am നു ആഘോഷിച്ചു .',
    image: 'ns4',
    date: '2018-11-10',
  },
  {
    id: 'ns5',
    newstitle: 'കരുണാഭവനങ്ങൾ ആശീർവദിക്കുന്നു',
    description: 'Archbishop blessed the foundation site...',
    image: 'ns5',
    date: '2022-12-21',
  },
  {
    id: 'ns6',
    newstitle: 'Christmas Celebration at Holy Angels 2023',
    description: 'Kids enjoyed carols and gifts...',
    image: 'ns6',
    date: '2023-12-25',
  },
];

function Newsdetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const selected = allNews.find((item) => item.id === id);
    setNews(selected);
  }, [id]);

  if (!news) {
    return (
      <Container className="py-5 text-center">
        <h5 className="text-danger">News not found</h5>
        <Button as={Link} to="/news" variant="outline-danger">
          ← Back To News
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2>News Details</h2>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/news' }}>News</Breadcrumb.Item>
            <Breadcrumb.Item active>Details</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card className="shadow-sm">
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={imageMap[news.image]}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-brown">{news.newstitle}</Card.Title>
              <p className="text-muted">
                By: Admin | Posted on: {news.date}
              </p>
              <p>{news.content}</p>
              <p>{news.description}</p>
              <Button as={Link} to="/news" variant="secondary">
                ← Back To News
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Newsdetails;
