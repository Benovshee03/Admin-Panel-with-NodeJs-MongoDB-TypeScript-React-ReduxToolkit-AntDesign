import React from "react";
import {
  Layout,
  Button,
  Menu,
  Row,
  Col,
  Space,
  Badge,
  Avatar,
  Dropdown, 
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import profilePicture from "../../images/profile.svg";

import NotificationDrawer from "../NotificationDrawer";

interface IHeaderProps {
  firstName?: string;
  lastName?: string;
  collapsed: boolean;
  colorBgContainer: any;
  onCollapse: (collapsed: boolean) => void;
}

const { Header } = Layout;

const Index = (props: IHeaderProps) => {
  const [visible, setVisible] = React.useState(false);
  const [nCount, setNCount] = React.useState(0);
  const { collapsed, colorBgContainer, onCollapse, firstName, lastName } =
    props;

  const onNotificationHandler = () => {
    setVisible(true);
  };
  const hideDrawer = async () => {
    setVisible(false);
  };
 
  return (
    <>
      <Header
        className={"header-container"}
        style={{
          minHeight: 52,
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Row>
          <Col span={12}> 
            <Button
              className="trigger"
              type="text"
              icon={  <MenuUnfoldOutlined /> }

              // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => onCollapse(collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Col>
          <Col
            style={{
              padding: "0px 15px 0px 15px",
              textAlign: "right",
            }}
            span={12}
          >
            <Space>
              <Title level={5} style={{ marginRight: 15 }}>
                {firstName}&nbsp;{lastName}
              </Title>
            </Space>
            <Space>
              <Badge count={nCount} style={{ marginRight: 15 }}>
                <Avatar
                  size="small"
                  shape="circle"
                  alt={"profile"}
                  icon={<BellOutlined onClick={onNotificationHandler} />}
                />
              </Badge>

              <Dropdown
                className={"header-drop"}
                dropdownRender={(menu) => (
                  <Menu>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <Link to={"/profile"}>Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<LogoutOutlined />}>
                      <Link to={"/admin/logout"}>Logout</Link>
                    </Menu.Item>
                  </Menu>
                )}
                trigger={["click"]}
              >
                <Avatar
                  size={"small"}
                  shape="circle"
                  alt={"profile"}
                  src={profilePicture}
                />
              </Dropdown>
              <NotificationDrawer
                visible={visible}
                showOrHideDrawer={hideDrawer} 
                setNCount={setNCount}
              />
            </Space>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Index;