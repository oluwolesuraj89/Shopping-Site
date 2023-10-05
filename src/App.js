// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Products from './Components/Products';
import Footer from './Components/Footer';
import { Productdetails } from './Components/Productdetails';
import { Choppingcart } from './Components/Choppingcart';
import Checkout  from './Components/Checkout';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Productdetails' element={<Productdetails/>}/>
        <Route path='/Choppingcart' element={<Choppingcart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
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
