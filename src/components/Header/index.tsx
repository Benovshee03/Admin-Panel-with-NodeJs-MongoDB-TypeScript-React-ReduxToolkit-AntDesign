import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Button } from "antd";

const { Header } = Layout;
export interface IHeaderProps {
  colorBgContainer?: any;
  collapsed?: any;
  onCollapse?: any;
}

const Index = (props: IHeaderProps) => {
  const { collapsed, colorBgContainer, onCollapse } = props;
  return (
    <div>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => onCollapse(collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
    </div>
  );
};

export default Index;
