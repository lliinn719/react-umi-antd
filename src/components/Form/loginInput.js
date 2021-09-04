/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './loginInput.less';
import { Form, Input, Button, Checkbox, Divider, Row, Col } from 'antd';
import { Link } from 'dva/router';
import images from '../../theme/images';
import { values } from 'lodash';

export default class LoginForm extends Component {
  onFinish = values => {
    console.log(values);
  };

  render() {
    const { login } = this.props;
    return (
      <Form name="basic" initialValues={{ remember: true }} onFinish={login}>
        <Form.Item
          label="帳號"
          name="email"
          rules={[{ required: true, message: '請填寫帳號' }]}
          className="inputBlock"
        >
          <Input className="inputStyle" />
        </Form.Item>

        <Form.Item
          label="密碼"
          name="password"
          rules={[{ required: true, message: '請填寫密碼' }]}
          className="inputBlock"
        >
          <Input.Password className="inputStyle" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" className="passwordBlock">
          <Checkbox>記住密碼</Checkbox>
          <Link to="/forget">
            <a className="login-form-forgot" href="#">
              忘記密碼？
            </a>
          </Link>
        </Form.Item>
        <Form.Item className="loginButton">
          {/* <Link to="/instruction"> */}
          <Button type="primary" htmlType="submit" className="buttonStyle">
            登入
          </Button>
          {/* </Link> */}
        </Form.Item>
        <Divider className="line">或者以第三方登入</Divider>
        <Row>
          <Col xs={{ span: 8 }} className="socialBlock">
            <img src={images.facebook} className="socialIcon" />
          </Col>
          <Col xs={{ span: 8 }} className="socialBlock">
            <img src={images.google} className="socialIcon" />
          </Col>
          <Col xs={{ span: 8 }} className="socialBlock">
            <img src={images.line} className="socialIcon" />
          </Col>
        </Row>
        <Row>
          <Col span={24} className="gotoSignUpBlock">
            <p>沒有帳號嗎？</p>
            <Link to="/signup">
              <p className="gotoSignUp">前往註冊</p>
            </Link>
          </Col>
        </Row>
      </Form>
    );
  }
}
