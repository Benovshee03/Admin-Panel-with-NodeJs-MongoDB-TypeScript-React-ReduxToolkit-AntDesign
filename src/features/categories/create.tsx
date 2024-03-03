import React from "react";
import {Card,Col,Row } from "antd";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import { postCategory } from "./categorySlice";
import { useNavigate } from "react-router-dom";
import FormComponent from "./components/formComponent";


/* eslint-disable no-template-curly-in-string */


const Create: React.FC = () => {
  const dispatch = UserAppDispatch();
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    navigate('/api/categories')
    dispatch(postCategory(values));
    console.log(values);
  };
  return (
    <Card>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <FormComponent onFinish={onFinish} />
        </Col>
      </Row>
    </Card>)
};

export default Create;
