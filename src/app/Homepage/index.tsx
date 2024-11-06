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
import ApiDataComponent from "../../components/ApiDataComponent";

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

const StyledApiSpace = styled(Space)`
  /* width: 100%; */
`;

const Index = () => {
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

        <StyledApiSpace>
          <ApiDataComponent />
        </StyledApiSpace>
      </StyledMainDiv>

      <Guarantee />
      <Reviews />
      <FindUs />
      {/* <MapComponent /> */}
    </>
  );
};

export default Index;
