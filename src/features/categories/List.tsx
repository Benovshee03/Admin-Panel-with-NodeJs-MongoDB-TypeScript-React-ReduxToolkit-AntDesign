import React, { useEffect } from "react";
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
  MenuProps,Menu
} from "antd";
import { CategoryType } from "./types";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteCategory, fetchCategories } from "./categorySlice";
import {
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card";
const List: React.FC = () => {
  const dispatch = UserAppDispatch();
  const categories = useAppSelector((state) => state.category.list);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onNavigate = () => {
    navigate("/create_category");
  };
  const onDeleteHandle=(e:any)=>{
  dispatch(deleteCategory(e))
  }
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "Details",
      key: "1",
      icon: <SearchOutlined />,
    },
    {
      label: "Edit",
      key: "2",
      icon: <EditOutlined />,
    },
    {
      label: "Delete",
      key: "3",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };


  const columns: TableProps<CategoryType>["columns"] | any = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "_id",
      render: (id: any) => {
        return (
          <Dropdown
            trigger={["click"]}
            dropdownRender={(menu) => (
              <div>
                <Menu>
                  <Menu.Item icon={<EditOutlined />}>Edit</Menu.Item>
                  <Menu.Item icon={<SearchOutlined />}>Details</Menu.Item>
                  <Menu.Item icon={<DeleteOutlined />} danger onClick={()=>onDeleteHandle(id)}> 
                    Delete 
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
  ];

  return (
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
            extra={<Button type="primary">Use Web </Button>}
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
              onClick={onNavigate}
              style={{ float: "right" }}
              type="primary"
              icon={<PlusOutlined />}
            >
              Yeni Kategori
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
            dataSource={categories}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default List;