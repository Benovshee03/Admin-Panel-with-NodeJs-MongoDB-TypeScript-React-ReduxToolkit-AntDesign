import React from "react";
import { Card, Col, Row } from "antd";
import { UserAppDispatch } from "../../app/hooks";
import { addProduct } from "./productSlice";
import { useNavigate } from "react-router-dom";
import FormComponent from "./components/formComponent";

const Create:React.FC = () => {
  const navigate = useNavigate();

  const dispatch = UserAppDispatch();

  const onFinish = (values: any) => {
    dispatch(addProduct(values));
    console.log(values)
    navigate("api/products");
  };

  return (
    <Card>
    <Row style={{ marginTop: 16 }}>
      <Col span={24}>
        <FormComponent onFinish={onFinish} />
      </Col>
    </Row>
  </Card>
  )
};

export default Create;