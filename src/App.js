import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import layout
import MainLayout from "./layout/MainLayout";
import ProductLayout from "./layout/ProductLayout";

// import pages
import Home from "./page/HomePage";
import About from "./page/AboutPage";
import ProductsPage, { action, productsLoader } from "./page/ProductsPage";
import ProductDetailPage, { loader as detailLoader } from "./page/ProductDetailPage";
import NewProduct, { newAction } from "./page/newProduct";
import ErrorPage from "./component/ErrorPage";
import NotFound from "./component/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductLayout />}>
        <Route index element={<ProductsPage />} loader={productsLoader} action={action} errorElement={<ErrorPage />} />
        <Route path=":id/new" element={<NewProduct />} action={newAction} />
        <Route path=":id" element={<ProductDetailPage />} loader={detailLoader} />

      </Route>
      <Route path="about" element={<About />} />
    </Route>
  )
);
const App = () => <RouterProvider router={router} />;
export default App;
