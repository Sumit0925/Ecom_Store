import styled from "styled-components";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { Container } from "../styles/Container";
import FormatPrice from "../helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const { API, getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  const {
    id: alias,
    name,
    company,
    price,
    description,
    image,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  if (isSingleLoading) {
    return <div className="page_loading">.....Loading</div>;
  }

  return (
    <>
      <PageNavigation title={name} />
      <Wrapper>
        <Container className="container">
          <div className="grid grid-two-column">
            <div className="product-images">
              {/* product Images */}
              <MyImage imgs={image} />
            </div>

            {/* product Data */}
            <div className="product-data">
              <h2 style={{ textTransform: "capitalize" }}>{name}</h2>

              <div className="p">
                <Stars stars={stars} reviews={reviews} />
              </div>

              <p className="product-data-price">
                MRP:
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price} />
              </p>

              <p>{description}</p>

              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Safe Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty</p>
                </div>
              </div>

              <div className="product-data-info">
                <p>
                  Available :
                  <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>

                <p>
                  ID :<span> {alias}</span>
                </p>

                <p>
                  Brand :<span> {company}</span>
                </p>
              </div>

              <hr />

              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    // max-width: 120rem;
    padding: 9rem 0;
    padding: 9rem 3.2rem;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        .p,
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    .container {
      padding: 9rem 0;
    }
  }
`;

export default SingleProduct;
