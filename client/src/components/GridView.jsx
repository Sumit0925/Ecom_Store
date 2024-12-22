import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem, index) => {
          return <Product key={curElem.id} curElem={curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 0 0;
//   background-color: ${({ theme }) => theme.colors.bg};

  .container {
    // max-width: 120rem;
    padding:0 0 0 1rem ;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      object-fit: cover;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
  
  .container {
     padding-left:0.5rem;
    }

    .card {

      .card-data {
        // padding: 0 1rem;
      }
      h3 {
        font-size:1.5rem;
      }
      
      .card-data--price{
        font-size:1.5rem;
      }

    }
  
  .grid {
      gap:2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  
  .container {
    padding:0;
  }
  
  figure {
      .caption {
        right: 17%;
    }
  }

  .card {

      .card-data {
        padding: 0 2rem;
      }
      h3 {
        font-size:1.8rem;
      }
      
      .card-data--price{
        font-size:1.8rem;
      }

    }
`;

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .container {
//     max-width: 120rem;
//   }

//   .grid {
//     gap: 3.2rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }

//     .caption {
//       position: absolute;
//       top: 15%;
//       right: 10%;
//       text-transform: uppercase;
//       background-color: ${({ theme }) => theme.colors.bg};
//       color: ${({ theme }) => theme.colors.helper};
//       padding: 0.8rem 2rem;
//       font-size: 1.2rem;
//       border-radius: 2rem;
//     }
//   }

//   .card {
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;

//     .card-data {
//       padding: 0 1rem;
//     }

//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
//     }

//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       &:hover {
//         background-color: rgb(98 84 243);
//       }

//       &:hover a {
//         color: #fff;
//       }
//       a {
//         color: rgb(98 84 243);
//         font-size: 1.4rem;
//       }
//     }
//   }
// `;

export default GridView;
