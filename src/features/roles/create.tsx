import React from "react";
import { Card, Col, Row } from "antd";
import { UserAppDispatch } from "../../app/hooks";
import { addRole } from "./roleSlice";
import { useNavigate } from "react-router-dom";
import FormComponent from "./components/formComponent";

const Create: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = UserAppDispatch();

  const onFinish = (values: any) => {
    dispatch(addRole(values));
    navigate("/admin/roles");
  };

  return (
    <Card>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <FormComponent onFinish={onFinish} />
        </Col>
      </Row>
    </Card>
  );
};

export default Create;