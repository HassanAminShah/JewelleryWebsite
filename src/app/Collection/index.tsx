import React, { useState } from "react";
import { Switch, Typography, Breadcrumb, Space, Input } from "antd";
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

const StyledMainDiv = styled.div`
  margin: 0;
  display: flex;
  /* background-color: #061725; */
  flex-direction: column;
  align-items: center;
`;

const StyledSpace = styled(Space)`
  margin: 1rem 0rem;
`;
const StyledInput = styled(Input)`
  width: 300px;
`;

const App = () => {
  const dispatch = useDispatch();

  const [ellipsis, setEllipsis] = useState(true);

  return (
    <StyledMainDiv>
      <StyledTitle className="about">SHOP</StyledTitle>
      <StyledBreadcrumb>
        <StyledBreadcrumbItem>HOME</StyledBreadcrumbItem>
        <StyledBreadcrumbItemCurr>SHOP</StyledBreadcrumbItemCurr>
      </StyledBreadcrumb>
      {/* <StyledSpace>
        <StyledInput
          type="text"
          placeholder="Search Product"
          onChange={(event) => dispatch(productSearch(event.target.value))}
        />
      </StyledSpace> */}
      {/* <div style={{ width: "400px" }}>
        <Switch
          checked={ellipsis}
          onChange={() => {
            setEllipsis(!ellipsis);
          }}
        />

        <Paragraph ellipsis={ellipsis}>
          I love the policy of Gk jewellers. Exchange. Policy is quite real. And
          the product emarld ring was outstanding.
        </Paragraph>
        <Paragraph
          ellipsis={
            ellipsis ? { rows: 1, expandable: true, symbol: "more" } : false
          }
        >
          One can say that Gk jewellers is the name of trust.I love the policy
          of Gk jewellers. Exchange. Policy is quite real. And the product
          emarld ring was outstanding.
        </Paragraph>
      </div> */}

      <ApiDataComponent />
    </StyledMainDiv>
  );
};

export default App;
