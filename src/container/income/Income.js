import React, { lazy, useState, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Routes, NavLink, Route, Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import CreateIncome from './overview/CreateIncome';
import { ProjectHeader, ProjectSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';

import {
  filterIncomeByStatus,
  sortingIncomeByCategory,
  searchIncome,
  getIncome,
} from '../../redux/income/actionCreator';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Income() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);
  const [income, setIncome] = useState([]);
  const [state, setState] = useState({
    notData: searchData,
    visible: false,
    categoryActive: 'all',
    searchText: null,
  });
  const inc = () => {
    const i = dispatch(getIncome());
    setIncome({
      income: i,
    });
  };
  useEffect(() => {
    inc();
  }, []);
  const { notData, visible } = state;
  const handleSearch = async (searchText) => {
    const data = await dispatch(searchIncome(searchText));
    setState({
      ...state,
      notData: data,
    });
  };

  const onSorting = async (selectedItems) => {
    const i = await dispatch(sortingIncomeByCategory(selectedItems));
    setIncome({
      income: i,
    });
  };

  const onChangeCategory = (value) => {
    setState({
      ...state,
      categoryActive: value,
    });
    dispatch(filterIncomeByStatus(value));
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
          title="Incomes"
          subTitle={<>Income List</>}
          buttons={[
            <Button type="primary" size="default">
              <Link to="/admin/income/create">
                <UilPlus /> Create Income
              </Link>
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
                      <li className={state.categoryActive === 5 ? 1 : 2}>
                        <Link onClick={() => onChangeCategory(5)} to="#">
                          All
                        </Link>
                      </li>
                      <li className={state.categoryActive === 1 ? 1 : 2}>
                        <Link onClick={() => onChangeCategory(1)} to="#">
                          Active
                        </Link>
                      </li>
                      <li className={state.categoryActive === 2 ? 2 : 3}>
                        <Link onClick={() => onChangeCategory(2)} to="#">
                          Pending
                        </Link>
                      </li>
                      <li className={state.categoryActive === 3 ? 3 : 4}>
                        <Link onClick={() => onChangeCategory('3')} to="#">
                          Canceling
                        </Link>
                      </li>
                      <li className={state.categoryActive === 4 ? 4 : 0}>
                        <Link onClick={() => onChangeCategory('4')} to="#">
                          DeActive
                        </Link>
                      </li>
                      <li className={state.categoryActive === 0 ? 0 : 1}>
                        <Link onClick={() => onChangeCategory(0)} to="#">
                          Not Accept
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="project-sort-search">
                  <AutoComplete onSearch={handleSearch} dataSource={notData} placeholder="Search income" patterns />
                </div>
                <div className="project-sort-group">
                  <div className="sort-group">
                    <span>Sort By:</span>
                    <Select onChange={onSorting} defaultValue="Date">
                      <Select.Option value="Date">Date</Select.Option>
                      <Select.Option value="Name">Title</Select.Option>
                      <Select.Option value="Amount">Amount</Select.Option>
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
                  <Route path="list" element={<List income={income} />} />
                </Routes>
              </Suspense>
            </div>
          </Col>
        </Row>
        <CreateIncome onCancel={onCancel} visible={visible} />
      </Main>
    </>
  );
}

export default Income;
