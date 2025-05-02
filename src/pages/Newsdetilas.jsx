// src/pages/Newsdetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col, Spinner, Alert, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';

function Newsdetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]); // <- For sidebar other news
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  useEffect(() => {
    const fetchNewsDetail = async () => {
      if (!id) {
        setError("No news ID provided.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${baseURL}/all-news/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        setNews(response.data);
      } catch (err) {
        console.error("Error fetching news detail:", err);
        setError("Failed to fetch news details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchOtherNews = async () => {
      try {
        const response = await axios.get(`${baseURL}/all-news`, {
          headers: { "Content-Type": "application/json" },
        });
        // Filter out the current news
        const others = response.data.filter(item => item._id !== id);
        setOtherNews(others.slice(0, 5)); // Show only 5 others
      } catch (err) {
        console.error("Error fetching other news:", err);
      }
    };

    fetchNewsDetail();
    fetchOtherNews();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger" className="text-center">{error}</Alert>
        <div className="text-center">
          <Button as={Link} to="/news" variant="outline-danger" className="mt-3">
            ← Back To News
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <div>
      {/* Header */}
      <Container fluid className="pt-4 border-bottom">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <h2 className="fw-normal mb-2" style={{ color: 'black' }}>News Details</h2>
          </Col>
          <Col xs={12} md="auto" className="text-md-end text-start">
            <small className="text-muted">
              You are here:&nbsp;
              <Breadcrumb className="d-inline-block mb-0">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/news' }}>News</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-danger">Details</Breadcrumb.Item>
              </Breadcrumb>
            </small>
          </Col>
        </Row>
        <hr className="mt-2 mb-0" />
      </Container>

      {/* News Content */}
      <Container className="py-5">
        <Row>
          {/* Main News */}
          <Col lg={9} md={8}>
            <Card className="shadow-sm">
              {news?.image && (
                <div style={{ height: '500px', overflow: 'hidden' }}>
                  <Card.Img 
                    variant="top" 
                    src={`${baseURL}/uploads/${news.image}`} 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              )}
              <Card.Body>
                <Card.Title style={{ color: "brown" }} className="fw-bold">{news?.title || "Untitled"}</Card.Title>
                <p className="text-muted">
                  By: <span style={{ color: "brown" }}>Admin</span> | Posted on: {news?.date || "Unknown Date"}
                </p>
                <Card.Text>{news?.content}</Card.Text>
                <p>{news?.description}</p>
                <Button as={Link} to="/news" variant="secondary" className="mt-3">
                  ← Back To News
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Other News Sidebar */}
          <Col lg={3} md={4}>
            <Card className="shadow-sm">
              <Card.Header className="bg-white fw-bold">Other News</Card.Header>
              <Card.Body>
  {otherNews && otherNews.length > 0 ? (
    otherNews.map((item) => (
      <div key={item.id} className="d-flex mb-3">
        <img
          src={`${baseURL}/uploads/${item.image}`}
          alt="news"
          width="60"
          height="60"
          className="me-2 border rounded"
          style={{ objectFit: 'cover' }}
        />
        <span style={{ fontSize: '0.85rem' }}>
          {item.newstitle ? item.newstitle.substring(0, 50) : 'No Title'}
        </span>
      </div>
    ))
  ) : (
    <p>No other news available.</p>
  )}
          <Link className='text-danger' to={'/News'}>All News →</Link>

</Card.Body>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Newsdetails;
