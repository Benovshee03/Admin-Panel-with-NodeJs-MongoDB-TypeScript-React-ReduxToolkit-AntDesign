import React, { useEffect } from "react";
import "./index.css";
import rules from "./index.validation";
import { LoginModel } from "./types";
import { Form, FormInstance, Row, Col, Card, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/AuthContext";
import { useAppSelector } from "../../app/hooks";
import { setStore } from "../../common/utils/localStorageHelper";
import { useNavigate } from "react-router-dom";
// import { decryptData, encryptData } from "../../common/utils/hasherHelper";
// import { useAppDispatch } from "../../app/hooks";

export default function Login() {
  const { loginAuth, logoutAuth } = useAuth();
  const navigate = useNavigate();
  const result = useAppSelector((state) => state.auth.result);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (result.status === "succeeded") {
      setStore("token", result.token);
      navigate("/");
    }
  }, [result]);

  const handleSubmit = (values: LoginModel) => {
    loginAuth(values.username, values.password);
    // const result = encryptData("Pro247!!");
    // console.log(result);
    // console.log("-----------");
    // const restVal = decryptData(result);
    // console.log(restVal);
  };

  useEffect(() => {
    logoutAuth(); // storage silinecek :)
  }, []);
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