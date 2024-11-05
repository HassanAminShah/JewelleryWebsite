import React, { useState } from "react";
import logo from "../../images/logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Affix, Divider, Image, Layout, Space } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  color: white;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
`;

const StyledCartDiv = styled.div`
  display: flex;
`;
const StyledDivider = styled(Divider)`
  border: 1px solid #515d67;
  top: 1.5em;
  height: 1.3rem;
`;
const StyledDivider1 = styled(Divider)`
  border: 2px solid #f1e2cf;
  top: -1rem;
  margin: 0;
`;

const StyledLength = styled.div`
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
            <StyledCart>
              <ShoppingCartOutlined />
            </StyledCart>
            <StyledDivider type="vertical" />
            <StyledTotalSpace>
              <StyledLength>{result.length} Rs</StyledLength>
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
