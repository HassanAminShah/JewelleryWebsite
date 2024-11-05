import React from "react";
import styled from "styled-components";
import { Divider, Typography } from "antd";

const { Text } = Typography;

const StyledText = styled(Text)`
  background-color: #061725;
  font-size: 12px;
  color: white;
  padding: 2rem 0rem;
`;
const StyledSpan = styled.span`
  font-weight: 500;
`;
const StyledDivider = styled(Divider)`
  background: #1d2832;
  height: 2px;
  margin: 0;
`;

const index = () => {
  return (
    <>
      <StyledDivider variant="solid" type="horizontal" />
      <StyledText>
        <StyledSpan> GK JEWELERS</StyledSpan> 2024 - All Right Reserved
      </StyledText>
    </>
  );
};

export default index;
