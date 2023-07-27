import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const AddUser = lazy(() => import('../../container/users/AddUsers'));
const Team = lazy(() => import('../../container/users/Team'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="add-user/*" element={<AddUser />} />
      <Route path="list" element={<Team />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
