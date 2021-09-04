import React, { Component } from 'react';
import './createBaby.less';
import { Form, Input, Button, Radio, Select, DatePicker, Modal } from 'antd';
import { Link } from 'dva/router';

export default class CreateBaby extends Component {
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
    const { visible, loading } = this.state;
    return (
      <div>
        <Form>
          <Form.Item name="name" label="姓名" rules={[{ required: true, message: '請填寫姓名!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="性別"
            rules={[{ required: true, message: '請填寫性別!' }]}
          >
            <Radio.Group>
              <Radio value="male">男生</Radio>
              <Radio value="female">女生</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="blood" label="血型" rules={[{ required: true, message: '請填寫血型!' }]}>
            <Select>
              <Select.Option value="O">O</Select.Option>
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="AB">AB</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="birth" label="生日" rules={[{ required: true, message: '請填寫生日!' }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="relation"
            label="關係"
            rules={[{ required: true, message: '請填寫關係!' }]}
          >
            <Radio.Group>
              <Radio value="parents">父母</Radio>
              <Radio value="nanny">褓母</Radio>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" className="submitBlock" onClick={this.showModal}>
            送出
          </Button>
          <Modal
            visible={visible}
            title="共享清單"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Link to="/">
                <Button type="primary" key="back" onClick={this.handleCancel} className="yesButton">
                  是
                </Button>
              </Link>,
              <Button type="primary" key="back" onClick={this.handleCancel} className="yesButton">
                否
              </Button>,
            ]}
          >
            <p className="modalText">是否要共享清單...？</p>
          </Modal>
        </Form>
      </div>
    );
  }
}
