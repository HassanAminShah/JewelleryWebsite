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
    text: `I love the policy of Gk jewellers. Exchange. Policy is quite real. And the product emarld ring was outstanding.`,
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
    text: `Good experience. Product quality is outstanding, got what i ordered❣️❣️❣️`,
    score: 5,
  },
  {
    id: 6,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk `,
    score: 2,
  },
  {
    id: 7,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 3,
  },
  {
    id: 8,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 1,
  },
  {
    id: 9,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 4,
  },
  {
    id: 10,
    text: `5 out of 5 satrs because jo meny order kia same wohi mila or zbrdast paking ma mila jazak Allah gk jewelers❣️❣️❣️`,
    score: 4,
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
  li.ant-breadcrumb-separator {
    font-weight: 700;
  }
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
  const INITIAL_VISIBLE_COUNT = 5;
  const [visible, setVisible] = useState(INITIAL_VISIBLE_COUNT);
  const [showMore, setShowMore] = useState(false);

  const handleMoreData = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  const handleLessData = () => {
    setVisible((value) => value - 5);
    setShowMore(false);
  };

  const allItemsDisplayed = visible >= mockData.length;

  return (
    <Flex align="center" vertical>
      <StyledTitle className="about">FB REVIEWS</StyledTitle>
      <StyledBreadcrumb>
        <StyledBreadcrumbItem>HOME</StyledBreadcrumbItem>
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

      <Flex gap="small">
        {!allItemsDisplayed && (
          <StyledButton onClick={handleMoreData}>Show More</StyledButton>
        )}
        {visible > INITIAL_VISIBLE_COUNT && (
          <StyledButton onClick={handleLessData}>Show Less</StyledButton>
        )}
      </Flex>
    </Flex>
  );
};

export default StarRating;
