import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Login({ adminInfo, setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Developer fixed credentials
    const developerAccount = {
        username: 'devuser',
        password: 'devpass123'
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if either adminInfo or developerAccount matches
        if (
            (username === adminInfo.username && password === adminInfo.password) ||
            (username === developerAccount.username && password === developerAccount.password)
        ) {
            setIsLoggedIn(true);
            navigate('/ActivityLog');

            // Save activity log
            const activityLogs = JSON.parse(localStorage.getItem('activityLogs')) || [];
            activityLogs.push({
                action: 'Login',
                user: username,
                timestamp: new Date().toISOString(),
            });
            localStorage.setItem('activityLogs', JSON.stringify(activityLogs));
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div  className="login-bg d-flex justify-content-center align-items-center min-vh-100">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={4}>
                        <div className="text-center">
                            <img src={logo} alt="Logo" className="mb-3 login-logo" />
                        </div>
                        <Card className="text-center login-card shadow-lg p-4">
                            <Card.Body>
                                <h5 className="mb-3 fw-bold text-dark">
                                    Admin Panel - St. Christina's Home
                                </h5>

                                <Form onSubmit={handleLogin}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    {error && <p className="text-danger">{error}</p>}
                                    <Button type="submit" variant="primary" className="w-100">
                                        Sign In
                                    </Button>
                                </Form>

                                <p className="mt-3 text-muted small">
                                    Designed & Developed by <strong>TBI@JEC, Jyothi Engineering College</strong>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
