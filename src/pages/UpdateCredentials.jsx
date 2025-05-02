import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UpdateCredentials({ show, onHide, adminInfo, setAdminInfo }) {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!newUsername.trim() || !newPassword.trim()) {
            setError('Both fields are required.');
            setSuccessMessage('');
            return;
        }

        const updatedAdmin = {
            username: newUsername,
            password: newPassword,
        };

        setAdminInfo(updatedAdmin);
        localStorage.setItem('adminInfo', JSON.stringify(updatedAdmin)); // Important: update in localStorage too!

        setSuccessMessage('Credentials updated successfully!');
        setError('');
        setNewUsername('');
        setNewPassword('');

        setTimeout(() => {
            onHide(); // Auto close modal after success
        }, 1000);
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Change Username and Password</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}
                {successMessage && <p className="text-success">{successMessage}</p>}

                <Form onSubmit={handleUpdate}>
                    <Form.Group className="mb-3">
                        <Form.Label>New Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter new username"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100">
                        Update
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateCredentials;
