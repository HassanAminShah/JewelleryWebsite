import { Breadcrumb, Button, Space, Typography } from "antd";
import React from "react";
import topaz from "../../images/topaz.jpg";
import supphire from "../../images/supphire.jpg";
import opal from "../../images/opal.jpg";
import styled from "styled-components";

const { Title, Paragraph, Text } = Typography;

const StyledYellowSpace = styled(Space)`
  color: white;
  background: #ceaa82;
  padding: 0.2rem;
  position: absolute;
  top: -5%;
  font-weight: 500;
`;

const StyledSpace = styled(Space)`
  padding: 1rem;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 20%;
  width: 40vw;
  .ant-typography.css-dev-only-do-not-override-apn68 {
    color: white;
    margin: 0.3rem 0rem;
  }
  span.ant-typography.css-dev-only-do-not-override-apn68 {
    color: white;
  }
  .ant-space.css-dev-only-do-not-override-apn68.ant-space-vertical.ant-space-gap-row-small.ant-space-gap-col-small.sc-jdeYMN.eNcbTW {
    width: 90%;
  }
  .ant-space-item {
    color: white;
    display: contents;
  }
`;

const StyledSpace1 = styled(StyledSpace)`
  position: relative;
  top: 20%;
`;

const StyledMainSpace = styled(Space)`
  width: 80%;
  margin: 2rem 0rem;
  padding: 2rem 0rem;
  position: relative;
`;

const StyledText = styled(Paragraph)`
  width: 60%;
  color: white;
  font-size: 26px;
`;

const StyledImageSpace = styled(Space)`
  img {
    width: 40vw;
    min-height: 90%;
  }
`;

const StyledButton = styled(Button)`
  color: #ceaa82;
  background: transparent;
  border: none;
  font-weight: 400;

  :hover {
    color: #ceaa82;
    background: transparent;
    border: none;
  }
  button.ant-btn.css-dev-only-do-not-override-apn68.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.sc-hGNhLO.jJhWKB {
    color: #ceaa82;
    background: transparent;
    border: none;
  }
`;

const StyledImageSpace1 = styled(StyledImageSpace)`
  position: absolute;
  right: 0;
  top: 0%;
`;

const StyledMSpace = styled(Space)`
  background: #061725;
`;

const StyledTitle = styled(Text)`
  color: white;
  font-size: 60px;
  font-weight: 600;
`;

const StyledBreadcrumbItem = styled(Breadcrumb.Item)`
  color: white;
`;
const StyledBreadcrumbItemCurr = styled(Breadcrumb.Item)`
  color: white;
  font-weight: 500;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  display: flex;
  justify-content: center;
  li.ant-breadcrumb-separator {
    font-weight: 700;
  }
  .ant-breadcrumb-separator {
    color: white;
  }
`;
const index = () => {
  return (
    <StyledMSpace direction="vertical">
      <StyledTitle className="about">ABOUT STONES</StyledTitle>
      <StyledBreadcrumb>
        <StyledBreadcrumbItem>HOME</StyledBreadcrumbItem>
        <StyledBreadcrumbItemCurr>About Stones</StyledBreadcrumbItemCurr>
      </StyledBreadcrumb>
      <StyledMainSpace>
        <StyledImageSpace>
          <img src={topaz} alt="" />
        </StyledImageSpace>
        <StyledSpace direction="vertical">
          <StyledYellowSpace>GEMSTONES, NATURAL GEMSTONES</StyledYellowSpace>
          <StyledText>WHAT IS TOPAZ? TOPAZ HEALING PROPERTIES</StyledText>
          <Paragraph>By Ubaid Advani</Paragraph>
          <Text>
            TOPAZ GEMSTONE Topaz makes an ideal gem. A good hardness and
            desirable colors, combined with a relative abundance and
            availability mak... Continue reading
          </Text>
          <StyledButton>Continue Reading</StyledButton>
        </StyledSpace>
      </StyledMainSpace>
      <StyledMainSpace>
        <StyledImageSpace1>
          <img src={supphire} alt="" />
        </StyledImageSpace1>
        <StyledSpace1 direction="vertical">
          <StyledYellowSpace>GEMSTONES, NATURAL GEMSTONES</StyledYellowSpace>
          <StyledText>The Sapphire Gemstone (Neelam Stone)</StyledText>
          <Paragraph>By Ubaid Advani</Paragraph>
          <Text>
            Sapphire (Neelam) is the most precious and valuable blue gemstone.
            It is a very desirable gemstone due to its excellent color,
            hardness...
          </Text>
          <StyledButton>Continue Reading</StyledButton>
        </StyledSpace1>
      </StyledMainSpace>
      <StyledMainSpace>
        <StyledImageSpace>
          <img src={opal} alt="" />
        </StyledImageSpace>
        <StyledSpace direction="vertical">
          <StyledYellowSpace>GEMSTONES, NATURAL GEMSTONES</StyledYellowSpace>
          <StyledText>100% Natural OPAL Gemstone</StyledText>
          <Paragraph>By Ubaid Advani</Paragraph>
          <Text>
            Opal Meaning, Healing Properties, and Benefits Opal is the most
            beautiful gemstone on the planet that is utilized since the old
            times f...
          </Text>
          <StyledButton>Continue Reading</StyledButton>
        </StyledSpace>
      </StyledMainSpace>
    </StyledMSpace>
  );
};

export default index;
