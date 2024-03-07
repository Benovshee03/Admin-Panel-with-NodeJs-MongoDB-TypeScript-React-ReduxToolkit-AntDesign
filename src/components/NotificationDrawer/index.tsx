import React from "react";
import { Space, Drawer, Avatar, List, Steps, StepsProps } from "antd";

interface NotificationDrawerProps {
  visible: boolean;
  showOrHideDrawer: () => void;
  notificationCount: number;
}

const NotificationDrawer = (props: NotificationDrawerProps) => {
  const { visible, showOrHideDrawer } = props;
  const data = [
    {
      title: "Ant Design Title 1",
      current: 0,
    },
    {
      title: "Ant Design Title 2",
      current: 1,
      status: "error",
    },
    {
      title: "Ant Design Title 3",
      current: 2,
    },
    {
      title: "Ant Design Title 4",
      current: 1,
    },
  ];

  const items = [
    {
      title: "Step 1",
      description: "This is a Step 1.",
    },
    {
      title: "Step 2",
      description: "This is a Step 2.",
    },
    {
      title: "Step 3",
      description: "This is a Step 3.",
    },
  ];
  const content = (item: any, index: any) => {
    return (
      <>
        <Space style={{ width: "100%" }} direction="vertical">
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
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
      title={"Notifications"}
      open={visible}
      onClose={showOrHideDrawer}
      destroyOnClose={true}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => content(item, index)}
      />
    </Drawer>
  );
};
export default NotificationDrawer;