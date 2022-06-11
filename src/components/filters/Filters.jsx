import React from "react";
import language from "../../language";

import "./Filters.css";

const Filters = ({
  selectedLanguage,
  resetus,
  handleCategory,
  handleName,
  handleMinPrice,
  byCategory,
  nameFilter,
  categoryFilter,
  priceFilter,
  totalBoughtProducts,
  toggleLanguage,
}) => {
  return (
    <section className="show__products-filter">
      <input
        type="text"
        placeholder={selectedLanguage.filterPlaceHolder}
        onChange={(e) => handleName(e.target.value.toLowerCase())}
        value={nameFilter}
      />
      <select
        onChange={(e) => handleCategory(e.target.value.toLowerCase())}
        value={categoryFilter}
      >
        {byCategory.length
          ? byCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          : null}
      </select>
      <input
        type="number"
        placeholder="Price under"
        onChange={(e) => handleMinPrice(e.target.value)}
        value={priceFilter}
      />
      <div className="cart__items">
        {selectedLanguage.totalBoughtItems} <span>({totalBoughtProducts})</span>
      </div>

      <button
        className="language__btn"
        onClick={() => toggleLanguage(language.english)}
      >
        <i className="flag flag-us"></i>
      </button>

      <button
        className="language__btn"
        onClick={() => toggleLanguage(language.romanian)}
      >
        <i className="flag flag-ro"></i>
      </button>

      <div>
        <button className="theBtn" onClick={resetus}>
          {selectedLanguage.resetFiltersButton}
        </button>
      </div>
    </section>
  );
};

export default Filters;
