import React, { lazy, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Routes, NavLink, Route, Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import CreateExpense from './overview/CreateExpense';
import { ProjectHeader, ProjectSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { filterProjectByStatus, sortingProjectByCategory } from '../../redux/project/actionCreator';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Expense() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);

  const [state, setState] = useState({
    notData: searchData,
    visible: false,
    categoryActive: 'all',
  });

  const { notData, visible } = state;
  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onSorting = (selectedItems) => {
    dispatch(sortingProjectByCategory(selectedItems));
  };

  const onChangeCategory = (value) => {
    setState({
      ...state,
      categoryActive: value,
    });
    dispatch(filterProjectByStatus(value));
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };
  const path = '.';
  return (
    <>
      <ProjectHeader>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title="Expenses"
          subTitle={<>12 Running Projects</>}
          buttons={[
            <Button onClick={showModal} key="1" type="primary" size="default">
              <UilPlus /> Create Expense
            </Button>,
          ]}
        />
      </ProjectHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className="project-sort-bar">
                <div className="project-sort-nav">
                  <nav>
                    <ul>
                      <li className={state.categoryActive === 'all' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('all')} to="#">
                          All
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'accepted' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('accepted')} to="#">
                          In Progress
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'pending' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('pending')} to="#">
                          Complete
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'denied' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('denied')} to="#">
                          Late
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'canceled' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('canceled')} to="#">
                          Early
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="project-sort-search">
                  <AutoComplete onSearch={handleSearch} dataSource={notData} placeholder="Search projects" patterns />
                </div>
                <div className="project-sort-group">
                  <div className="sort-group">
                    <span>Sort By:</span>
                    <Select onChange={onSorting} defaultValue="category">
                      <Select.Option value="category">Project Category</Select.Option>
                      <Select.Option value="rate">Top Rated</Select.Option>
                      <Select.Option value="popular">Popular</Select.Option>
                      <Select.Option value="time">Newest</Select.Option>
                      <Select.Option value="price">Price</Select.Option>
                    </Select>
                    <div className="layout-style">
                      <NavLink to={`${path}/grid`}>
                        <UilApps />
                      </NavLink>
                      <NavLink to={`${path}/list`}>
                        <UilListUl />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectSorting>
            <div>
              <Suspense
                fallback={
                  <div className="spin">
                    <Spin />
                  </div>
                }
              >
                <Routes>
                  <Route index element={<Grid />} />
                  <Route path="grid" element={<Grid />} />
                  <Route path="list" element={<List />} />
                </Routes>
              </Suspense>
            </div>
          </Col>
        </Row>
        <CreateExpense onCancel={onCancel} visible={visible} />
      </Main>
    </>
  );
}

export default Expense;
