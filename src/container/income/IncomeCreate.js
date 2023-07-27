import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Select, InputNumber, Upload, message, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import UilExport from '@iconscout/react-unicons/icons/uil-export';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilDollarAlt from '@iconscout/react-unicons/icons/uil-dollar-alt';
import { toast } from 'react-toastify';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main, BasicFormWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { AddProductForm } from '../ecommerce/Style';
import Heading from '../../components/heading/heading';
import { filterSinglePage } from '../../redux/typeIncome/actionCreator';
import { createIncome } from '../../redux/income/actionCreator';

const { Option } = Select;
const { Dragger } = Upload;
const dateFormat = 'DD/MM/YYYY';

function Income() {
  const PageRoutes = [
    {
      path: '/main',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Add Income',
    },
  ];
  const [form] = Form.useForm();
  const [state, setState] = useState({
    file: null,
    list: null,
    submitValues: {},
  });
  const dispatch = useDispatch();

  const [type, setType] = useState([]);
  const Type = async () => {
    try {
      const t = await dispatch(filterSinglePage());
      setType(t);
    } catch (err) {
      toast.error(err.Message);
    }
  };
  useEffect(() => {
    Type();
  }, []);

  const fileUploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setState({ ...state, file: info.file, list: info.fileList });
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    listType: 'picture',
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: <UilTrashAlt />,
    },
  };

  const handleSubmit = (values) => {
    dispatch(createIncome(values));
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Add Income" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless>
              <Row gutter={25} justify="center">
                <Col xxl={12} md={18} xs={24}>
                  <AddProductForm>
                    <Form style={{ width: '100%' }} form={form} name="addIncome" onFinish={handleSubmit}>
                      <BasicFormWrapper>
                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col xs={24}>
                              <div className="add-product-content">
                                <Cards title="Add new Income">
                                  <Form.Item name="name" label="Title">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="date" label="Date">
                                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                                  </Form.Item>
                                  <Form.Item name="description" label="Description">
                                    <Input.TextArea rows={5} />
                                  </Form.Item>
                                  <Form.Item name="typefinanceinId" initialValue="" label="Category">
                                    <Select style={{ width: '100%' }}>
                                      <Option value="">Loại khoản thu</Option>
                                      {type.map((item) => {
                                        return <Option value={item.id}>{item.name}</Option>;
                                      })}
                                    </Select>
                                  </Form.Item>
                                  <Form.Item name="amount" label="Amount">
                                    <div className="input-prepend-wrap">
                                      <span className="input-prepend">
                                        <UilDollarAlt />
                                      </span>
                                      <InputNumber style={{ width: '100%' }} />
                                    </div>
                                  </Form.Item>
                                </Cards>
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col xs={24}>
                              <div className="add-product-content">
                                <Cards title="Upload Document(s)">
                                  <Dragger {...fileUploadProps}>
                                    <p className="ant-upload-drag-icon">
                                      <UilExport />
                                    </p>
                                    <Heading as="h4" className="ant-upload-text">
                                      Drag and drop an image
                                    </Heading>
                                    <p className="ant-upload-hint">
                                      or <span>Browse</span> to choose a file
                                    </p>
                                  </Dragger>
                                </Cards>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="add-form-action">
                          <Form.Item>
                            <Button
                              className="btn-cancel"
                              size="large"
                              onClick={() => {
                                return form.resetFields();
                              }}
                            >
                              Cancel
                            </Button>
                            <Button size="large" htmlType="submit" type="primary" raised>
                              Save
                            </Button>
                          </Form.Item>
                        </div>
                      </BasicFormWrapper>
                    </Form>
                  </AddProductForm>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Income;
