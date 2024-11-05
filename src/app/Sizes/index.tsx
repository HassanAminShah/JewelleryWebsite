import React from "react";
import { Breadcrumb, Typography, Table, Space, List, Flex, Image } from "antd";
import type { TableProps } from "antd";
import RingSizes from "../assets/Data";
import { DataType } from "../assets/Data";
import styled from "styled-components";
import Paragraph from "antd/es/typography/Paragraph";
import method1 from "../../images/method1.jpg";
import method2 from "../../images/method2.jpg";

const { Text } = Typography;

const columns: TableProps<DataType>["columns"] = [
  {
    title: "US SIZE(ORDER SIZE)",
    dataIndex: "usSize",
    key: "usSize",
  },
  {
    title: "PAKISTANI SIZE",
    dataIndex: "pakistaniSize",
    key: "pakistaniSize",
    render: (pakiSize: any) => `${pakiSize}`,
  },
  {
    title: "CIRCUMFERENCE (METHOD 1)",
    dataIndex: "circumference",
    key: "circumference",
    render: (circumference: any) => `${circumference}mm`,
  },
  {
    title: "DIAMETER (METHOD 2)",
    dataIndex: "diameter",
    key: "diameter",
    render: (diameter: any) => `${diameter}mm`,
  },
];

const StyledSpace = styled.div`
  width: 100%;
`;
const Stylediframe = styled.iframe`
  margin: 1rem;
  width: 1200px;
  height: 380px;
`;

const StyledTitle = styled(Text)`
  text-align: center;
  color: #061725;
  font-size: 60px;
  font-weight: 600;
`;

const StyledBreadcrumbItem = styled(Breadcrumb.Item)`
  color: #061725;
  font-weight: 500;
`;
const StyledBreadcrumbItemCurr = styled(StyledBreadcrumbItem)``;

const StyledBreadcrumb = styled(Breadcrumb)`
  display: flex;
  justify-content: center;
`;

const StyledTextFlex = styled(Flex)`
  text-align: start;
  .ant-typography.css-dev-only-do-not-override-apn68 {
    padding-top: 1rem;
  }
`;

const StyledMainDiv = styled(Flex)`
  margin: 2rem 8rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  font-weight: 500;
`;

const StyledMethodSpace = styled(Space)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMethodParagraph = styled(Paragraph)`
  font-weight: 600;
  text-align: start;
  margin: 0;
  padding-top: 1rem;
  font-size: 16px;
`;

const StyledPara = styled(Text)`
  text-align: start;
  padding: 0;
  margin: 0;
`;

const StyledEndText = styled(Flex)`
  padding: 2rem 0rem;
`;

const App = () => (
  <StyledMainDiv vertical>
    <StyledTitle className="about">RING SIZE</StyledTitle>
    <StyledBreadcrumb separator=">">
      <StyledBreadcrumbItem>Home</StyledBreadcrumbItem>
      <StyledBreadcrumbItemCurr>RING SIZE</StyledBreadcrumbItemCurr>
    </StyledBreadcrumb>

    <StyledTextFlex vertical>
      <StyledParagraph>Find Your Ring Size</StyledParagraph>
      <Paragraph>We have two methods for you to find your ring size.</Paragraph>

      <List>
        – If you don’t have a ring and you will get your first ring please use
        Method 1.
        <List>
          – If you have a ring and want to place an order of the same size
          please use Method 2.
        </List>
        <List>
          – We have also a Secret Method to surprise someone. You can download
          and print our Secret Method Sheet by clicking HERE.
        </List>
        – Still not sure about your ring size? Place your order with the “I will
        inform size later – Custom Size” option and our experts will contact you
        to determine your ring size. If it is still not fit you can
        exchange/resize it for Free!
      </List>
      <Paragraph>
        Check below video guide below to measure your ring size. You can also
        use a strip of paper instead of rope.
      </Paragraph>
    </StyledTextFlex>

    <Flex vertical>
      <StyledMethodParagraph>Method 1:</StyledMethodParagraph>
      <StyledMethodSpace>
        <Image src={method1} alt="" width={625} />
      </StyledMethodSpace>
    </Flex>

    <Flex vertical>
      <StyledMethodParagraph>Method 2:</StyledMethodParagraph>
      <StyledMethodSpace>
        <Image src={method2} alt="" width={625} />
      </StyledMethodSpace>
    </Flex>

    <StyledSpace>
      <Stylediframe
        style={{ margin: "2rem" }}
        src="https://www.youtube.com/embed/m6oeUp2RT7o"
        title="AI FILMS: How to make an entire SHORT FILM with AI (Full Tutorial)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></Stylediframe>

      <StyledMethodParagraph>
        Now follow the ring size chart below to determine your size with the
        measurements taken from the above-mentioned methods. For example, if
        your measurement taken from method 1 (circumference) is 57mm or 2.24
        inches, your size would be US 8 or Pakistan size 17-18. (For the best
        experience of our ring size guide use mobile in landscape mode)
      </StyledMethodParagraph>
      <Table<DataType>
        columns={columns}
        dataSource={RingSizes}
        pagination={false}
      />
    </StyledSpace>

    <StyledEndText vertical>
      <StyledPara>
        We have a free resizing/exchange service for wrong measurements.
      </StyledPara>
      <StyledMethodParagraph>
        NOT SURE ABOUT YOUR RING SIZE?
      </StyledMethodParagraph>
      <StyledPara>
        If you are not sure about your ring size, you can place an order for the
        “custom size – I will inform size later” option. Once you complete your
        order payment you will receive an order number. We need 2 days to
        prepare your ring and sizing is our last step before shipping out. At
        this time you can check your ring size at any local jewelry shop and
        inform us of your order number by sending us an email to
        info@gkjewelers.pk
      </StyledPara>
    </StyledEndText>
  </StyledMainDiv>
);

export default App;
