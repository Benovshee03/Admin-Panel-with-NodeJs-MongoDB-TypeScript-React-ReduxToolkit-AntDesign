import React from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { Product } from "../types";

interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const { product } = props;

  const exportToCategoryItem = (
    product: Product
  ): DescriptionsProps["items"] => {
    return (
      Object.entries(product)
        //.filter(([key, value]) => key !== "_id" && key !== "__v") -> gelen model içerisinden göstermek istemedğiniz alan var ise, kullanabilirsiniz.
        .map(([key, value]) => ({
          key,
          label: key.charAt(0).toUpperCase() + key.slice(1),
          children: value,
        }))
    );
  };
  return (
    <>
      {product && (
        <Descriptions
          labelStyle={{ width: "200px" }}
          size="middle"
          style={{ marginTop: "20px" }}
          bordered
          column={1}
          items={exportToCategoryItem(product!)}
        />
      )}
    </>
  );
};

export default ProductDetail;