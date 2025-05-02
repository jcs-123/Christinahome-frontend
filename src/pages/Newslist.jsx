import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Breadcrumb, Card, Table, Pagination, Modal } from 'react-bootstrap';
import {  removedataapi, updatenewsAPI } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Newslist() {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [removeStatus, setRemoveStatus] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [editNews, setEditNews] = useState(null);
  const itemsPerPage = 5;

  const [publishedDate, setPublishedDate] = useState('');
  const [status, setStatus] = useState('');
  const [newsType, setNewsType] = useState('');

  // Fetch all news
  // const getAllNews = async () => {
  //   const reqHeader = { "Content-Type": "application/json" };
  //   try {
  //     const result = await getAllnewsAPI(reqHeader);
  //     setAllNews(result.data);
  //     setFilteredNews(result.data);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };

  const getAllNews = async () => {
    const reqHeader = { "Content-Type": "application/json" };
    try {
      const result = await axios.get('https://christinahome-backend.onrender.com/all-news', { headers: reqHeader });
      setAllNews(result.data);
      setFilteredNews(result.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };


  

  useEffect(() => {
    getAllNews();
  }, [removeStatus]);

  // Open Edit Modal
  const handleEdit = (news) => {
    setEditNews(news);
    setShowEditModal(true);
  };

  // Handle Edit form field changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditNews(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Save Edited News
  const handleSaveEdit = async () => {
    const reqHeader = { "Content-Type": "application/json" };
    try {
      const result = await updatenewsAPI(editNews._id, editNews, reqHeader);
      if (result.status === 200) {
        toast.success('✏️ News Updated Successfully');
        setShowEditModal(false);
        setRemoveStatus(result);
      } else {
        toast.error('⚠️ Failed to update news');
      }
    } catch (error) {
      console.error('Error updating news:', error);
      toast.error('⚠️ Something Went Wrong');
    }
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = allNews;

    if (publishedDate) {
      filtered = filtered.filter(news => news.date === publishedDate);
    }
    if (status) {
      filtered = filtered.filter(news => news.status.toLowerCase() === status.toLowerCase());
    }
    if (newsType) {
      filtered = filtered.filter(news => news.newstype.toLowerCase() === newsType.toLowerCase());
    }

    setFilteredNews(filtered);
    setCurrentPage(1);
  };

  // Handle clear
  const handleClear = () => {
    setPublishedDate('');
    setStatus('');
    setNewsType('');
    setFilteredNews(allNews);
    setCurrentPage(1);
  };

  return (
    <div>
      <Container fluid className="bg-light min-vh-100 p-4">
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="mb-2">News <span className="text-muted">List</span></h2>

            <Breadcrumb className="d-flex justify-content-end">
              <Breadcrumb.Item href="#"><Link to={'/ActivityLog'}>Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item href="#">General Settings</Breadcrumb.Item>
              <Breadcrumb.Item href="#">News Management</Breadcrumb.Item>
              <Breadcrumb.Item active>News List</Breadcrumb.Item>
            </Breadcrumb>

            {/* Search Form */}
            <Form className="mt-4" onSubmit={handleSearch}>
              <Row className="g-3">
                <Col md={4}>
                  <Form.Group controlId="publishedDate">
                    <Form.Label>Published Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={publishedDate}
                      onChange={(e) => setPublishedDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">-- Select Status --</option>
                      <option value="Published">Published</option>
                      <option value="Pending">Pending</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group controlId="newsType">
                    <Form.Label>News Type</Form.Label>
                    <Form.Select
                      value={newsType}
                      onChange={(e) => setNewsType(e.target.value)}
                    >
                      <option value="">-- Select Type --</option>
                      <option value="Image">Image</option>
                      <option value="Flash">Flash</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <div className="mt-4 d-flex gap-2">
                <Button variant="primary" type="submit">
                  Search
                </Button>
                <Button variant="danger" type="button" onClick={handleClear}>
                  Clear
                </Button>
              </div>
            </Form>

            {/* News Table */}
            <div className="table-responsive mt-5">
              <Table bordered hover>
                <thead className="table-dark">
                  <tr>
                    <th>Sl No</th>
                    <th>News Title</th>
                    <th>Type</th>
                    <th>Published Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <tr key={item._id}>
                        <td>{indexOfFirstItem + index + 1}</td>
                        <td>{item.newstitle}</td>
                        <td>{item.newstype}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>
                          <Button
                            className="ms-2 mt-1"
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </Button>
                          
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">No news found.</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center">
              <Pagination>
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>

          </Card.Body>
        </Card>
      </Container>

      {/* Toast Notification */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editNews && (
            <Form>
              <Form.Group className="mb-3" controlId="editTitle">
                <Form.Label>News Title</Form.Label>
                <Form.Control
                  type="text"
                  name="newstitle"
                  value={editNews.newstitle}
                  onChange={handleEditChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="editType">
                <Form.Label>News Type</Form.Label>
                <Form.Select
                  name="newstype"
                  value={editNews.newstype}
                  onChange={handleEditChange}
                >
                  <option value="Image">Image</option>
                  <option value="Flash">Flash</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="editDate">
                <Form.Label>Published Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={editNews.date}
                  onChange={handleEditChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="editStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={editNews.status}
                  onChange={handleEditChange}
                >
                  <option value="Published">Published</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Newslist;
