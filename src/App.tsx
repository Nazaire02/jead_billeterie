import './App.css'
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   navigate('/accueil');
  // }, [])
  
  return (
    <div className='App d-flex flex-column min-vh-100 body'>
      <NavBar />
      <div className='flex-grow-1 main-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
