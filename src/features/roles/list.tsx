import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Row,
  Table,
  Col,
  Result,
  Button,
  Tooltip,
  TableProps,
  Dropdown,
  Space,
  Menu,
  Popconfirm,
} from "antd";
import { RoleType } from "./types";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteRole,
  fetchRoles, 
} from "./roleSlice";
import { 
  PlusOutlined,
  SettingOutlined, 
  DeleteOutlined, 
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card"; 

const List: React.FC = () => { 

  const dispatch = UserAppDispatch();
  const roles = useAppSelector((state) => state.roles.list);  
  

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

 

  const onDeleteHandle = useCallback(
    (e: any) => {
      dispatch(deleteRole(e));
    },
    [dispatch]
  ); 

  const onNavigateToCreate = () => navigate("/admin/roles/create"); 

  type ColumnType = TableProps<RoleType>["columns"] | any;
  const columns: ColumnType = useMemo(
    () => [
      {
        title: "Role Name",
        dataIndex: "name",
        key: `name`,
      },
      {
        title: "Actions",
        key: `actions`,
        dataIndex: "_id",
        render: (_: any) => {
          return (
            <Dropdown
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  <Menu>
                    <Menu.Item
                      key={`delete_${_}`}
                      icon={<DeleteOutlined />}
                      danger
                    >
                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => onDeleteHandle(_)}
                      >
                        Delete
                      </Popconfirm>
                    </Menu.Item>
                  </Menu>
                </div>
              )}
            >
              <Button size={"middle"}>
                <Space>
                  <SettingOutlined />
                </Space>
              </Button>
            </Dropdown>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Card>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 0, offset: 0 }}
          >
            <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Pervin Nerdesin?</Button>}
            />
          </Col>
          <Col
            xs={{ span: 0, offset: 0 }}
            sm={{ span: 0, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
            style={{ marginBottom: 16 }}
          >
            <Tooltip title="Create">
              <Button
                onClick={onNavigateToCreate}
                style={{ float: "right" }}
                type="primary"
                icon={<PlusOutlined />}
              >
                Yeni Role
              </Button>
            </Tooltip>
          </Col>
          <Col span={24}>
            <Table
              size="middle"
              locale={{
                emptyText: "Data Yok :(",
                filterSearchPlaceholder: "Ara",
              }}
              columns={columns}
              dataSource={roles}
            />
          </Col>
        </Row>
      </Card> 
    </>
  );
};

export default List;