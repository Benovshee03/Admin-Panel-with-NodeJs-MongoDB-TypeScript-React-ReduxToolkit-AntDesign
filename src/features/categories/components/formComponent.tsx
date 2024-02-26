import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
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

interface FormComponentProps {
  onFinish: (values: any) => void;
  initialValues?: any;
}

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { onFinish, initialValues } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [initialValues]);

  
  return (
    <>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        initialValues={initialValues}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"categoryName"}
          label="Category Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" style={{ float: "right" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormComponent;