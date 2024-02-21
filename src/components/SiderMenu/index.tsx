import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Sider } = Layout;
export interface ISiderMenuProps {
  path?: any;
  collapsed?: any;
  onCollapse?: any;
}

const Index = (props: ISiderMenuProps) => {
  //   const [collapsed, setCollapsed] = useState(false);
  const { collapsed } = props;
  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Index;
