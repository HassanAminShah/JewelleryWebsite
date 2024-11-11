import { Flex, Space, Typography, Table, Tag, Card, Breadcrumb } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/productAction";
import type { TableProps } from "antd";
import styled from "styled-components";
import { cartData } from "../../redux/reducer";

const { Text } = Typography;
const { Column, ColumnGroup } = Table;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const StyledSpace = styled(Space)`
  padding: 2rem;
  width: 70%;
  .ant-space-item {
    width: 100%;
  }
`;

const StyledMainDiv = styled(Flex)`
  min-height: 60vh;
  margin: 1rem 7rem 4rem;
`;
const StyledInSpace = styled(Flex)`
  column-gap: 5rem;
`;

const StyledCard = styled(Card)`
  margin: 2rem 0rem;
  height: 200px;
  width: 300px;
`;

const StyledCartFlex = styled(Flex)`
  padding: 1rem 2rem;
  font-weight: 500;
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
  padding-bottom: 1rem;
  li.ant-breadcrumb-separator {
    font-weight: 700;
  }
`;

const CartComponent = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state: any) => state?.cartData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  // console.log(cartData);

  const dataTotal = cartData.map((item: any) => item);
  console.log(dataTotal);

  const data1 = cartData.map((item: any) => item.title);

  console.log(data1);

  const totalAmount =
    cartData.length &&
    cartData
      .map((item: any) => item.price)
      .reduce((prev: any, next: any) => prev + next);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (theImageURL) => (
        <img width={50} height={50} alt={theImageURL} src={theImageURL} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "45%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: any) => `${price} Rs`,
      width: "15%",
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => `${category.toUpperCase()}`,
    },
  ];

  return (
    <StyledMainDiv vertical>
      <StyledTitle className="about">CART</StyledTitle>
      <StyledBreadcrumb>
        <StyledBreadcrumbItem>HOME</StyledBreadcrumbItem>
        <StyledBreadcrumbItemCurr>CART</StyledBreadcrumbItemCurr>
      </StyledBreadcrumb>
      <StyledInSpace>
        <StyledSpace>
          <Table<DataType>
            columns={columns}
            dataSource={dataTotal}
            pagination={false}
          />
        </StyledSpace>

        <StyledCard title="Cart Total" bordered={false}>
          <StyledCartFlex vertical justify="center" align="start">
            <Text>Total Amount : {totalAmount.toFixed(2)} Rs</Text>
            <Text>Total Items : {cartData.length}</Text>
          </StyledCartFlex>
        </StyledCard>
      </StyledInSpace>
    </StyledMainDiv>
  );
};

export default CartComponent;
