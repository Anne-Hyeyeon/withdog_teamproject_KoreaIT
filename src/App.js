import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import AppFooter from './modules/views/AppFooter'
import { Routes, Route, Router } from 'react-router-dom';
import Main from './modules/views/Main';
import Test from './modules/views/hw/Test'
import Info from './modules/views/sh/Info'
import Blog from './modules/views/hy/Blog'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import MainRouter from './modules/components/MainRouter';

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
        <MainRouter />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
