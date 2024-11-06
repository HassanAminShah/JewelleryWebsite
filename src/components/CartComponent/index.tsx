import { Flex, Space, Typography, Table, Tag, Card } from "antd";
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
interface DataType1 {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: string[];
}

const StyledSpace = styled.div`
  padding: 0rem 2rem;
  width: 70%;
`;

const StyledMainDiv = styled(Flex)`
  min-height: 60vh;
  margin: 3rem 7rem;
`;
const StyledInSpace = styled(Flex)`
  column-gap: 5rem;
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
  const data2 = cartData.map((item: any) => item.price);

  console.log(data1);

  const totalAmount =
    cartData.length &&
    cartData
      .map((item: any) => item.price)
      .reduce((prev: any, next: any) => prev + next);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Image",
      dataIndex: "image", // this is the value that is parsed from the DB / server side
      key: "image",
      render: (theImageURL) => (
        <img width={50} height={50} alt={theImageURL} src={theImageURL} />
      ), // 'theImageURL' is the variable you must declare in order the render the URL
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    // {
    //   title: "Quantity",
    //   dataIndex: "quantity",
    //   key: "quantity",
    //   render: (qty) => `${(qty += cartData.length)}`,
    // },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  return (
    <StyledMainDiv vertical>
      <StyledInSpace>
        <StyledSpace>
          <Table<DataType>
            columns={columns}
            dataSource={dataTotal}
            pagination={false}
          />
        </StyledSpace>

        <Card
          style={{ width: "200px", height: "200px" }}
          title="Total Amount"
          bordered={false}
        >
          {totalAmount.toFixed(2)} Rs
        </Card>
      </StyledInSpace>
    </StyledMainDiv>
  );
};

export default CartComponent;
