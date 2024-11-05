import { Card, Space, Typography, Flex, Breadcrumb, Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const { Text } = Typography;

const mockData = [
  {
    id: 1,
    text: `I bought Aquamarine stone with ring. awesome service. good Quality.
    must recommend`,
    score: 5,
  },
  {
    id: 2,
    text: `yes on the time delivery and good packing box for beautiful stone`,
    score: 4,
  },
  {
    id: 2,
    text: `I love the policy of Gk jewellers. Exchange. Policy is quite real. And the product emarld ring was outstanding. One can say that Gk jewellers is the name of trust.I love the policy of Gk jewellers. Exchange. Policy is quite real. And the product emarld ring was outstanding.`,
    score: 4,
  },
  {
    id: 3,
    text: `One of the best and most authentic gems stores in Pakistan. got three purchases from them and can't be much happier. Thank you`,
    score: 3,
  },
  {
    id: 4,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
  {
    id: 5,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
  {
    id: 6,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
  {
    id: 7,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
  {
    id: 8,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
  {
    id: 9,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
  {
    id: 10,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 2,
  },
];

const StyledFlex = styled(Flex)`
  margin: 2% 5%;
`;

const StyledCard = styled(Card)`
  background: #061725;
  color: white;
  height: 300px;
  width: 250px;
  display: flex;
  justify-content: start;
`;
const StyledTitle = styled(Text)`
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

const StyledButton = styled(Button)`
  width: 100px;
  margin: 2rem 0rem;
`;

const StyledText = styled(Paragraph)`
  color: white;
  display: flex;
  text-align: start;
  margin-top: 1rem;
`;

const StarRating = () => {
  const [visible, setVisible] = useState(5);

  const handleMoreData = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <Flex align="center" vertical>
      <StyledTitle className="about">FB REVIEWS</StyledTitle>
      <StyledBreadcrumb separator=">">
        <StyledBreadcrumbItem>Home</StyledBreadcrumbItem>
        <StyledBreadcrumbItemCurr>FB REVIEWS</StyledBreadcrumbItemCurr>
      </StyledBreadcrumb>

      <StyledFlex wrap gap="large" justify="flex-start">
        {mockData.slice(0, visible).map((item) => (
          <StyledCard key={item.id}>
            <Flex>
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  size={24}
                  color={index < item.score ? "gold" : "gray"}
                />
              ))}
            </Flex>
            <StyledText>{item.text}</StyledText>
          </StyledCard>
        ))}
      </StyledFlex>
      <StyledButton onClick={handleMoreData}>Show More</StyledButton>
    </Flex>
  );
};

export default StarRating;
