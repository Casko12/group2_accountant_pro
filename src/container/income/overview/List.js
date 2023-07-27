import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Pagination, Modal, Button, Tag } from 'antd';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { deleteIncome } from '../../../redux/income/actionCreator';

function IncomeLists() {
  const income = useSelector((state) => state.income.data);
  console.log(income);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    incomes: income,
    current: 0,
    pageSize: 0,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (event) => {
    const id = event.target.dataset.value;
    dispatch(deleteIncome(id));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
  if (incomes && incomes.length)
    incomes.map((value) => {
      const { id, name, date, type, amount, status, userCreate } = value;
      let statusText = '';
      if (status === 1) {
        statusText = 'Active';
      } else if (status === 2) {
        statusText = 'Pending';
      } else if (status === 3) {
        statusText = 'Canceling';
      } else if (status === 4) {
        statusText = 'DeActive';
      } else {
        statusText = 'Not Accept';
      }
      const currentDate = new Date(date);
      return dataSource.push({
        key: id,
        income: (
          <ProjectListTitle>
            <Heading as="h4">
              <Link to={`/income/incomeDetails/${id}`}>{name}</Link>
            </Heading>
          </ProjectListTitle>
        ),
        date: format(currentDate, 'dd/MM/yyyy'),
        type,
        amount,
        userCreate,
        status: <Tag className="green">{statusText}</Tag>,
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to="#">View</Link>

                <Link to="#">Edit</Link>

                <Button className="btn btn-danger" data-value={id} onClick={showModal}>
                  Delete
                </Button>
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
      // render: (date) => <p>{date}</p>,
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
      dataIndex: 'userCreate',
      key: 'userCreate',
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
      <Modal title="Xác nhận xóa dữ liệu" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Bạn có chắc chắn muốn xóa dữ liệu không?</p>
      </Modal>
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
          {incomes && incomes.length ? (
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
