import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import SizeChart from '~/pages/SizeChart';
import ProductDetail from '~/pages/ProductDetail';
import LoginPage from '~/pages/Login';
import RegisterPage from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/cartproduct', component: Cart },
  { path: '/size', component: SizeChart },
  { path: '/product-detail', component: ProductDetail },
  { path: '/login-page', component: LoginPage, layout: null },
  { path: '/register-page', component: RegisterPage, layout: null },
  { path: '/forgot-pass', component: ForgotPassword, layout: null },
];
//private routes, user must login to see
const privateRoutes = [];
export { publicRoutes, privateRoutes };
