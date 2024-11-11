import React, { useState } from "react";
import logo from "../../images/logo.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Affix, Divider, Flex, Image, Layout, Space, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items1: MenuItem[] = [
  {
    label: <Link to="/"> HOME</Link>,
    key: "home",
  },
  {
    label: <Link to="/collection"> GEMSTONES COLLECTION</Link>,
    key: "collection",
    children: [
      {
        type: "group",
        label: "PRECIOUS GEMSTONES",
        children: [
          { label: "AQUAMARINE COLLECTIONS", key: "setting:1" },
          { label: "EMERALD COLLECTIONS", key: "setting:2" },
          { label: "OPAL COLLECTIONS", key: "setting:3" },
          { label: "RUBY COLLECTIONS", key: "setting:4" },
        ],
      },
      {
        type: "group",
        label: "MEN COLLECTION",
        children: [
          { label: "RING", key: "setting:3" },
          { label: "PENDENT", key: "setting:4" },
          { label: "BRACELET", key: "setting:5" },
        ],
      },
    ],
  },
  {
    label: <Link to="/about">ABOUT</Link>,
    key: "about",
  },
  {
    label: <Link to="/sizes">RING SIZES</Link>,
    key: "sizes",
  },
  {
    label: <Link to="reviews">FB REVIEWS</Link>,
    key: "reviews",
  },
  {
    label: <Link to="contact">CONTACT US</Link>,
    key: "contact",
  },
];

const { Text } = Typography;

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: #061725;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const StyledCart = styled(Flex)`
  margin-right: 1rem;
  color: white;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
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

const StyledTotalSpace = styled(Space)`
  display: flex;
`;

const StyledMenu = styled(Menu)`
  width: 50%;
  background: #061725;
  font-weight: 500;
  span.ant-menu-title-content {
    color: white;
  }
  a {
    color: white;
  }
  .ant-menu-item::after {
    display: none;
  }
  li.ant-menu-overflow-item.ant-menu-submenu.ant-menu-submenu-horizontal {
  }
  ::after {
    display: none;
  }
`;

const App = () => {
  const [top, setTop] = React.useState<number>(0);
  const result = useSelector((state: any) => state.cartData);
  let totalAmount =
    result.length &&
    result
      .map((item: any) => item.price)
      .reduce((prev: any, next: any) => prev + next);

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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

        <StyledMenu onClick={onClick} mode="horizontal" items={items1} />

        <Link to="/cart">
          <Flex justify="center" align="center">
            <Link to="/">
              <StyledCart>
                <UserOutlined />
              </StyledCart>
            </Link>
            <Link to="/collection">
              <StyledCart>
                <SearchOutlined />
              </StyledCart>
            </Link>
            <StyledCart>
              <ShoppingCartOutlined />
            </StyledCart>
            <StyledCartDivider type="vertical" />
            <StyledTotalSpace>
              <StyledLength>{totalAmount.toFixed(2)} Rs</StyledLength>
              <StyledLength>{result.length} items</StyledLength>
            </StyledTotalSpace>
          </Flex>
        </Link>
      </StyledHeader>
      <StyledDivider1 type="horizontal" />
    </Affix>
  );
};

export default App;
