import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../../components";
import { allProducts } from "../../productList";

const Product = () => {
  console.log(allProducts);
  const { productId } = useParams();
  const product = allProducts.find((item) => item.id === productId);
  console.log(product);
  return (
    <div>
      <h1 style={{ color: "red" }}> Work in progress...</h1>
      {/* <ProductList product={product} toggleProductBoughtStatus={product} /> */}
      <h1>{product.name}</h1>
      <div>{product.description}</div>
    </div>
  );
};

export default Product;
