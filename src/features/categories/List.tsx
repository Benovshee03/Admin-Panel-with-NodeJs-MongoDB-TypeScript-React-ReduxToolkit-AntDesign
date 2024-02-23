import React, { useEffect, useState } from "react";
import { Row,Col, Table,Result,Button } from "antd";
import {  columns} from "./types";
import { UserAppDispatch,useAppSelector } from "../../app/hooks";
import { fetchCategories } from "./categorySlice";



const List: React.FC = () => {
  const dispatch = UserAppDispatch()
  const categories = useAppSelector((state)=>state.category.list)
  useEffect(()=>{dispatch(fetchCategories())},[dispatch])
  return (
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
          extra={<Button type="primary">Open with Browser</Button>}
        />
      </Col>
      <Col 
      xs={{span:24,offset:0}}
      sm={{span:24,offset:0}}
      md={{span:24,offset:0}}
      lg={{span:24,offset:0}}
      xl={{span:24,offset:0}}
      xxl={{span:24,offset:0}}
      >
      <Table locale={{emptyText:"Qismet bir gun data geler"}} columns={columns} dataSource={categories} />
      </Col>
    </Row>
  );
};

export default List;
