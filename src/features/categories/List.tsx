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
} from "antd";
import { CategoryType } from "./types";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteCategory,
  fetchCategories,
  fetchCategory,
  updateCategory
} from "./categorySlice";
import {
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card";
import CustomModal from "../../components/Modal";
import CategoryDetail from "./components/categoryDetail";
import FormComponent from "./components/formComponent";
const List: React.FC = () => {
  const dispatch = UserAppDispatch();
  const navigate = useNavigate();

  const categories = useAppSelector((state) => state.category.list);
  const category = useAppSelector((state) => state.category.selected);
  const [open, setOpen] = useState({
    open: false,
    content: "",
  });
  const [openDetail, setopenDetail] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    category &&
      setContent(
        open.content === "details" ? (
          <CategoryDetail category={category} />
        ) : (
          <FormComponent onFinish={onFinish} initialValues={category} />
        )
      );
  }, [category]);
  const OnDetailsHandle = (e: boolean, id?: string) => {
    if (id) {
      dispatch(fetchCategory(id!));
      setContent(category?.categoryName);
    }
    setopenDetail(e);
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const onDeleteHandle = useCallback(
    (e: any) => {
      dispatch(deleteCategory(e));
    },
    [dispatch]
  );

  const onEditHandle = (e: boolean, id?: string) => {
    if (id) {
      dispatch(fetchCategory(id));
    }
    setOpen({
      open: e,
      content: "edit",
    });
  };
  const onFinish = (values: any) => {
    dispatch(updateCategory(values));
    navigate("/categories");
  };
  const onNavigate = () => {
    navigate("/create_category");
  };

  type ColumnType = TableProps<CategoryType>["columns"] | any;

  // useMemo kullanicaz
  const columns: ColumnType = useMemo(
    () => [
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
                    <Menu.Item
                     onClick={() => onEditHandle(true, id)}
                      icon={<EditOutlined />}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => OnDetailsHandle(true, id)}
                      icon={<SearchOutlined />}
                    >
                      Details
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => onDeleteHandle(id)}
                      icon={<DeleteOutlined />}
                      danger
                    >
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
              extra={
                <Button type="primary">Please, open in web browser</Button>
              }
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
      <CustomModal
        title="Category Details"
        width={500}
        open={open.open}
        onOpenHandler={OnDetailsHandle}
        content={<div>{content}</div>}
      />
    </>
  );
};

export default List;
