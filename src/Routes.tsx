import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { path } from '@/constants/path';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login/Login';
import Register from '@/pages/Auth/Register/Register';
import User from '@/pages/User/User';
import NotFound from '@/pages/NotFound/NotFound';
import RegisterLayout from '@/layouts/RegisterLayout/RegisterLayout';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import UnauthenticatedGuard from '@/guards/UnauthenticatedGuard';
import AuthenticatedGuard from '@/guards/AuthenticatedGuard';
import CartLayout from '@/layouts/CartLayout/CartLayout';
import Cart from '@/pages/Cart/Cart';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
      <Route path={path.productDetail} exact>
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      </Route>
      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Login">
            <Login />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Register">
            <Register />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <User />
          </MainLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.cart}>
        <AuthenticatedGuard>
          <CartLayout>
            <Cart />
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
