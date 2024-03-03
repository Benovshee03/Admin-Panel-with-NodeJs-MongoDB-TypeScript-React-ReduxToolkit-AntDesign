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
import { Product, ProductType } from "./types";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteProduct,
  fetchProducts,
  fetchProduct,
  updateProduct,
} from "./productSlice";
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
import ProductDetail from "./components/productDetail";
import FormComponent from "./components/formComponent";

const List: React.FC = () => {
  const [open, setOpen] = useState({
    open: false,
    content: "",
  });


  const dispatch = UserAppDispatch();
  const products = useAppSelector((state) => state.product.list);
  const product = useAppSelector((state) => state.product.selected);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onDetailsHandle = useCallback(
    (e: boolean, id?: string) => {
      setOpen({
        open: e,
        content: "details",
      });
      if (id) {
        dispatch(fetchProduct(id));
      }
    },
    [dispatch]
  );

  const onDeleteHandle = useCallback(
    (e: any) => {
      dispatch(deleteProduct(e));
    },
    [dispatch]
  );
  
  const onEditHandle = useCallback(
    (e: boolean, id?: string) => {
      if (id) {
        dispatch(fetchProduct(id));
      }
      setOpen({
        open: e,
        content: "edit",
      });
    },
    [dispatch]
  );

  const onFinish = (values: any) => {
    dispatch(updateProduct(values));
    setOpen({ open: false, content: "" });
  };

  const onNavigate = () => navigate("/api/product/create");

  type ColumnType = TableProps<ProductType>["columns"] | any;
  const columns: ColumnType = useMemo(
    () => [
      {
        title: "Product Name",
        dataIndex: "productName",
        key: `productName`,
      },
      {
        title: "Description",
        dataIndex: "description",
        key: `description`,
      },
      {
        title: "Unit Price",
        dataIndex: "unitPrice",
        key: `unitPrice`,
      },
      {
        title: "Unit in Stock",
        dataIndex: "unitsInStock",
        key: `unitsInStock`,
      },
      {
        title: "Category Name",
        dataIndex: "categoryId",
        key: `categoryId`,
      },
      {
        title: "Actions",
        key: `actions`,
        dataIndex: "_id",
        render: (id: any) => {
          return (
            <Dropdown
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  <Menu>
                    <Menu.Item
                      key={`edit_${id}`}
                      onClick={() => onEditHandle(true, id)}
                      icon={<EditOutlined />}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      key={`details_${id}`}
                      onClick={() => onDetailsHandle(true, id)}
                      icon={<SearchOutlined />}
                    >
                      Details
                    </Menu.Item>
                    <Menu.Item
                      key={`delete_${id}`}
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
              extra={<Button type="primary">Open in web browser</Button>}
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
                New Product
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
              dataSource={products}
            />
          </Col>
        </Row>
      </Card>

      {open.content === "details" ? (
        <CustomModal
          title={`Product Details`}
          width={1200}
          open={open.open}
          onOpenHandler={onDetailsHandle}
          content={<ProductDetail product={product} />}
        />
      ) : (
        <CustomModal
          title={`Product Edit`}
          width={700}
          open={open.open}
          onOpenHandler={onEditHandle}
          content={
            <FormComponent onFinish={onFinish} initialValues={product} />
          }
        />
      )}
    </>
  );
};

export default List;
