import React, { useEffect, useState } from "react";
import Gemstone from "../../images/Gemstone.jpg";
import { addToCart, RemoveFromCart } from "../../redux/action";
import { productList } from "../../redux/productAction";
import styled from "styled-components";
import { Button, Flex } from "antd";
import { Card, Row, Carousel, Typography, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Paragraph from "antd/es/typography/Paragraph";

const { Meta } = Card;

const StyledRow = styled(Row)`
  width: 1300px;
  display: flex;
  justify-content: center;
  column-gap: 5rem;
  row-gap: 2rem;
  margin: 2rem 0rem;
`;

const StyledP = styled(Paragraph)`
  text-decoration: line-through;
`;

const StyledPrice = styled(Paragraph)`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  column-gap: 0.6rem;
`;

const StyledPr = styled(Paragraph)`
  font-weight: 600;
`;

const StyledLoadButton = styled(Button)`
  background-color: #061725;
  color: #ceaa82;
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0.5rem;
  }
  .ant-card.ant-card-bordered.ant-card-hoverable.sc-hsfCcR.estQfG.css-dev-only-do-not-override-apn68 {
    height: 400px;
  }
`;

const StyledCartButton = styled(Button)`
  margin-bottom: 0.3rem;
`;

const StyledMain = styled(Flex)`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    <StyledMain>
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
              <StyledP>RS {(item.price * 1.5).toFixed(2)}</StyledP>
              <StyledPr> RS {item.price}</StyledPr>
            </StyledPrice>
            <StyledCartButton onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </StyledCartButton>
            <StyledCartButton onClick={() => dispatch(RemoveFromCart(item.id))}>
              Remove From Cart
            </StyledCartButton>
          </StyledCard>
        ))}
      </StyledRow>
      <Button onClick={handleMoreData}>Show More</Button>
    </StyledMain>
  );
};

export default Index;
