/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './signupInput.less';
import { Form, Input, Button, Modal, Row, Col } from 'antd';
import { Link } from 'dva/router';
import { RollbackOutlined } from '@ant-design/icons';

export default class signupComponent extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { loading, visible } = this.state;
    return (
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="填寫暱稱"
          name="account"
          rules={[{ required: true, message: '請填寫暱稱' }]}
          className="inputBlock"
        >
          <Input className="inputStyle" placeholder="lliinn" />
        </Form.Item>
        <Form.Item
          label="填寫信箱"
          name="account"
          rules={[{ required: true, message: '請填寫信箱' }]}
          className="inputBlock"
        >
          <Input className="inputStyle" placeholder="qq123@gmail.com" />
        </Form.Item>
        <Form.Item
          label="填寫密碼"
          name="password"
          rules={[{ required: true, message: '請填寫密碼' }]}
          className="inputBlock"
        >
          <Input.Password className="inputStyle" />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="確認密碼"
          dependencies={['password']}
          hasFeedback
          className="inputBlock"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error('The two passwords that you entered do not match!'),
                );
              },
            }),
          ]}
        >
          <Input.Password className="inputStyle" />
        </Form.Item>
        <Form.Item className="loginButton">
          <Button type="primary" onClick={this.showModal} className="buttonStyle">
            註冊
          </Button>
          <Modal
            visible={visible}
            title="資料是否正確？"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                <Link to="/confirm">送出</Link>
              </Button>,
            ]}
          >
            <div>
              <p>暱稱：lliinn</p>
              <p>信箱：qq123@gmail.com</p>
              <p>密碼：123</p>
            </div>
          </Modal>
        </Form.Item>
      </Form>
    );
  }
}
