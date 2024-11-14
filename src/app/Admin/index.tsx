import {
  Flex,
  Space,
  Typography,
  Table,
  Card,
  Breadcrumb,
  Button,
  Modal,
  message,
  Upload,
  Input,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/productAction";
import type { TableProps } from "antd";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
const { Text } = Typography;

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
  min-width: 300px;
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

const StyledBreadcrumb = styled(Breadcrumb)`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  li.ant-breadcrumb-separator {
    font-weight: 700;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0rem;
`;

const StyledModal = styled(Modal)`
  gap: 1rem;
`;

const AdminComponent = () => {
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
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
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
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Button onClick={() => handleEdit(record.id)}>edit</Button>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const handleEdit = (id: number) => {
    showModal();
  };

  return (
    <StyledMainDiv vertical>
      <StyledTitle className="about">CART</StyledTitle>
      <StyledBreadcrumb>
        <StyledBreadcrumbItem>HOME</StyledBreadcrumbItem>
        <StyledBreadcrumbItem>CART</StyledBreadcrumbItem>
      </StyledBreadcrumb>

      <StyledInSpace>
        <StyledSpace>
          <Table<DataType>
            columns={columns}
            dataSource={dataTotal}
            pagination={false}
          />
        </StyledSpace>

        <>
          <StyledButton type="primary" onClick={showModal}>
            Add
          </StyledButton>
          <StyledModal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <Input placeholder="Title" />
            <Input placeholder="Price" />
            <Select
              showSearch
              placeholder="Select Category"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: "men's clothing",
                  label: "Men's Clothing",
                },
                {
                  value: "jewelery",
                  label: "Jewelery",
                },
                {
                  value: "electronics",
                  label: "Electronics",
                },
                {
                  value: "women's clothing",
                  label: "Women's Clothing",
                },
              ]}
            />
          </StyledModal>
        </>
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

export default AdminComponent;
