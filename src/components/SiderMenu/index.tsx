import React from "react";
import Logo from "../../images/logo.png";
import { Avatar, Col, Layout, Menu } from "antd";
import "./index.less";
import routeConfig from "../Router/route.config";
import { useLocation, useNavigate } from "react-router-dom"; 


const { Sider } = Layout;

export interface ISiderMenuProps {
  path?: any;
  collapsed: boolean;
  onCollapse: any;
  // onCollapse: (collapsed: boolean) => void;
}

const Index = (props: ISiderMenuProps) => {
  const { collapsed, onCollapse } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const routeItems = routeConfig
    .filter((item: any) => item.showInMenu)
    .map((a: any, b: any) => {
      return {
        key: a.key,
        icon: a.icon,
        label: a.title,
        onClick: () => navigate(a.path),
      };
    });

  const defaultSelectedKeys = routeConfig
    .filter(
      (item: any) => item.showInMenu && item.path === location.pathname
    )
    .map((item: any) => item.key);

  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ height: "100vh" }}
      >
        {collapsed ? (
          <Col style={{ textAlign: "center", marginTop: 15, marginBottom: 10 }}>
            <Avatar
              shape="square"
              style={{ height: 30, width: 55 }}
              src={Logo}
            />
          </Col>
        ) : (
          <Col style={{ textAlign: "center", marginTop: 15, marginBottom: 10 }}>
            <Avatar
              shape="square"
              style={{ height: 60, width: "100%" }}
              src={Logo}
            />
          </Col>
        )}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          items={routeItems}
        />
      </Sider>
    </div>
  );
};

export default Index;