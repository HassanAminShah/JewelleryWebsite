import { Flex, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

type FieldType = {
  username?: string;
  password?: string;
};

const StyledFlex = styled(Flex)`
  width: 100vw;
  padding: 2rem;
  height: 71.5vh;
`;

const Login = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { username, password } = values;
    if (username === "admin" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      navigate("/admin");
    } else {
      message.error("Invalid credentials");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    message.error("Please complete the form correctly!");
  };

  return (
    <StyledFlex vertical justify="center" align="center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledFlex>
  );
};

export default Login;
