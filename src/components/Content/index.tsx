import { useNavigate } from "react-router-dom";
import { Button } from "antd";
function Content() {
  const navigate = useNavigate()
  const product = ()=>{
    navigate("/api/products")
  }
  const categories = ()=>{
    navigate("/api/categories")
  }
  return (
    <>
      <Button onClick={categories}>Go to the Category Page</Button>
      <Button onClick={product}>Go to the Product Page</Button>
    </>
  );
}

export default Content;
