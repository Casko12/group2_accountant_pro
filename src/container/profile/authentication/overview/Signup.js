import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { Row, Col, Form, Input, Button } from 'antd';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';

import { useDispatch } from 'react-redux';
import { AuthFormWrap } from './style';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { register } from '../../../../redux/authentication/actionCreator';

function SignUp() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    values: null,
    checked: null,
  });
  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Sign Up HexaDash</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="register" onFinish={handleSubmit} layout="vertical">
              <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input your Full name!' }]}>
                <Input placeholder="Full name" />
              </Form.Item>
              <Form.Item
                name="Email"
                label="Email Address"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              {/* <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                rules={[{ required: true, message: 'Please input your Confirmpassword!' }]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item> */}
              {/* <Form.Item
                label="Birthday"
                name="birthday"
                rules={[{ required: true, message: 'Please input your birthday!' }]}
              >
                <Input placeholder="Birthday" />
              </Form.Item> */}
              <Form.Item
                label="Address"
                name="Address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input placeholder="Address" />
              </Form.Item>
              <Form.Item
                label="Telephone"
                name="Telephone"
                rules={[{ required: true, message: 'Please input your telephone!' }]}
              >
                <Input placeholder="Telephone" />
              </Form.Item>
              <Form.Item label="Role" name="Role" rules={[{ required: true, message: 'Please input your role!' }]}>
                <Input placeholder="Role" />
              </Form.Item>
              <Form.Item
                label="Permission"
                name="Permission"
                rules={[{ required: true, message: 'Please input your permission!' }]}
              >
                <Input placeholder="Permission" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
                <Checkbox onChange={onChange} checked={state.checked}>
                  Creating an account means you’re okay with our Terms of Service and Privacy Policy
                </Checkbox>
              </div>
              <Form.Item>
                <Button className="btn-create" htmlType="submit" type="primary" size="large">
                  Create Account
                </Button>
              </Form.Item>
              <p className="ninjadash-form-divider">
                <span>Or</span>
              </p>
              <ul className="ninjadash-social-login">
                <li>
                  <Link className="google-social" to="#">
                    <ReactSVG src={require(`../../../../static/img/icon/google-plus.svg`).default} />
                  </Link>
                </li>
                <li>
                  <Link className="facebook-social" to="#">
                    <UilFacebook />
                  </Link>
                </li>
                <li>
                  <Link className="twitter-social" to="#">
                    <UilTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="github-social" to="#">
                    <UilGithub />
                  </Link>
                </li>
              </ul>
            </Form>
          </div>
          <div className="ninjadash-authentication-bottom">
            <p>
              Already have an account?<Link to="/">Sign In</Link>
            </p>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignUp;
