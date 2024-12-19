import styled from "styled-components";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <TiStarFullOutline className="icon" />
        ) : stars >= number ? (
        <TiStarHalfOutline className="icon empty-icon" />
        ) : (
          //   <AiOutlineStar className="icon empty-icon" />
          <TiStarOutline className="icon " />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <span className="icon-style">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;

    span {
      display: flex;
      align-items: center;
    }

    .icon {
      color: orange;
      font-size: 2.4rem;
    }

    // .empty-icon {
    // //   padding-top: 0.12rem;
    //   font-size: 2.4rem;
    // }

    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars;
