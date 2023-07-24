import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BrowserStateWrap } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import browserStates from '../../../../demoData/table-data.json';

const { browserState } = browserStates;

const BrowserState = React.memo(() => {
  const [state, setState] = useState({
    browserTab: 'today',
  });

  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      browserTab: value,
    });
  };

  /* State destructuring */
  const { browserTab } = state;

  const browserData = [];

  if (browserState !== null) {
    browserState[browserTab].map((value) => {
      const { key, name, img, session, bounceRate, cte, goalRate } = value;
      return browserData.push({
        key,
        browser: (
          <div className="ninjadash-product-info align-center-v">
            <div className="ninjadash-product-img">
              <img src={require(`../../../../static/img/browser/${img}`)} alt="ninjadash browser" />
            </div>
            <span className="ninjadash-product-name">{name}</span>
          </div>
        ),
        session,
        bounceRate,
        cte,
        goalRate,
      });
    });
  }

  const browserColumns = [
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

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={browserTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={(e) => handleChangePeriod('today', e)} to="#">
                    Today
                  </Link>
                </li>
                <li className={browserTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(e) => handleChangePeriod('week', e)} to="#">
                    Week
                  </Link>
                </li>
                <li className={browserTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(e) => handleChangePeriod('month', e)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Expenses List"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <BrowserStateWrap>
              <div className="table-bordered browser-state-table table-responsive">
                <Table columns={browserColumns} dataSource={browserData} pagination={false} />
              </div>
            </BrowserStateWrap>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default BrowserState;
