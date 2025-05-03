import React, { useState } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBars, FaSignOutAlt, FaTachometerAlt, FaCircle } from 'react-icons/fa';
import UpdateCredentials from './UpdateCredentials'; // import modal
import Activitylog from './Activitylog';

function Admin({ adminInfo, setAdminInfo, setIsLoggedIn, children }) {
    const [showSidebar, setShowSidebar] = useState(true);
    const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Save activity log
        const activityLogs = JSON.parse(localStorage.getItem('activityLogs')) || [];
        activityLogs.push({
            action: 'Logout',
            user: adminInfo?.username,
            timestamp: new Date().toISOString(),
        });
        localStorage.setItem('activityLogs', JSON.stringify(activityLogs));

        setIsLoggedIn(false);
        navigate('/Login');
    };


    return (
        <div className="d-flex" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Sidebar */}
            {showSidebar && (
                <div style={{ width: '250px', backgroundColor: '#1e2a36', color: '#fff', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: '#3282b8', padding: '1rem', textAlign: 'center' }}>
                        <h5 className="mb-0 text-light">Admin Panel</h5>
                    </div>

                    <div style={{ backgroundColor: 'black', padding: '0.5rem', textAlign: 'center' }}>
                        <small className="text-light">St. Christina's Home</small>
                    </div>

                    <Nav className="flex-column p-2 mt-3">
                        <Nav.Link  className="text-white d-flex align-items-center mb-3">
                            <FaCircle className="me-2" /> <Link style={{textDecoration:"none",color:"white"}} to={'/ActivityLog'}>Dashboard</Link>
                        </Nav.Link>

                        <div>
                            <div
                                onClick={() => setNewsDropdownOpen(!newsDropdownOpen)}
                                style={{ cursor: 'pointer' }}
                                className="text-white d-flex align-items-center mb-2"
                            >
                                <FaCircle className="me-2" /> News Management
                                <span className="ms-auto">{newsDropdownOpen ? '▲' : '▼'}</span>
                            </div>

                            {newsDropdownOpen && (
                                <div className="ms-4">
                                    <Nav.Link href="" className="text-white small"><Link style={{textDecoration:"none",color:"white"}} to={'/Addnews'}>Add News</Link></Nav.Link>
                                    <Nav.Link href="" className="text-white small"><Link style={{textDecoration:"none",color:"white"}} to={'/Newslist'}>News List</Link></Nav.Link>
                                    <Nav.Link href="" className="text-white small"><Link style={{textDecoration:"none",color:"white"}} to={'/Message'}>Messages</Link></Nav.Link>
                                </div>
                            )}
                        </div>

                        <Nav.Link onClick={handleLogout} className="text-white d-flex align-items-center mt-3">
                            <FaSignOutAlt className="me-2" /> Logout
                        </Nav.Link>
                    </Nav>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-grow-1">
                <Navbar expand="lg" style={{ backgroundColor: '#3282b8' }} variant="dark" className="px-3">
                    <Navbar.Brand onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: 'pointer' }}>
                        <FaBars size={24} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center">
                                <div className="rounded-circle bg-secondary me-2 p-1">
                                    <FaUser className="text-dark" />
                                </div>
                                <span className="text-dark">{adminInfo?.username}</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setShowUpdateModal(true)}>Change Password</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Navbar>

                {/* Page Content */}
                <Container fluid className="p-4">
                    {children}
                </Container>

                {/* Update Credentials Modal */}
                <UpdateCredentials
                    show={showUpdateModal}
                    onHide={() => setShowUpdateModal(false)}
                    adminInfo={adminInfo}
                    setAdminInfo={setAdminInfo}
                />
            </div>
        </div>
    );
}

export default Admin;
