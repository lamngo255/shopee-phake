import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { path } from './constants/path';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout';

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <Home />
      </Route>
      <Route path={path.login}>
        <RegisterLayout title="Đăng nhập">
          <Login />
        </RegisterLayout>
      </Route>
      <Route path={path.register}>
        <RegisterLayout title="Đăng ký">
          <Register />
        </RegisterLayout>
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  );
}
