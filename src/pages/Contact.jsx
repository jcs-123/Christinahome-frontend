import React, { useState } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messageAPI } from '../services/allapi';

function Contact() {
    const [message, setMessage] = useState({
        name: "",
        mobile: "",
        messages: "", // Correct spelling here
        email: ""
    });

    const handleAdd = async (e) => {
        e.preventDefault(); // prevent page reload
        const { name, mobile, email, messages } = message;
        if (!name || !messages || !mobile || !email) {
            toast.info('Please Fill The Form');
        } else {
            const result = await messageAPI(message);
            if (result.status >= 200 && result.status <= 300) {
                toast.success('Message Sent Successfully');
                setMessage({
                    name: "",
                    mobile: "",
                    messages: "",
                    email: ""
                });
            } else {
                toast.error('Something went wrong');
            }
        }
    };

    return (
        <div>
            <Container fluid className="pt-4 border-bottom">
                <Row className="align-items-center justify-content-between">
                    <Col xs={12} md="auto">
                        <h2 style={{ color: 'black' }} className="fw-normal mb-2">Contact</h2>
                    </Col>
                    <Col xs={12} md="auto" className="text-md-end text-start">
                        <small className="text-muted">
                            You are here:&nbsp;
                            <Breadcrumb className="d-inline-block mb-0">
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active className="text-danger">
                                    Contact
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </small>
                    </Col>
                </Row>
                <hr className="mt-2 mb-0" />
            </Container>

            <Container className="my-5">
                <Row>
                    {/* Contact Form */}
                    <Col md={8}>
                        <h4 className="fw-bold" style={{ color: "black" }}>Get in touch</h4>
                        <p>We would love to hear from you.</p>
                        <Form onSubmit={handleAdd}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={message.name}
                                    onChange={(e) => setMessage({ ...message, name: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={message.email}
                                    onChange={(e) => setMessage({ ...message, email: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhone" className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your contact number"
                                    value={message.mobile}
                                    onChange={(e) => setMessage({ ...message, mobile: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Type your message here"
                                    value={message.messages}
                                    onChange={(e) => setMessage({ ...message, messages: e.target.value })}
                                />
                            </Form.Group>

                            <button type="submit" className='p-2 rounded' style={{ backgroundColor: "brown", color: "white" }}>
                                Send message
                            </button>
                        </Form>
                    </Col>

                    {/* Contact Info */}
                    <Col md={4} className="mt-5 mt-md-0">
                        <div className="bg-light p-3 mb-3">
                            <h6 className="fw-bold" style={{ color: "black" }}>Postal Address</h6>
                            <p className="mb-0">St. Christina's Home</p>
                            <p className="mb-0">P.O. Pullazhy</p>
                            <p className="mb-0">Thrissur, Kerala</p>
                            <p className="mb-0">India. PIN-680012</p>
                        </div>

                        <div className="bg-light p-3">
                            <h6 className="fw-bold" style={{ color: "black" }}>All Enquiries</h6>
                            <p className="mb-1">
                                <FaPhone style={{ color: "brown" }} className="me-2" /> Tel: 0487-2360244
                            </p>
                            <p className="mb-0">
                                <FaEnvelope style={{ color: "brown" }} className="me-2" />
                                <a style={{ textDecoration: "none", color: "brown" }} href="mailto:holyangelf@yahoo.com">
                                    holyangelf@yahoo.com
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Toast notifications */}
            <ToastContainer position="top-center" autoClose={2000} theme="light" />
        </div>
    )
}

export default Contact;
