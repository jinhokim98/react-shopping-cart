import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ShoppingCartOverview from './components/ShoppingCartOverview/ShoppingCartOverview';
import OrderInfo from './components/OrderInfo/OrderInfo';
import { ROUTER_URLS } from './constants/constants';
import ProductList from './components/Admin/ProductList/ProductList';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        path: ROUTER_URLS.MAIN,
        element: <ShoppingCartOverview />,
      },
      {
        path: ROUTER_URLS.ORDER_INFO,
        element: <OrderInfo />,
        errorElement: <div>이상해요</div>,
      },
      {
        path: ROUTER_URLS.ADMIN,
        element: <ProductList />,
      },
    ],
    errorElement: <div>이상해요</div>,
  },
]);

export default router;
