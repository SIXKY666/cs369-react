import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../component/Spinner";
import "../App.css";
const ProductLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold underline-offset-1">Products</h1>
      <div className="container flex flex-col justify-center">
        {navigation.state === "loading" ? <Spinner /> : ""}
        <Outlet />
      </div>
    </div>
  );
};
export default ProductLayout;