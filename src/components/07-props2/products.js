import React from "react";
import ProductCard from './product-card';

const Products = () => {
  return (
    <div>
      <ProductCard>
        <h1>Sony Display</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
          maiores laudantium harum in laboriosam quo tempora cumque
          reprehenderit, quis porro debitis iusto, ipsum accusamus magni
          voluptatibus iure sit ducimus? Beatae.
        </p>  
      </ProductCard>

      <ProductCard>
        <h1>Intel Processor</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
          maiores laudantium harum in laboriosam quo tempora cumque
          reprehenderit, quis porro debitis iusto, ipsum accusamus magni
          voluptatibus iure sit ducimus? Beatae.
        </p>
      </ProductCard>

    </div>
  );
};

export default Products;
