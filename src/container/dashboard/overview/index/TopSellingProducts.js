import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { TopSellerWrap } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

const sellingColumns = [
  {
    title: 'Title',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date created',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Created by',
    dataIndex: 'userCreate',
    key: 'userCreate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
  },
];

const TopSellingProduct = React.memo(() => {
  const income = useSelector((state) => state.income.data);
  const [state, setState] = useState({
    sellingTab: 'today',
    incomes: income,
  });

  // const dispatch = useDispatch();
  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellingTab: value,
    });
  };
  const { incomes } = state;
  useEffect(() => {
    if (income) {
      setState({
        incomes: income,
      });
    }
  }, [incomes]);
  /* State destructuring */
  const { sellingTab } = state;

  const sellingData = [];
  if (incomes !== null) {
    incomes.map((value) => {
      const { key, name, amount, date, type, userCreate } = value;
      const currentDate = new Date(date);
      return sellingData.push({
        key,
        name: (
          <div className="product-info align-center-v">
            <span className="product-name">{name}</span>
          </div>
        ),
        amount,
        date: format(currentDate, 'dd/MM/yyyy'),
        type,
        userCreate,
      });
    });
  }

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={sellingTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={(e) => handleChangePeriod('today', e)} to="#">
                    Today
                  </Link>
                </li>
                <li className={sellingTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(e) => handleChangePeriod('week', e)} to="#">
                    Week
                  </Link>
                </li>
                <li className={sellingTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(e) => handleChangePeriod('month', e)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Incomes List"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <TopSellerWrap>
              <div className="table-bordered top-seller-table table-responsive">
                <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
              </div>
            </TopSellerWrap>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default TopSellingProduct;
