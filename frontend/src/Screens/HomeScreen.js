import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Product from '../Components/Product';
import { listProducts } from '../Actions/productActions';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import Paginate from '../Components/Paginate';
import ProductCarousel from '../Components/ProductCarousel';
import Meta from '../Components/Meta';

const HomeScreen = ({match}) => {
    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList;
    
    return (
        <>
            <Meta />
            {!keyword ? (<ProductCarousel /> ): (<Link to='/' className="btn btn-light">Go Back</Link>)}
            <h1>Latest Products</h1>
            {loading ? (
              <Loader />
              ) :  error ? (
              <Message variant='danger'>{error}</Message>
              ) : (
               <>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
                <Paginate 
                    page={page} 
                    pages={pages} 
                    keyword={keyword ? keyword : ''} 
                />
               </>
               )
             }         
        </>
    );
};

export default HomeScreen;
