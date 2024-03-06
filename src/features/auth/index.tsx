import React from "react";
import "./index.css";
import rules from "./index.validation";
import { LoginModel } from "./types";
import { Form, FormInstance, Row, Col, Card, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { decryptData, encryptData } from "../../common/utils/hasherHelper";
import { UserAppDispatch } from "../../app/hooks";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const {loginAuth,logoutAuth} = useAuth()
  const handleSubmit = (values: LoginModel) => {
    loginAuth(values.username,values.password)
    setTimeout(() => {
      logoutAuth()
    }, 1000);
    // const result = encryptData("Pro247!!");
    // console.log(result);

    // console.log("-----------");
    // const restVal = decryptData(result);
    // console.log(restVal);
  };
  const formRef = React.createRef<FormInstance>();
  const FormItem = Form.Item;

  return (
    <div className="form">
      <Form className="login-form" onFinish={handleSubmit} ref={formRef}>
        <Row style={{ marginTop: 10 }}>
          <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
            xxl={{ span: 16, offset: 4 }}
          >
            <Card>
              <div style={{ textAlign: "center" }}>
                <h3>{"Welcome to Baku"}</h3>
              </div>

              <FormItem name={"username"} rules={rules.username}>
                <Input
                  placeholder="Username"
                  prefix={<UserOutlined style={{ color: "rgb(0,0,0,0.25)" }} />}
                  size="large"
                />
              </FormItem>

              <FormItem name={"password"} rules={rules.password}>
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined style={{ color: "rgb(0,0,0,0.25)" }} />}
                  size="large"
                  type="password"
                />
              </FormItem>

              <Row>
                <Col span={24}>
                  <Button
                    style={{ backgroundColor: "#ff4d4f", color: "white" }}
                    block
                    htmlType="submit"
                    danger
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

function logoutAuth() {
  throw new Error("Function not implemented.");
}
