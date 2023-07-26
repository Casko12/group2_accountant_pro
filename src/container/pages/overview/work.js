import React, { useState } from 'react';
import { Row, Col, Form, DatePicker, Radio, Select } from 'antd';
import { Link } from 'react-router-dom';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const dateFormat = 'DD/MM/YYYY';
const { Option } = Select;

function Work() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: '',
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xxl={10} xl={14} md={16} xs={24}>
        <div className="user-work-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="work" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Work Information
              </Heading>

              <Form.Item name="department" initialValue="" label="Department">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="dept1">Dept 1</Option>
                  <Option value="dept2">Dept 2</Option>
                  <Option value="dept3">Dept 3</Option>
                </Select>
              </Form.Item>

              <Form.Item name="position" initialValue="" label="Position">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="staff">Staff</Option>
                  <Option value="leader">Leader</Option>
                  <Option value="manager">Manager</Option>
                </Select>
              </Form.Item>

              <Form.Item name="hiringDate" rules={[{ type: 'object', whitespace: true }]} label="Hiring Date">
                <DatePicker format={dateFormat} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="status" initialValue="active" label="Status">
                <Radio.Group>
                  <Radio value="active">Active</Radio>
                  <Radio value="deactivated">Deactivated</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    type="default"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Reset
                  </Button>
                  <Button htmlType="submit" type="primary">
                    <Link to="/admin/users/add-user/social">Next</Link>
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
}

export default Work;
