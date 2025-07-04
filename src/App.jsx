import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Christinahome from './pages/Christinahome';
import News from './pages/News';
import Holyangel from './pages/Holyangel';
import Childline from './pages/Childline';
import Contact from './pages/Contact';
import Supportus from './pages/Supportus';
import Gallery from './pages/Gallery';
import Newsdetilas from './pages/Newsdetilas';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import Newslist from './pages/Newslist';
import Addnews from './pages/Addnews';
import Messages from './pages/Messages';
import Activitylog from './pages/Activitylog';
import Newsdetails from './pages/Newsdetilas';

function App() {
  const [adminInfo, setAdminInfo] = useState(() => {
    const storedAdmin = localStorage.getItem('adminInfo');
    return storedAdmin ? JSON.parse(storedAdmin) : { username: 'admin', password: 'admin123' };
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    return storedLogin === 'true';
  });

  useEffect(() => {
    localStorage.setItem('adminInfo', JSON.stringify(adminInfo));
  }, [adminInfo]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const location = useLocation();
  const noHeaderFooterRoutes = ['/Admin', '/Login','/Newslist','/Addnews','/Message','/ActivityLog'];

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Christinahome' element={<Christinahome />} />
        <Route path='/Holyangels' element={<Holyangel />} />
        <Route path='/Childline' element={<Childline />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Supportus' element={<Supportus />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/News' element={<News />} />
        <Route path="/newsdetail/:id" element={<Newsdetails />} />      
          <Route path="/ActivityLog" element={<Admin adminInfo={adminInfo} setAdminInfo={setAdminInfo} setIsLoggedIn={setIsLoggedIn}><Activitylog /></Admin>} />

        <Route 
          path="/Admin" 
          element={isLoggedIn ? (
            <Admin adminInfo={adminInfo} setAdminInfo={setAdminInfo} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Navigate to="/Login" replace />
          )}
        />

        <Route 
          path="/Login" 
          element={<Login adminInfo={adminInfo} setIsLoggedIn={setIsLoggedIn} />} 
        />

<Route path="/Addnews" element={isLoggedIn ? (
  <Admin adminInfo={adminInfo} setAdminInfo={setAdminInfo} setIsLoggedIn={setIsLoggedIn}>
    <Addnews/> {/* News List page content */}
  </Admin>
) : (
  <Navigate to="/Login" replace />
)} />





<Route path="/Message" element={isLoggedIn ? (
  <Admin adminInfo={adminInfo} setAdminInfo={setAdminInfo} setIsLoggedIn={setIsLoggedIn}>
    <Messages/> {/* News List page content */}
  </Admin>
) : (
  <Navigate to="/Login" replace />
)} />

<Route path="/Newslist" element={isLoggedIn ? (
  <Admin adminInfo={adminInfo} setAdminInfo={setAdminInfo} setIsLoggedIn={setIsLoggedIn}>
    <Newslist /> {/* News List page content */}
  </Admin>
) : (
  <Navigate to="/Login" replace />
)} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
