import React from 'react'
import Product from './product'
import products from "./products.json";
import { Col, Container, Row } from 'react-bootstrap';

const ProductList = () => {
  return (
    <Container>
      <Row className='g-5 mt-5'>
        {products.map((product)=>(
          <Col key={product.id} md={6} lg={4} xl={3}>
        <Product {...product}/>
        </Col>
        ))}
        
      </Row>
    </Container>
    
  )
}

export default ProductList