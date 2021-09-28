// Functionality
import { useSelector } from "react-redux";
// Components
import Products from "../organisms/Products";
// Libs/styles
import { productSelector } from "../../features/selectors";

const ProductsPage = () => {
  const { items } = useSelector(productSelector);

  return (
    <>
      <Products items={items} />
    </>
  );
};

export default ProductsPage;
