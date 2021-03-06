import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Product from '../Components/Product';
import { listProducts } from '../Actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList);
   
    const { loading, error, products } = productList;
    console.log(products);

    // const products = []
    const items = [...products];
    console.log('items :', items);
    return (
        <>
            <h1>Latest Products</h1>
            {/* {loading ? (<h2>Loading</h2>) :
             error ? (<h3>{error}</h3>) :
              (<Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
               </Row>)
             }          */}
        </>
    );
};

export default HomeScreen;
