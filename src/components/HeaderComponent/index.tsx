import React from "react";
import logo from "../../images/logo.png";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Affix, Divider, Image, Layout, Space, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { Text } = Typography;

const { Header } = Layout;

const items: any = [
  {
    label: "HOME",
    key: "home",
    href: "/",
  },
  {
    label: "GEM STONES COLLECTION",
    key: "SubMenu",
    href: "/collection",
  },

  {
    label: "ABOUT",
    key: "about",
    href: "/about",
  },
  {
    label: "RING SIZES",
    key: "sizes",
    href: "/sizes",
  },
  {
    label: "FB REVIEWS",
    key: "fb",
    href: "/reviews",
  },
  {
    label: "CONTACT US",
    key: "contact",
    href: "/contact",
  },
];

const StyledHeader = styled(Header)`
  background: #061725;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const StyledCart = styled.div`
  margin-right: 1rem;
  display: flex;
  color: white;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
`;

const StyledCartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDivider = styled(Divider)`
  border: 1px solid #515d67;
  top: 1.5em;
  height: 1.3rem;
`;
const StyledCartDivider = styled(StyledDivider)`
  top: 0;
`;
const StyledDivider1 = styled(Divider)`
  border: 2px solid #f1e2cf;
  top: -1rem;
  margin: 0;
`;

const StyledLength = styled(Text)`
  color: white;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const StyledDiv = styled.div`
  display: flex;
`;
const StyledD = styled.div`
  display: flex;
`;
const StyledTotalSpace = styled(Space)`
  display: flex;
`;
const StyledH1 = styled.div`
  color: white;
  padding: 0rem 0.8rem;
  font-weight: bold;
`;

const App = () => {
  const [top, setTop] = React.useState<number>(0);
  const result = useSelector((state: any) => state.cartData);
  let totalAmount =
    result.length &&
    result
      .map((item: any) => item.price)
      .reduce((prev: any, next: any) => prev + next);

  const handleSearch = () => {};

  return (
    <Affix offsetTop={top}>
      <StyledHeader
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "110px",
        }}
      >
        <Link to="/">
          <Image src={logo} width={214} height={105} preview={false} />
        </Link>

        <StyledD>
          {items.map((item: any, index: number) => (
            <StyledDiv>
              <Link to={item.href}>
                <StyledH1 key={item.key}>{item.label}</StyledH1>
              </Link>
              {index < items.length - 1 && <StyledDivider type="vertical" />}
            </StyledDiv>
          ))}
        </StyledD>

        <Link to="/cart">
          <StyledCartDiv>
            {/* <Link to="/collection">
              <StyledCart onClick={handleSearch}>
                <SearchOutlined />
              </StyledCart>
            </Link> */}
            <StyledCart>
              <ShoppingCartOutlined />
            </StyledCart>
            <StyledCartDivider type="vertical" />
            <StyledTotalSpace>
              <StyledLength>{totalAmount.toFixed(2)} Rs</StyledLength>
              <StyledLength>{result.length} items</StyledLength>
            </StyledTotalSpace>
            {/* <StyledLength> 0 Rs</StyledLength> */}
          </StyledCartDiv>
        </Link>
      </StyledHeader>
      <StyledDivider1 type="horizontal" />
    </Affix>
  );
};

export default App;
