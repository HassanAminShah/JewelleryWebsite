import { Typography, Flex, Space } from "antd";
import location from "../../images/location.png";
import timing from "../../images/timing.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import wa from "../../images/wa.png";
import React from "react";
import styled from "styled-components";

const { Text } = Typography;

const StyledMainFlex = styled(Flex)`
  background: #0a1d2d;
  padding: 5rem 1rem;
`;

const StyledParagraph = styled(Text)`
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 500;
`;

const StyledChildFlex = styled(Flex)`
  width: 20%;
  row-gap: 1rem;
`;
const StyledIndFlex = styled(Flex)`
  column-gap: 1rem;
  width: 100%;
`;

const StyledHeadText = styled(Text)`
  color: white;
  padding-left: 0.2rem;
`;

const StyledFindText = styled(Text)`
  color: white;
  text-align: start;
  font-weight: 600;
  font-size: 42px;
`;

const StyledgkText = styled(StyledFindText)`
  color: #ceaa82;
`;

const index = () => {
  return (
    <StyledMainFlex justify="space-between">
      <Flex vertical>
        <StyledFindText>Find Us</StyledFindText>
        <StyledgkText>Gk Jewelers</StyledgkText>
      </Flex>

      <StyledChildFlex vertical justify="start" align="start">
        <StyledHeadText strong>OUR LOCATION</StyledHeadText>
        <StyledIndFlex align="center">
          <img src={location} alt="" width={35} height={35} />
          <Flex vertical align="start">
            <StyledParagraph>
              Shop # 4 plot # 1-C, 4th lane zamzama{" "}
            </StyledParagraph>
            <StyledParagraph>
              commercial, Phase- V, Karachi 75500
            </StyledParagraph>
          </Flex>
        </StyledIndFlex>
        <StyledIndFlex align="center">
          <img src={timing} alt="" width={35} height={35} />
          <Flex vertical align="start">
            <StyledParagraph>Monday-Saturday </StyledParagraph>
            <StyledParagraph>1:00 PM-8:00 PM </StyledParagraph>
          </Flex>
        </StyledIndFlex>
      </StyledChildFlex>

      <StyledChildFlex vertical justify="start" align="start">
        <StyledHeadText strong>Email Us</StyledHeadText>
        <StyledIndFlex align="center">
          <img src={mail} alt="" width={35} height={35} />
          <Flex vertical align="start">
            <StyledParagraph>info@gkjewelers.pk </StyledParagraph>
          </Flex>
        </StyledIndFlex>
        <StyledIndFlex align="center">
          <img src={mail} alt="" width={35} height={35} />
          <Flex vertical align="start">
            <StyledParagraph>support@gkjewelers.pk </StyledParagraph>
          </Flex>
        </StyledIndFlex>
      </StyledChildFlex>

      <StyledChildFlex vertical justify="start" align="start">
        <StyledHeadText strong>Call & Whatsapp</StyledHeadText>
        <StyledIndFlex align="center">
          <img src={phone} alt="" width={35} height={35} />
          <Flex vertical align="start">
            <StyledParagraph>+92-312-2379011 </StyledParagraph>
          </Flex>
        </StyledIndFlex>
        <StyledIndFlex align="center">
          <img src={wa} alt="" width={35} height={35} />
          <Flex vertical align="start">
            <StyledParagraph>+92-312-2379011</StyledParagraph>
            <StyledParagraph>+92-348-2397011 </StyledParagraph>
          </Flex>
        </StyledIndFlex>
      </StyledChildFlex>
    </StyledMainFlex>
  );
};

export default index;
