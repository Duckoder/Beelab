import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import SizeChart from '~/pages/SizeChart';
import ProductDetail from '~/pages/ProductDetail';
import ReturnPolicy from '~/pages/ReturnPolicy';
import About from '~/pages/About';
import LoginPage from '~/pages/Login';
import ChangePass from '~/pages/ChangePass';
import RegisterPage from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import Payment from '~/pages/Payment';
import AdminHome from '~/pages/Admin/AdminHome';
import CategoryManager from '~/pages/Admin/CategoryManager';
import ProductManager from '~/pages/Admin/ProductManager';
import UserManager from '~/pages/Admin/UserManager';
import RoleManager from '~/pages/Admin/RoleManager';
import EditProduct from '~/pages/Admin/EditProduct';
import Bill from '~/pages/Admin/Bill';
import BillDetail from '~/pages/Admin/BillDetail';
import CreateProduct from '~/pages/Admin/CreateProduct';
import PaymentResult from '~/pages/PaymentResult';
import FinacialReport from '~/pages/Admin/FinancialReport';
import ProductReport from '~/pages/Admin/ProductReport';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product/:category', component: Product },
  { path: '/cartproduct', component: Cart },
  { path: '/size', component: SizeChart },
  { path: '/product-detail/:productId', component: ProductDetail },
  { path: '/return-policy', component: ReturnPolicy },
  { path: '/about', component: About },
  { path: '/login-page', component: LoginPage, layout: null },
  { path: '/change-pass', component: ChangePass, layout: null },
  { path: '/register-page', component: RegisterPage, layout: null },
  { path: '/forgot-pass', component: ForgotPassword, layout: null },
  { path: '/payment', component: Payment, layout: null },
  { path: '/payment-result/:paymentStatus', component: PaymentResult, layout: null },
  { path: '/adminpage', component: AdminHome, layout: 0 },
  { path: '/adminpage/category-manager', component: CategoryManager, layout: 0 },
  { path: '/adminpage/product-manager', component: ProductManager, layout: 0 },
  { path: '/adminpage/user-manager', component: UserManager, layout: 0 },
  { path: '/adminpage/role-manager', component: RoleManager, layout: 0 },
  { path: '/adminpage/bill', component: Bill, layout: 0 },
  { path: '/adminpage/product-manager/create-product', component: CreateProduct, layout: 0 },
  { path: '/adminpage/product-manager/edit/:productId', component: EditProduct, layout: 0 },
  { path: '/adminpage/bill/bill-detail', component: BillDetail, layout: 0 },
  { path: '/adminpage/finacial-report', component: FinacialReport, layout: 0 },
  { path: '/adminpage/product-report', component: ProductReport, layout: 0 },
];
//private routes, user must login to see
const privateRoutes = [];
export { publicRoutes, privateRoutes };
