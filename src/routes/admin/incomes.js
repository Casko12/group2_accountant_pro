import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Income = lazy(() => import('../../container/income/Income'));
const IncomeDetails = lazy(() => import('../../container/income/IncomeDetails'));
const IncomeCreate = lazy(() => import('../../container/income/IncomeCreate'));
const NotFound = lazy(() => import('../../container/pages/404'));

function IncomeRoutes() {
  return (
    <Routes>
      <Route path="incomeDetails/*" element={<IncomeDetails />} />
      <Route path="view/*" element={<Income />} />
      <Route path="create/*" element={<IncomeCreate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default IncomeRoutes;
