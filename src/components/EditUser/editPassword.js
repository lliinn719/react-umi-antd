import React, { Component } from 'react';
import './editPassword.less';
import { Form, Input, Button } from 'antd';
import { Link } from 'dva/router';
import { EditOutlined } from '@ant-design/icons';

export default class EditPassword extends Component {
  state = {};

  render() {
    return (
      <div>
        <Form name="basic">
          <Form.Item
            label="輸入舊密碼"
            name="oldPassword"
            rules={[{ required: true, message: '請填寫密碼!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="輸入新密碼"
            rules={[
              {
                required: true,
                message: '請填寫密碼!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="新密碼確認"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '請填寫密碼!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('密碼輸入不相符!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <div className="savePassword">
              <Link to="/edit">
                <Button type="primary">儲存變更</Button>
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
