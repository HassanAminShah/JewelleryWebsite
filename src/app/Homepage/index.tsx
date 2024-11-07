import Gemstone from "../../images/Gemstone.jpg";
import styled from "styled-components";
import { Button, Flex } from "antd";
import { Card, Row, Col, Typography, Space } from "antd";
import FindUs from "../../components/FindUs";
import Guarantee from "../../components/Guarantee";
import Reviews from "../Reviews";
import ApiDataComponent from "../../components/ApiDataComponent";
import about1 from "../../images/about1.jpg";
import about2 from "../../images/about2.jpg";
import about3 from "../../images/about3.jpg";

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
const StyledCol = styled(Col)`
  padding: 0;
  margin: 0;
  border-radius: 10px;
`;

const StyledSpace = styled(Space)`
  margin: 1rem 8rem;
  .ant-space-item {
    width: 100%;
  }
`;

const StyledFlex = styled(Flex)`
  padding: 2rem;
  margin: 0;
  border-radius: 0px 0px 10px 10px;
  background: black;
  color: white;
  .ant-typography.css-dev-only-do-not-override-apn68 {
    color: white;
  }
`;

const Styled1Card = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
`;

const StyledRelFlex = styled(Flex)`
  position: relative;
`;

const StyledPara = styled(Paragraph)`
  position: absolute;
  padding: 0.3rem;
  font-weight: 500;
  font-size: 0.8rem;
  top: -1rem;
  right: 24%;
  background: #ceaa82;
  color: white;
`;

const StyledMainPara = styled(Paragraph)`
  font-weight: 500;
  font-size: 1.5rem;
  padding: 0rem 1rem;
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
          <StyledButton href="/collection">Shop Now</StyledButton>
          <StyledImg>
            <img src={Gemstone} alt="" />
          </StyledImg>
        </StyledDiv>

        <StyledH3>NEW ARRIVALS</StyledH3>

        <StyledApiSpace>
          <ApiDataComponent />
        </StyledApiSpace>
      </StyledMainDiv>
      <StyledSpace>
        <Row gutter={16} style={{ width: "100%" }}>
          <StyledCol span={8}>
            <Styled1Card hoverable cover={<img alt="example" src={about1} />}>
              <StyledRelFlex>
                <StyledPara>GEMSTONES, NATURAL GEMSTONES</StyledPara>

                <StyledFlex vertical>
                  <StyledMainPara>
                    WHAT IS TOPAZ? TOPAZ HEALING PROPERTIES
                  </StyledMainPara>
                  <Paragraph>By Ubaid Advani</Paragraph>
                  <Paragraph>
                    TOPAZ GEMSTONE Topaz makes an ideal gem. A good hardness and
                    desirable colors, combined with a relative abundance and
                    availability mak...
                  </Paragraph>
                </StyledFlex>
              </StyledRelFlex>
            </Styled1Card>
          </StyledCol>
          <StyledCol span={8}>
            <Styled1Card hoverable cover={<img alt="example" src={about2} />}>
              <StyledRelFlex>
                <StyledPara>GEMSTONES, NATURAL GEMSTONES</StyledPara>

                <StyledFlex vertical>
                  <StyledMainPara>
                    The Sapphire Gemstone (Neelam Stone)
                  </StyledMainPara>
                  <Paragraph>By Ubaid Advani</Paragraph>
                  <Paragraph>
                    Sapphire (Neelam) is the most precious and valuable blue
                    gemstone. It is a very desirable gemstone due to its
                    excellent color, hardness...
                  </Paragraph>
                </StyledFlex>
              </StyledRelFlex>
            </Styled1Card>
          </StyledCol>{" "}
          <StyledCol span={8}>
            <Styled1Card hoverable cover={<img alt="example" src={about3} />}>
              <StyledRelFlex>
                <StyledPara>GEMSTONES, NATURAL GEMSTONES</StyledPara>

                <StyledFlex vertical>
                  <StyledMainPara>100% Natural OPAL Gemstone </StyledMainPara>
                  <Paragraph>By Ubaid Advani</Paragraph>
                  <Paragraph>
                    Opal Meaning, Healing Properties, and Benefits Opal is the
                    most beautiful gemstone on the planet that is utilized since
                    the old times f...
                  </Paragraph>
                </StyledFlex>
              </StyledRelFlex>
            </Styled1Card>
          </StyledCol>
        </Row>
      </StyledSpace>
      <Guarantee />
      <Reviews />
      <FindUs />
      {/* <MapComponent /> */}
    </>
  );
};

export default Index;
