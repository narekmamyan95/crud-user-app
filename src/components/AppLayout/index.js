import React from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const AppLayout = () => {
  return (
    <div style={{minHeight: '100vh'}}>
      <AppHeader />
      <main style={{height: 'calc(100vh - 100px)', boxSizing: 'border-box', padding: 20}}>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
