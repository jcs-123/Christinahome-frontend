// src/pages/News.js
import React, { useState } from 'react';
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Card,
  Pagination,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 🔽 Import static images
import ns1 from '../assets/ns1.jpeg';
import ns2 from '../assets/ns2.jpg';
import ns3 from '../assets/ns3.jpg';
import ns4 from '../assets/ns4.jpg';
import ns5 from '../assets/ns5.jpg';
import ns6 from '../assets/ns6.jpeg';

function News() {
  const itemsPerPage = 4;

  // 🔽 Static data with image mapping
  const allNews = [
    {
      id: 'ns1',
      newstitle: 'പുള്ളാഴി സെൻറ് ക്രിസ്റ്റിന ഹോമിന്റെ 57-ാം കുടുംബദിനവും തിരുനാളും',
      description:
        "Dear Friends, Christina's Home was established in 1967 by the Blessed Mar Joseph Kundukulam. 57th Family Day and Feast of Saint Christina jointly celebrated on 28th July 2024. Christina Home has provided shelter to 4023 women and 4236 children...",
      image: ns1,
    },
    {
      id: 'ns2',
      newstitle: 'കുഞ്ഞുങ്ങളുടെ ഭവനത്തിലെ ശിശുദിനാഘോഷം',
      description:
        "പുള്ളാഴി സെൻറ് ക്രിസ്റ്റിന ഹോമിലെ Holy Angel's Foundling home ൽ ശിശുദിനവും മാതൃദിനവും സംഗമമായി നവംബർ 1-ാം തീയതി ആഘോഷിച്ചു...",
      image: ns2,
    },
    {
      id: 'ns3',
      newstitle: "Children's Day Celebration and Adopted Families' Get-Together",
      description:
        "Greetings from Holy Angels Foundling Home Pullazhy. We cordially invite your esteemed presence on the occasion of Children's Day Celebration and the Adopted Families' Get – Together on Sunday, 9th November 2019...",
      image: ns3,
    },
    {
      id: 'ns4',
      newstitle: 'പുള്ളാഴി സെൻറ് ക്രിസ്റ്റിന ഹോം അമ്മതതവാട്ടിൽ ശിശുദിനാഘോഷവും കുടുംബസംഘമവും നടന്നു.',
      description:
        "സുവർണ്ണ ജൂബിലി നിവാലയത്തിനുള്ള സെൻറ് ക്രിസ്റ്റിന ഹോമിലെ Holy Angels Foundling ഹോമിൽ ശിശുദിനവും കുടുംബസംഘമവും 10 Nov 2018 നു ആഘോഷിച്ചു...",
      image: ns4,
    },
    {
      id: 'ns5',
      newstitle: 'കരുണാഭവനങ്ങൾ ആശീർവദിക്കുന്നു',
      description:
        "തൃശൂർ അതിരൂപത കരുണാഭവനത്തോടനുബന്ധിച്ച് ക്രിസ്റ്റിന ഹോമിന്റെ ഗവേഷണത്താൽ December 21 ന് അതിരൂപത ആർച് ബിഷപ്പ് തങ്ങളുടെ നേതൃത്വത്തിൽ ശിലാസ്ഥാപന ചടങ്ങ് നടന്നു...",
      image: ns5,
    },
    {
      id: 'ns6',
      newstitle: '2023 Christmas Celebration at Holy Angels',
      description:
        "The Holy Angels Foundling Home held a joyful Christmas celebration with children and staff. The event featured carols, drama, and Santa Claus. Everyone enjoyed food and fun games together...",
      image: ns6,
    },
  ];

  // 🔽 Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allNews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Header */}
      <Container fluid className="pt-4 border-bottom">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <h2 className="fw-normal mb-2" style={{ color: 'black' }}>
              News
            </h2>
          </Col>
          <Col xs={12} md="auto" className="text-md-end text-start">
            <small className="text-muted">
              You are here:&nbsp;
              <Breadcrumb className="d-inline-block mb-0">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-danger">
                  News
                </Breadcrumb.Item>
              </Breadcrumb>
            </small>
          </Col>
        </Row>
        <hr className="mt-2 mb-0" />
      </Container>

      {/* News Section */}
      <Container className="py-5" id="news">
        <Row>
          {currentItems.map((news) => (
            <Col md={12} key={news.id} className="mb-4">
              <Card className="flex-row">
                <Card.Img
                  variant="start"
                  src={news.image}
                  style={{ width: '180px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: 'brown' }} className="fw-bold">
                    {news.newstitle}
                  </Card.Title>
                  <Card.Text>
                    {news.description.length > 200
                      ? news.description.slice(0, 200) + '...'
                      : news.description}
                  </Card.Text>
                  {/* ✅ Read More Button */}
     <Button
  variant="outline-danger"
  size="sm"
  as={Link}
  to={`/newsdetail/${news.id}`}
>
  Read more →
</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination Controls */}
        <Row className="justify-content-center mt-4">
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Row>
      </Container>
    </div>
  );
}

export default News;
