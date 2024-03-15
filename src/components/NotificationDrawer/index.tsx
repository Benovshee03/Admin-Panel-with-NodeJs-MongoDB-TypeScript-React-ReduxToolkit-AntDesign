import React, { useEffect, useRef } from "react";
import { Space, Drawer, Avatar, List } from "antd";
import {
  NotificationOutlined,
  ClockCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import io, { Socket } from "socket.io-client";
import AppConsts from "../../library/Appconsts";
interface NotificationDrawerProps {
  visible: boolean;
  showOrHideDrawer: () => void; 
  setNCount: any;
}

const NotificationDrawer = (props: NotificationDrawerProps) => {
  const { visible, showOrHideDrawer, setNCount} = props;
  const socket = useRef<Socket | null>(null);

  const [notifications, setNotifications] = React.useState<any[]>([]);

  useEffect(() => {
    socket.current = io(AppConsts.remoteSocketServiceBaseUrl as string);
    socket.current.on("notification", (notification: any) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    });

    setNotifications([
      // db den geldi
      {
        title: "Ant Design Title 1",
        current: 0,
        active: true,
      },
    ]);

    return () => {
      socket.current!.disconnect();
    };
  }, []);

  useEffect(() => {
    setNCount(notifications.length);
  }, [notifications]);
  setNCount(notifications.length);

  const content = (item: any, index: any) => {
    return (
      <>
        <Space style={{ width: "100%" }} direction="vertical">
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: item.active ? "#9ADE7B" : "#FFA447",
                  }}
                  icon={
                    item.active ? (
                      <NotificationOutlined />
                    ) : (
                      <ClockCircleOutlined />
                    )
                  }
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        </Space>
      </>
    );
  };

  return (
    <Drawer
      width={500}
      title={
        <div style={{ textAlign: "center" }}>
          <Title level={4}>
            {" "}
            <BellOutlined /> Notifications
          </Title>
        </div>
      }
      open={visible}
      onClose={showOrHideDrawer}
      destroyOnClose={true}
    >
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item, index) => content(item, index)}
      />
    </Drawer>
  );
};
export default NotificationDrawer;