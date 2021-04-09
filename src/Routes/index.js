import HomePage from "../Templates/UserTemplate/HomePage/index.jsx";
import ProductDetailPage from "../Templates/UserTemplate/ProductDetailPage/index.jsx";

const HomeAndProductDetailRoutes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/products/:productId",
    exact: true,
    component: ProductDetailPage,
  }
]

export default HomeAndProductDetailRoutes;