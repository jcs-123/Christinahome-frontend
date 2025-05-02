import React, { useEffect, useState } from 'react';
import { Container, Table, Card, Breadcrumb, Button } from 'react-bootstrap';
import { getmessage, removedataapi } from '../services/allapi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Messages() {
    const [data, setData] = useState([]);

    const getdataform = async () => {
        const result = await getmessage();
        setData(result.data);
    };

    useEffect(() => {
        getdataform();
    }, []);

    const handleDelete = async (_id) => {
        try {
            await removedataapi(_id);
            toast.success('Data deleted');
            getdataform(); // reload after delete
        } catch (error) {
            console.error("Error deleting data:", error.response?.data || error.message);
            toast.error('Failed to delete data');
        }
    };

    return (
        <div>
            <Container fluid className="bg-light min-vh-100 p-4">
                <Card className="shadow-sm">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="mb-0">Contact <span className="text-muted">Messages</span></h2>
                            <Breadcrumb className='m-0'>
                                <Breadcrumb.Item style={{ textDecoration: "none", color: "black" }} href="#"><Link to={'/ActivityLog'}>Home</Link></Breadcrumb.Item>
                                <Breadcrumb.Item active style={{ color: "black" }}> Messages</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <Table striped bordered hover responsive>
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.length > 0 ? (
                                    data.map((msg, index) => (
                                        <tr key={msg._id}>
                                            <td>{index + 1}</td>
                                            <td>{msg.name}</td>
                                            <td>{msg.email}</td>
                                            <td>{msg.messages}</td>
                                            <td>{msg.mobile}</td>
                                            <td>
                                                <Button onClick={() => handleDelete(msg._id)} variant="danger" size="sm">
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No messages found</td>
                                    </tr>
                                )}
                            </tbody>

                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Messages;
