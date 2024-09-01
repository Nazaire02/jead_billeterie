import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() { 
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
