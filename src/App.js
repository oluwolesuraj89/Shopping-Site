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
import React,  { Component } from 'react'
import './index.css'
// import OnBoard from './onboarding';
import SignUp from './Components/SignUp';
import Userprofile from './UserProfile';
import { PassWordSuccessfull } from './Components/PassWordSuccessfull';
// import Profilecrtd from './Crtsuccess';
import Loginfin from './Loginsucces';
import Login from './Login';
import Profiledtls from './Profile';
import { LoginSuccessful } from './Components/LoginSuccessful';

function App() {
  // class App extends Component {
  //   render() {
  return (
    // <div className="App">
    <>
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path= '/Home' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Productdetails' element={<Productdetails/>}/>
        <Route path='/Choppingcart' element={<Choppingcart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Userprofile' element={<Userprofile/>}/>
        <Route path='/PassWordSuccessfull' element={<PassWordSuccessfull/>}/>
        <Route path='/LoginSuccessful' element={<LoginSuccessful/>}/>

      </Routes>
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </>
    
    // <div className="Landing-page">
    //   <header className="Landing-page-header">
        
    //   </header>
    // </div>
  );
// }
  }
export default App;
