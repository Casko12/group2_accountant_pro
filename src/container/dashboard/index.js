import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const OverviewDataList = lazy(() => import('./overview/index/OverviewDataList'));
const SalesReport = lazy(() => import('./overview/index/SalesReport'));
const SalesGrowth = lazy(() => import('./overview/index/SalesGrowth'));
const TopSellingProduct = lazy(() => import('./overview/index/TopSellingProducts'));
const BrowserState = lazy(() => import('./overview/index/BrowserState'));
const Calender = lazy(() => import('./overview/demoFive/CalendarHead'));

function Dashboard() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Home',
    },
    {
      path: 'first',
      breadcrumbName: 'Overview',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Dashboard" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataList />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesReport />
            </Suspense>
          </Col>
          <Col xxl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesGrowth />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Calender />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopSellingProduct />
            </Suspense>
          </Col>
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <BrowserState />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Dashboard;
