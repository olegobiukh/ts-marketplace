import Home from "../containers/Home";
import Wishlist from "../containers/Wishlist";
import Catalog from "../containers/Catalog";
import Cart from "../containers/Cart";
import Product from "../containers/Product";

export default [
  {
    url: "/",
    component: Home,
  },
  {
    url: "/catalog",
    component: Catalog,
  },
  {
    url: "/wishlist",
    component: Wishlist,
  },
  {
    url: "/cart",
    component: Cart,
  },
  {
    url: "/product",
    component: Product,
  },
];
