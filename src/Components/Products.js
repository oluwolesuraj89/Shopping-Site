import React, {useState, useEffect} from 'react';
import fruit1 from '../Images/fruit1.png';
import fruit2 from '../Images/fruit2.png';
import fruit3 from '../Images/fruit3.png';
import { Mininavtwo } from '../ChoppingCartComponents/Mininavtwo';
// import stars from '../Emogies/stars.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export const Products = () => {

  // const [currentPage, setCurrentPage] = useState(1);

  // const handlePageClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);

  // useEffect(() =>{

  // })
  // const [products, setProducts] = useState(Products.slice(0, 20))
  // const [pageNumber, setPageNumber] = useState(0);

  // const productsPerPage = 9;
  // const pagesVisited = pageNumber * productsPerPage;

  // const displayProducts = products
  // .slice(pagesVisited, pagesVisited + productsPerPage)
  // .map(products) =>{

  // })


  const navigate = useNavigate();

  const Home = () =>{
      navigate('/')
  } 
  
  return (
    
    <div className='body'>
        <div className='main products'>
          {/* <div className="products">
        {Array.from({ length: 7 }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            className={i + 1 === currentPage ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
          </div> */}
        </div>
    </div>
  )
}
export default Products