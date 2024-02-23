import React from "react";
import { Button, Form, Input } from "antd";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import { postCategory } from "./categorySlice";
import { Category } from "./types";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Create: React.FC = () => {
  const dispatch = UserAppDispatch();

  const onFinish = (values: any) => {
    dispatch(postCategory(values));
    console.log(values);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={"categoryName"}
        label="Category Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={"description"} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Kaydet
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Create;
