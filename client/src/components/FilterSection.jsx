import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { TiTick } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    changePrice,
    priceChange,
  } = useFilterContext();

  //* TO GET UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, property) => {
    let newData = data.map((curElem) => {
      return curElem[property];
    });
    // console.log("🚀 ~ newData ~ curElem:", newData);

    if (property === "colors") {
      // newData = ["all", ...new Set([].concat(...newData))];
      //~to merge colors array;
      newData = newData.flat();
    }

    //! using sets to get unique data
    newData = ["all", ...new Set(newData)];
    // console.log("🚀 ~ getUniqueData ~ newData:", newData);

    return newData;
  };

  //* CATEGORY Unique Data
  const categoryData = getUniqueData(all_products, "category");

  //* COMPANY Unique Data
  const companyData = getUniqueData(all_products, "company");

  //* COLORS Unique Data
  const colorsData = getUniqueData(all_products, "colors");

  // const [priceChange, setPriceChange] = useState(false);

  // const changePrice = (e) => {
  //   const value = e.target.checked;
  //   value ? setPriceChange(value) : setPriceChange(false);
  //   console.log(value);
  // };
  // console.log(priceChange);

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="SEARCH"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>

        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                name="category"
                type="button"
                value={curElem}
                onClick={updateFilterValue}
                className={category === curElem ? "active" : null}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} name="company" value={curElem}>
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  className={
                    curColor === color
                      ? "color-all--style color-all--active"
                      : "color-all--style"
                  }
                  name="color"
                  value={curColor}
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                style={{ backgroundColor: curColor }}
                className={curColor === color ? "btnStyle active" : "btnStyle"}
                name="color"
                value={curColor}
                onClick={updateFilterValue}
              >
                {color === curColor ? (
                  curColor === "all" ? null : (
                    <FaCheck className="checkStyle" />
                  )
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <div className="price-display--style">
          <h3>Price</h3>
          <input
            type="checkbox"
            name="forPrice"
            value={true}
            onClick={changePrice}
          />
        </div>

        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
          // onChange={priceChange ? updateFilterValue : null}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    margin-right: 0.8rem;
  }

  .color-all--active {
    border-bottom: 1px solid #000;
    color: ${({ theme }) => theme.colors.btn};
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    // margin-right: 0.8rem;
    // margin-bottom: 0.8rem;
    margin: 0.4rem 0.8rem 0.4rem 0;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1.2rem;
    color: #fff;
  }

  .filter_price {
    .price-display--style {
      padding: 2rem 0;
      display: flex;
      // justify-content:space-between;
      // align-items: center;
      gap: 3rem;
    }

    .price-display--style > h3 {
      padding: 0;
    }
    .price-display--style > input {
      margin: 0;
      margin-top: 0.1rem;
      // padding-top:0.5rem;
      // font-size:20rem;
    }
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
