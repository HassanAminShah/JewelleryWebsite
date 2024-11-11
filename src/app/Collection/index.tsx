import React, { useState } from "react";
import { Switch, Typography, Breadcrumb, Space, Input, Flex } from "antd";
import ApiDataComponent from "../../components/ApiDataComponent";
import styled from "styled-components";
import { productSearch } from "../../redux/productAction";
import { useDispatch } from "react-redux";

const { Paragraph, Text } = Typography;

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

const StyledSpace = styled(Space)`
  margin: 1rem 0rem;
`;
const StyledInput = styled(Input)`
  width: 300px;
`;

const App = () => {
  const dispatch = useDispatch();

  return (
    <Flex vertical align="center">
      <StyledTitle className="about">SHOP</StyledTitle>
      <StyledBreadcrumb>
        <StyledBreadcrumbItem>HOME</StyledBreadcrumbItem>
        <StyledBreadcrumbItemCurr>SHOP</StyledBreadcrumbItemCurr>
      </StyledBreadcrumb>

      <StyledSpace>
        <StyledInput
          type="text"
          placeholder="Search Product"
          onChange={(event) => dispatch(productSearch(event.target.value))}
        />
      </StyledSpace>

      <ApiDataComponent />
    </Flex>
  );
};

export default App;
