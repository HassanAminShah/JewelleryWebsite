// @ts-nocheck
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu, theme, Button, Affix } from "antd";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import AppRoutes from "../../routes/routes";
import Header from "../HeaderComponent";
import Homepage from "../../app/Homepage/index";
import { Link } from "react-router-dom";
import Whatsapp from "../Whatsapp/index";
const { Content, Sider } = Layout;

const StyledLayout = styled(Layout)`
  /* background-color: #061725; */
  color: white;
`;

const StyledHeader = styled(Header)``;
const LayoutComponent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <StyledLayout>
        <Header />
        <Content>
          <Layout
            style={{
              padding: "",
              background: "",
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <Homepage /> */}
            <AppRoutes />
          </Layout>
        </Content>
        <Whatsapp />
        <FooterComponent />
      </StyledLayout>
    </div>
  );
};

export default LayoutComponent;
