import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import SizeChart from '~/pages/SizeChart';
import ProductDetail from '~/pages/ProductDetail';

//public routes, user mustn't login to see
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/cartproduct', component: Cart },
  { path: '/size', component: SizeChart },
  { path: '/product-detail', component: ProductDetail},
];
//private routes, user must login to see
const privateRoutes = [];
export { publicRoutes, privateRoutes };
