import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Product from '~/pages/Product';

//public routes, user mustn't login to see
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product', component: Product, layout: HeaderOnly },
];

//private routes, user must login to see
const privateRoutes = [];

export { publicRoutes, privateRoutes };
