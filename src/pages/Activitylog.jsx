import React, { useEffect, useState } from 'react';
import { Table, Container, Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ActivityLog() {
  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [filters, setFilters] = useState({
    user: '',
    action: '',
    fromDate: '',
    toDate: '',
  });

  const [uniqueUsers, setUniqueUsers] = useState([]);
  const [uniqueActions, setUniqueActions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem('activityLogs')) || [];
    const validLogs = savedLogs.filter(log => log.timestamp && !isNaN(new Date(log.timestamp)));
    const sortedLogs = validLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setLogs(sortedLogs.slice(0, 5));
    setFilteredLogs(sortedLogs);

    // Get unique users and actions
    const users = [...new Set(sortedLogs.map(log => log.user))];
    const actions = [...new Set(sortedLogs.map(log => log.action))];
    setUniqueUsers(users);
    setUniqueActions(actions);
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();
  };

  const handleSearch = () => {
    let filtered = logs;

    if (filters.user) {
      filtered = filtered.filter(log => log.user === filters.user);
    }

    if (filters.action) {
      filtered = filtered.filter(log => log.action === filters.action);
    }

    if (filters.fromDate) {
      const from = new Date(filters.fromDate);
      filtered = filtered.filter(log => new Date(log.timestamp) >= from);
    }

    if (filters.toDate) {
      const to = new Date(filters.toDate);
      filtered = filtered.filter(log => new Date(log.timestamp) <= to);
    }

    setFilteredLogs(filtered);
  };

  const handleClearFilters = () => {
    setFilters({
      user: '',
      action: '',
      fromDate: '',
      toDate: '',
    });
    setFilteredLogs(logs);
  };

  return (
    <Container className="mt-4">
      <h3>Activity Log</h3>

      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>User</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{log.action}</td>
                <td>{log.user}</td>
                <td>{formatTimestamp(log.timestamp)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No activities found.</td>
            </tr>
          )}
        </tbody>
      </Table>

      <div className="text-center mt-3">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          View All Activities
        </Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>All Activity Logs</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* Filter Section */}
          <Row className="mb-4">
            <Col md={3}>
              <Form.Group controlId="userFilter">
                <Form.Label>User Name</Form.Label>
                <Form.Select
                  value={filters.user}
                  onChange={(e) => setFilters({ ...filters, user: e.target.value })}
                >
                  <option value="">All Users</option>
                  {uniqueUsers.map((user, idx) => (
                    <option key={idx} value={user}>{user}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="actionFilter">
                <Form.Label>Operation</Form.Label>
                <Form.Select
                  value={filters.action}
                  onChange={(e) => setFilters({ ...filters, action: e.target.value })}
                >
                  <option value="">All Actions</option>
                  {uniqueActions.map((action, idx) => (
                    <option key={idx} value={action}>{action}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group controlId="fromDateFilter">
                <Form.Label>From Date</Form.Label>
                <Form.Control
                  type="date"
                  value={filters.fromDate}
                  onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group controlId="toDateFilter">
                <Form.Label>To Date</Form.Label>
                <Form.Control
                  type="date"
                  value={filters.toDate}
                  onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
                />
              </Form.Group>
            </Col>

            <Col md={2} className="d-flex align-items-end">
              <div className="w-100">
                <Button variant="primary" onClick={handleSearch} className="w-100 mb-2">
                  Search
                </Button>
                <Button variant="secondary" onClick={handleClearFilters} className="w-100">
                  Clear
                </Button>
              </div>
            </Col>
          </Row>

          {/* Logs Table */}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Action</th>
                <th>User</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{log.action}</td>
                    <td>{log.user}</td>
                    <td>{formatTimestamp(log.timestamp)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">No activities found.</td>
                </tr>
              )}
            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ActivityLog;
