import React, { useEffect, useState } from "react";
import Gemstone from "../../images/Gemstone.jpg";
import { addToCart, EmptyCart, RemoveFromCart } from "../../redux/action";
import { productList } from "../../redux/productAction";
import styled from "styled-components";
import { Button, Flex } from "antd";
import { Card, Row, Carousel, Typography, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import FindUs from "../../components/FindUs";
import MapComponent from "../../components/MapComponent";
import Guarantee from "../../components/Guarantee";
import Reviews from "../Reviews";

const { Meta } = Card;
const { Text, Title, Link, Paragraph } = Typography;

const StyledDiv = styled.div`
  /* background-color: #061725; */
  width: 100%;
  color: white;
  position: relative;
`;

const StyledMainDiv = styled.div`
  margin: 0;
  display: flex;
  /* background-color: #061725; */
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.div`
  img {
    width: 100%;
    height: 90%;
  }
`;

const StyledH1 = styled.h1`
  color: #ceaa82;
  font-size: 100px;
  position: absolute;
  right: 30%;
  top: 15%;
`;

const StyledH3 = styled.h3`
  /* color: white; */
  font-size: 52px;
  font-weight: 600;
`;

const StyledH2 = styled(StyledH3)`
  font-size: 30px;
  width: 55%;
  position: absolute;
  right: 23%;
  top: 40%;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  background: #ceaa82;
  color: black;
  position: absolute;
  right: 48%;
  top: 60%;
`;

const StyledRow = styled(Row)`
  width: 80%;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  row-gap: 2rem;
  margin: 2rem 0rem;
`;

const StyledP = styled.p`
  text-decoration: line-through;
`;

const StyledPrice = styled.p`
  display: flex;
  justify-content: center;
  column-gap: 0.6rem;
`;

const StyledPr = styled.p`
  font-weight: 600;
`;

const StyledLoadButton = styled(Button)`
  background-color: #061725;
  color: #ceaa82;
`;

const StyledSpace = styled(Space)``;
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0.5rem;
  }
  .ant-card.ant-card-bordered.ant-card-hoverable.sc-hsfCcR.estQfG.css-dev-only-do-not-override-apn68 {
    height: 400px;
  }
`;

const Index = () => {
  const [visible, setVisible] = useState(4);

  const handleMoreData = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <>
      <StyledMainDiv>
        <StyledDiv>
          <StyledH1>GK JEWELERS</StyledH1>
          <StyledH2>
            Pakistan's Premier Gemstone Destination – Your Trusted Source for
            100% Certified Elegance!
          </StyledH2>
          <StyledButton>Shop Now</StyledButton>
          <StyledImg>
            <img src={Gemstone} alt="" />
          </StyledImg>
        </StyledDiv>

        <StyledH3>NEW ARRIVALS</StyledH3>
        <StyledRow gutter={16} justify="space-between">
          {data.slice(0, visible).map((item: any) => (
            <StyledCard
              hoverable
              style={{ width: 260, border: "1px solid black", padding: "1rem" }}
              cover={
                <img alt="example" src={item.image} width={150} height={270} />
              }
            >
              <Meta title={item.title.toUpperCase()} className="meta-tag" />
              <StyledPrice>
                <StyledP>RS {item.price}</StyledP>
                <StyledPr> RS {item.price * 2}</StyledPr>
              </StyledPrice>
            </StyledCard>
          ))}
        </StyledRow>
        <Button onClick={handleMoreData}>Show More</Button>
      </StyledMainDiv>

      <Guarantee />
      <Reviews />
      <FindUs />
      {/* <MapComponent /> */}
      {/* <StyledCarousel afterChange={onChange} arrows infinite slidesToShow={4}>
        {data.map((item: any) => (
          // <StyledCol>
          <StyledCard
            hoverable
            style={{ width: 260, border: "1px solid black", padding: "1rem" }}
            cover={
              <img alt="example" src={item.image} width={150} height={300} />
            }
          >
            <Meta title={item.title.toUpperCase()} className="meta-tag" />
            <StyledPrice>
              <StyledP>RS {item.price}</StyledP>
              <StyledPr> RS {item.price * 2}</StyledPr>
            </StyledPrice>
          </StyledCard>
        ))}
      </StyledCarousel> */}
    </>
  );
};

export default Index;

// const YourComponent = () => {
//   // Your initial data
//   const initialData = [
//     // ... your data array
//   ];

//   // State to manage displayed data and load more button
//   const [displayedData, setDisplayedData] = useState(initialData);
//   const [visibleItemCount, setVisibleItemCount] = useState(5); // Change this as needed

//   // Handler for the "Load More" button
//   const handleLoadMore = () => {
//     // Increase the visible item count (you can adjust this logic based on your requirements)
//     setVisibleItemCount((prevCount) => prevCount + 5);

//     // Update displayedData with additional items
//     setDisplayedData(initialData.slice(0, visibleItemCount + 5));
//   };

//   return (
//     <div>
//       {displayedData.map((item, index) => (
//         // Render your data items here
//         <div key={index}>{item}</div>
//       ))}
//       <button onClick={handleLoadMore}>Load More</button>
//     </div>
//   );
// };
