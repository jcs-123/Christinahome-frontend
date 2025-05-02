// src/pages/News.js
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Col, Container, Row, Card, Pagination, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 5;
  const baseURL = 'http://localhost:4000'; // ✅ Base API URL

  useEffect(() => {
    getAllNews();
  }, []);

  const getAllNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get(`${baseURL}/all-news`, {
        headers: { "Content-Type": "application/json" },
      });
      setNewsData(result.data);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Header */}
      <Container fluid className="pt-4 border-bottom">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <h2 className="fw-normal mb-2" style={{ color: 'black' }}>News</h2>
          </Col>
          <Col xs={12} md="auto" className="text-md-end text-start">
            <small className="text-muted">
              You are here:&nbsp;
              <Breadcrumb className="d-inline-block mb-0">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-danger">News</Breadcrumb.Item>
              </Breadcrumb>
            </small>
          </Col>
        </Row>
        <hr className="mt-2 mb-0" />
      </Container>

      {/* News Section */}
      <Container className="py-5" id="news">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : error ? (
          <Alert variant="danger" className="text-center">{error}</Alert>
        ) : (
          <>
            <Row>
              {currentItems.map((news, index) => (
                <Col md={12} key={news.id || index} className="mb-4">
                  <Card className="flex-row">
                    {news.image ? (
                      <Card.Img
                        variant="start"
                        src={`${baseURL}/uploads/${news.image}`}
                        style={{ width: '180px', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ width: '180px', height: '100%', backgroundColor: '#eee' }}></div>
                    )}
                    <Card.Body>
                      <Card.Title style={{ color: "brown" }} className="fw-bold">
                        {news.newstitle}
                      </Card.Title>
                      <Card.Text>{news.
description}</Card.Text>
                      <Button variant="outline-danger" size="sm" as={Link} to={`/newsdetail/${news._id}`}>
  Read more →
</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Pagination */}
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
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
              </Pagination>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default News;
