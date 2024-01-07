import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import SizeChart from '~/pages/SizeChart';
import ProductDetail from '~/pages/ProductDetail';
import ReturnPolicy from '~/pages/ReturnPolicy';
import About from '~/pages/About';
import LoginPage from '~/pages/Login';
import RegisterPage from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import AdminHome from '~/pages/Admin/AdminHome';
import AllProduct from '~/pages/Admin/AllProduct';
import Bill from '~/pages/Admin/Bill';
import Accessory from '~/pages/Admin/Accessory';
import Jacket from '~/pages/Admin/Jacker';
import Pants from '~/pages/Admin/Pants';
import Shirt from '~/pages/Admin/Shirt';
import Customer from '~/pages/Admin/Customer';
import Staff from '~/pages/Admin/Staff';
import Manager from '~/pages/Admin/Manager';
import Payment from '~/pages/Payment';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product/:category', component: Product },
  { path: '/cartproduct', component: Cart },
  { path: '/size', component: SizeChart },
  { path: '/product-detail/:productId', component: ProductDetail },
  { path: '/return-policy', component: ReturnPolicy },
  { path: '/about', component: About },
  { path: '/login-page', component: LoginPage, layout: null },
  { path: '/register-page', component: RegisterPage, layout: null },
  { path: '/forgot-pass', component: ForgotPassword, layout: null },
  { path: '/payment', component: Payment, layout: null },
  { path: '/adminpage', component: AdminHome, layout: 0 },
  { path: '/customer', component: Customer, layout: 0 },
  { path: '/allproduct', component: AllProduct, layout: 0 },
  { path: '/shirt', component: Shirt, layout: 0 },
  { path: '/accessory', component: Accessory, layout: 0 },
  { path: '/jacket', component: Jacket, layout: 0 },
  { path: '/pants', component: Pants, layout: 0 },
  { path: '/staff', component: Staff, layout: 0 },
  { path: '/manager', component: Manager, layout: 0 },
  { path: '/bill', component: Bill, layout: 0 },
];
//private routes, user must login to see
const privateRoutes = [];
export { publicRoutes, privateRoutes };
