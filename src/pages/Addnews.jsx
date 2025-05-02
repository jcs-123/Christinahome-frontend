import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Breadcrumb } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { addnewsapi } from '../services/allapi';
import { addResponseContext } from '../context/Contextshare';
import { Link } from 'react-router-dom';

function Addnews() {
    const { setAddResponse } = useContext(addResponseContext);

    const [addnews, setAddnews] = useState({
        newstype: "",
        newstitle: "",
        description: "",
        date: "",
        status: "",
        image: ""
    });

    const handleAdd = async () => {
        const { newstype, newstitle, description, date, status, image } = addnews;

        if (!newstitle || !newstype || !description || !date || !status || (newstype !== "Flash" && !image)) {
            toast.info(`Please fill the form completely`);
        } else {
            try {
                const reqBody = new FormData();
                reqBody.append("newstype", newstype);
                reqBody.append("newstitle", newstitle);
                reqBody.append("description", description);
                reqBody.append("date", date);
                reqBody.append("status", status);
                if (newstype !== "Flash") {
                    reqBody.append("image", image);
                }

                const result = await addnewsapi(reqBody);
                console.log("Result of addnewsapi:", result);

                if (result.status === 200) {
                    toast.success(`News added successfully`);
                    setAddnews({
                        newstype: "",
                        newstitle: "",
                        description: "",
                        date: "",
                        status: "",
                        image: ""
                    });
                    setAddResponse(result.data);
                } else if (result.status === 406) {
                    toast.error(result.data);
                } else {
                    toast.error(`Something went wrong`);
                }
            } catch (error) {
                console.error(error);
                toast.error("Server Error: " + error.message);
            }
        }
    };

    return (
        <Container fluid className="bg-light min-vh-100 p-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <h2 className="mb-2">Add <span className="text-muted">News</span></h2>

                    <Breadcrumb className="d-flex justify-content-end">
                        <Breadcrumb.Item href="#"><Link to={'/ActivityLog'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item href="#">General Settings</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">News Management</Breadcrumb.Item>
                        <Breadcrumb.Item active>Add News</Breadcrumb.Item>
                    </Breadcrumb>

                    <Form className="mt-4">
                        <Row className="g-4">
                            <Col md={6}>
                                <Form.Group controlId="newsType">
                                    <Form.Label>News Type <span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        value={addnews.newstype}
                                        onChange={(e) => {
                                            const newstype = e.target.value;
                                            setAddnews(prev => ({
                                                ...prev,
                                                newstype,
                                                image: newstype === "Flash" ? "" : prev.image
                                            }));
                                        }}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Image">Image</option>
                                        <option value="Flash">Flash</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="newsTitle">
                                    <Form.Label>News Title <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        value={addnews.newstitle}
                                        onChange={(e) => setAddnews({ ...addnews, newstitle: e.target.value })}
                                        type="text"
                                        placeholder="Enter title of news"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="newsDescription">
                                    <Form.Label>News Description</Form.Label>
                                    <Form.Control
                                        value={addnews.description}
                                        onChange={(e) => setAddnews({ ...addnews, description: e.target.value })}
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter News Description"
                                    />
                                </Form.Group>
                            </Col>

                            {addnews.newstype !== "Flash" && (
                                <Col md={6}>
                                    <Form.Group controlId="newsImage">
                                        <Form.Label>News Image <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                        value={addnews.image}
                                            type="file"
                                            onChange={(e) => setAddnews({ ...addnews, image: e.target.files[0] })}
                                        />
                                    </Form.Group>
                                </Col>
                            )}

                            <Col md={6}>
                                <Form.Group controlId="publishedDate">
                                    <Form.Label>Published Date <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        value={addnews.date}
                                        onChange={(e) => setAddnews({ ...addnews, date: e.target.value })}
                                        type="date"
                                    />
                                    <Form.Text className="text-muted">
                                        Date in dd/mm/yyyy format
                                    </Form.Text>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="status">
                                    <Form.Label>Status</Form.Label>
                                    <div className="d-flex">
                                        <Form.Check
                                            inline
                                            label="Published"
                                            name="status"
                                            type="radio"
                                            id="published"
                                            value="Published"
                                            checked={addnews.status === "Published"}
                                            onChange={(e) => setAddnews({ ...addnews, status: e.target.value })}
                                            className="me-3"
                                        />
                                        <Form.Check
                                            inline
                                            label="Pending"
                                            name="status"
                                            type="radio"
                                            id="pending"
                                            value="Pending"
                                            checked={addnews.status === "Pending"}
                                            onChange={(e) => setAddnews({ ...addnews, status: e.target.value })}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <ToastContainer position="top-center" autoClose={2000} theme="light" />

                        <div className="mt-4 text-center">
                            <Button variant="primary" type="button" onClick={handleAdd}>
                                Submit
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Addnews;
