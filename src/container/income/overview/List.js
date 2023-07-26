import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Pagination, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';

function IncomeLists() {
  const income = useSelector((state) => state.incomes.data);
  const [state, setState] = useState({
    incomes: income,
    current: 0,
    pageSize: 0,
  });
  const { incomes } = state;

  useEffect(() => {
    if (income) {
      setState({
        incomes: income,
      });
    }
  }, [income]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  const dataSource = [];

  if (incomes.length)
    incomes.map((value) => {
      const { id, name, /* date, */ type, amount, userId, status } = value;
      return dataSource.push({
        key: id,
        income: (
          <ProjectListTitle>
            <Heading as="h4">
              <Link to={`/income/incomeDetails/${id}`}>{name}</Link>
            </Heading>
          </ProjectListTitle>
        ),
        // date: { date },
        type: { type },
        amount: { amount },
        userId: { userId },
        status: <Tag className={status}>{status}</Tag>,
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to="#">View</Link>
                <Link to="#">Edit</Link>
                <Link to="#">Delete</Link>
              </>
            }
          >
            <Link to="#">
              <UilEllipsisH />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'income',
      key: 'income',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => <p>{date}</p>,
    },
    {
      title: 'Category',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Created By',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
    <Row gutter={25}>
      <Col xs={24}>
        <Cards headless>
          <ProjectList>
            <div className="table-responsive">
              <Table pagination={false} dataSource={dataSource} columns={columns} />
            </div>
          </ProjectList>
        </Cards>
      </Col>
      <Col xs={24} className="pb-30">
        <ProjectPagination>
          {incomes.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
}

export default IncomeLists;
