import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { TopSellerWrap } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import topProduct from '../../../../demoData/table-data.json';

const { topSaleProduct } = topProduct;

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
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Date created',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Created by',
    dataIndex: 'revenue',
    key: 'revenue',
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
  const [state, setState] = useState({
    sellingTab: 'today',
  });

  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellingTab: value,
    });
  };

  /* State destructuring */
  const { sellingTab } = state;

  const sellingData = [];
  if (topSaleProduct !== null) {
    topSaleProduct[sellingTab].map((value) => {
      const { key, name, img, price, sold, revenue } = value;
      return sellingData.push({
        key,
        name: (
          <div className="product-info align-center-v">
            <div className="product-img">
              <img src={require(`../../../../static/img/products/electronics/${img}`)} alt="" />
            </div>
            <span className="product-name">{name}</span>
          </div>
        ),
        price,
        sold,
        revenue,
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
