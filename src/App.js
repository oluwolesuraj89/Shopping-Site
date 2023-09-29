// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Products' element={<Products/>}/>
      </Routes>
      <Footer />
    </>
    // <div className="Landing-page">
    //   <header className="Landing-page-header">
        
    //   </header>
    // </div>
  );
}

export default App;
