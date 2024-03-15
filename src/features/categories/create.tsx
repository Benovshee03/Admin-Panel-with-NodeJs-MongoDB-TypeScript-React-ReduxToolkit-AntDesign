import React, { useEffect, useRef } from "react";
import { Card, Col, Row } from "antd";
import { UserAppDispatch } from "../../app/hooks";
import { addCategory } from "./categorySlice";
import { useNavigate } from "react-router-dom";
import FormComponent from "./components/formComponent";
import { Socket, io } from "socket.io-client";
import AppConsts from "../../library/Appconsts";

const Create: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = UserAppDispatch();

  const onFinish = (values: any) => {
    dispatch(addCategory(values));
    navigate("/admin/categories");

    if (socket.current) {
      socket.current.emit("notification", values);
    }
  };

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(AppConsts.remoteSocketServiceBaseUrl as string);

    // socket.current.on("categoryAdded", (category) => {
    //   setCategories((prevCategories) => [...prevCategories, category]);
    // });

    return () => {
      socket.current!.disconnect();
    };
  }, []);

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