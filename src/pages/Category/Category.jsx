import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Filters, ProductList } from "../../components";
import getProductsForCategory from "../../productList";
import "./Category.css";
import language from "../../language";

const Category = () => {
  const { categoryId } = useParams();
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(language.english);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);
  const [totalBoughtProducts, setTotalBoughtProducts] = useState(0);

  useEffect(() => {
    setFilteredCategory(getProductsForCategory(parseInt(categoryId)));
  }, [categoryId]);

  const resetus = (e) => {
    e.preventDefault();
    setFilteredCategory(getProductsForCategory(parseInt(categoryId)));
    setCategoryFilter("");
    setNameFilter("");
    setPriceFilter(0);
  };

  const byCategory = [" "];
  filteredCategory.filter((product) => {
    return !byCategory.includes(product.category)
      ? byCategory.push(product.category)
      : "";
  });

  const handleCategory = (e) => {
    const filteredByCategory = filteredCategory.filter((item) => {
      return (
        item.category.toLowerCase().includes(e) &&
        item.name.toLowerCase().includes(nameFilter) &&
        parseInt(item.price.substring(1)) > priceFilter
      );
    });
    setFilteredCategory(filteredByCategory);
    setCategoryFilter(e);
  };

  const handleName = (e) => {
    const filteredByName = filteredCategory.filter((item) => {
      return (
        item.name.toLowerCase().includes(e) &&
        item.category.toLowerCase().includes(categoryFilter) &&
        parseInt(item.price.substring(1)) > priceFilter
      );
    });
    setFilteredCategory(filteredByName);
    setNameFilter(e);
  };

  const handleMinPrice = (e) => {
    const filteredByMinPrice = filteredCategory.filter((item) => {
      return (
        parseInt(item.price.substring(1)) > e &&
        item.name.toLowerCase().includes(nameFilter) &&
        item.category.toLowerCase().includes(categoryFilter)
      );
    });
    setFilteredCategory(filteredByMinPrice);
    setPriceFilter(e);
  };

  const toggleProductBoughtStatus = (product) => {
    if (product.isBought === true) {
      product.isBought = false;
      setTotalBoughtProducts(totalBoughtProducts - 1);
    } else {
      product.isBought = true;
      setTotalBoughtProducts(totalBoughtProducts + 1);
    }
    setFilteredCategory([...filteredCategory]);
  };

  const toggleLanguage = (otherLanguage) => {
    setSelectedLanguage(otherLanguage);
  };

  return (
    <>
      <Filters
        selectedLanguage={selectedLanguage}
        resetus={resetus}
        handleCategory={handleCategory}
        handleName={handleName}
        handleMinPrice={handleMinPrice}
        byCategory={byCategory}
        categoryFilter={categoryFilter}
        nameFilter={nameFilter}
        priceFilter={priceFilter}
        totalBoughtProducts={totalBoughtProducts}
        toggleLanguage={toggleLanguage}
      />
      <div className="show__products">
        {filteredCategory.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            selectedLanguage={selectedLanguage}
            toggleProductBoughtStatus={toggleProductBoughtStatus}
          />
        ))}
      </div>
    </>
  );
};

export default Category;
