import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const AddPayroll = lazy(() => import('../../container/payroll/create/AddPayroll'));
const AddAdvance = lazy(() => import('../../container/payroll/create/AddAdvance'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PayrollRoute() {
  return (
    <Routes>
      <Route path="create-payroll/*" element={<AddPayroll />} />
      <Route path="create-advance/*" element={<AddAdvance />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PayrollRoute;
