/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './forgetInput.less';
import { Form, Input, Button } from 'antd';
import { Link } from 'dva/router';

export default class ForgetComponent extends Component {
  state = {};

  render() {
    return (
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="輸入信箱"
          name="email"
          className="inputBlock"
          rules={[{ required: true, message: '請填寫信箱' }]}
        >
          <Input className="inputStyle" placeholder="qq123@gmail.com" />
        </Form.Item>

        <Button type="primary" className="getVerification">
          獲取驗證碼
        </Button>
        <Form.Item
          label="輸入驗證碼"
          name="account"
          rules={[{ required: true, message: '請填寫驗證碼' }]}
          className="inputBlock"
        >
          <Input className="inputStyle" />
        </Form.Item>
        <Form.Item className="loginButton">
          <Link to="/login">
            <Button type="primary">送出</Button>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}
