import { Breadcrumb, Flex, Space, Typography } from "antd";
import styled from "styled-components";
import FindUs from "../../components/FindUs";
import MapComponent from "../../components/MapComponent";
import Guarantee from "../../components/Guarantee";

const { Text } = Typography;

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
  padding-bottom: 1rem;
`;

const index = () => {
  return (
    <>
      <StyledTitle className="about">CONTACT US</StyledTitle>
      <StyledBreadcrumb separator=">">
        <StyledBreadcrumbItem>Home</StyledBreadcrumbItem>
        <StyledBreadcrumbItemCurr>CONTACT US</StyledBreadcrumbItemCurr>
      </StyledBreadcrumb>
      <MapComponent />
      <FindUs />
      <Guarantee />
    </>
  );
};

export default index;
