import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const ProductList = ({
  selectedLanguage,
  product,
  toggleProductBoughtStatus,
}) => {
  return (
    <section className="product__card">
      <div className="product__card-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product__card-body">
        <h3>{product.name}</h3>
        <p>
          <span className="description_head">
            <em>Price</em> : &nbsp;
          </span>
          <span className="card__price">{product.price}</span>
        </p>
        <p>
          <span className="description_head">
            <em>Short description</em>
          </span>
          <br />
          {product.shortDescription}
        </p>
        <p className="card__description">
          <span className="description_head">
            <em>Description</em>
          </span>
          <br />
          {product.description}
        </p>
        <p>
          <span className="description_head">
            <em>Category</em> :&nbsp;
          </span>
          {product.category}
        </p>
      </div>
      <button
        className="product__btn"
        onClick={() => toggleProductBoughtStatus(product)}
      >
        {product.isBought
          ? selectedLanguage.removeCartButton
          : selectedLanguage.addCartButton}
      </button>
      <button className="show_product__btn" onClick={() => {}}>
        <Link to={`/product/${product.id}`}> Show product</Link>
      </button>
    </section>
  );
};

export default ProductList;
