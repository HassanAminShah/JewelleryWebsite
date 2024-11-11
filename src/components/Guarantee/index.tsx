import React from "react";
import { Flex, Space, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import freeDelivery from "../../images/free-delivery.png";
import easyReturn from "../../images/easy-return.png";
import support from "../../images/support.png";
import styled from "styled-components";

const { Text } = Typography;

const StyledSpace = styled(Flex)`
  background: #061725;
  border: 3px solid #e7cda7;
  border-radius: 1rem;
  color: white;
  max-width: 30%;
  padding: 2rem;
  row-gap: 1rem;
  .ant-typography.css-dev-only-do-not-override-apn68 {
    color: white;
  }
`;

const StyledImgsFlex = styled(Flex)`
  padding: 2rem 4rem;
`;

const StyledText = styled(Text)`
  font-size: 1.5rem;
`;

const StyledImgSpace = styled(Space)`
  display: flex;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
  height: 130px;
  width: 130px;
`;
const StyledParagraph = styled(Paragraph)`
  padding: 0% 30%;
  font-size: 42px;
  span {
    color: #e7cda7;
  }
`;

const index = () => {
  return (
    <StyledImgsFlex vertical>
      <StyledParagraph>
        We <span>guarantee</span> the security and protection of your deposits
      </StyledParagraph>
      <Flex justify="space-evenly">
        <StyledSpace vertical justify="center" align="center">
          <StyledImgSpace>
            <img src={freeDelivery} alt="" />
          </StyledImgSpace>
          <StyledText>Free Shipping</StyledText>
          <Paragraph>
            <strong>gkjewelers.pk Offers Online Shopping In Pakistan</strong>
            With Free Home Delivery & Option To Pay Cash On Delivery All Over
            Pakistan
          </Paragraph>
        </StyledSpace>
        <StyledSpace vertical justify="center" align="center">
          <StyledImgSpace>
            <img src={easyReturn} alt="" />
          </StyledImgSpace>
          <StyledText>Easy Returns</StyledText>
          <Paragraph>
            If for any reason, you are not completely satisfied with your
            purchase, you may return it up to 15 days from the original purchase
            date.
          </Paragraph>
        </StyledSpace>
        <StyledSpace vertical justify="center" align="center">
          <StyledImgSpace>
            <img src={support} alt="" />
          </StyledImgSpace>
          <StyledText>24/7 Support</StyledText>
          <Paragraph>
            If you have any further questions, please don’t hesitate to contact
            us.
          </Paragraph>
        </StyledSpace>
      </Flex>
    </StyledImgsFlex>
  );
};

export default index;
