import React from 'react';
import fruit1 from '../Images/fruit1.png';
import fruit2 from '../Images/fruit2.png';
import fruit3 from '../Images/fruit3.png';
import stars from '../Emogies/stars.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import ReactPaginate from 'react-paginate';

const Products = () => {
  // const [products, setProducts] = useState(Products.slice(0, 9))
  // const [pageNumber, setPageNumber] = useState(0)

  // const productsPerPage = 9;
  // const pagesVisited = pageNumber * productsPage

  // const displayProduct 

  const navigate = useNavigate();

  const Home = () =>{
      navigate('/')
  } 
  
  return (
    <div className='body'>
        <div className='main products'>
          <div className='option-btns'>
            <button onClick={Home}>Home</button>
            <span>/</span>
            <button>Fruits</button>
          </div>
          <div className='section'>
            <div className='container'>
              <h3>Food stuff</h3>
              <div className='side-nav'>
                <div className='search'>
                    <button><i className='bx bx-search' style={{fontSize:'20px', color:'#667185',}}></i></button>
                    <input type='search' placeholder='search items..'/>
                </div>
                <button className='arccordian'>Fruits <i className='bx bx-plus' style={{fontSize:'15px', color:'#667185',}}></i></button>
                <button className='arccordian'>Vegitables <i className='bx bx-plus' style={{fontSize:'15px', color:'#667185',}}></i></button>
                <button className='arccordian'>Grains <i className='bx bx-plus' style={{fontSize:'15px', color:'#667185',}}></i></button>
                <button className='arccordian'>Cassava <i className='bx bx-plus' style={{fontSize:'15px', color:'#667185',}}></i></button>
              </div>
            </div>
            <div className='fruits'>
              <h1>Fruits</h1>
              <p>Showing 1- 15 of 200 results</p>
              <div className='fruit-grid'>
                <div className='img1'>
                  <img src={fruit1} alt='fruits'/>
                  <div>
                  <h4>Vegitable</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                  </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit2} alt='fruits'/>
                  <div>
                  <h4>Court Heels</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit3} alt='fruits'/>
                  <div>
                  <h4>Court Heels</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit1} alt='fruits'/>
                  <div>
                  <h4>Vegitable</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit2} alt='fruits'/>
                  <div>
                  <h4>Court Heels</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit3} alt='fruits'/>
                  <div>
                  <h4>Court Heels</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit1} alt='fruits'/>
                  <div>
                  <h4>Vegitable</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit2} alt='fruits'/>
                  <div>
                  <h4>Court Heels</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
                <div className='img1'>
                  <img src={fruit3} alt='fruits'/>
                  <div>
                  <h4>Court Heels</h4>
                  </div>
                  <h4><small>$</small>95<small>.00</small></h4>
                  <p>Red Silettos</p>
                  <span className='star-details'>
                    <div id='solid-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    (91)
                    </span>
                  <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                </div>
              </div>
              <div className='pagnations'>

              </div>
            </div>
          </div>
                {/* Footer */}
        </div>
    </div>
  )
}
export default Products