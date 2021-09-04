import React, { Component } from 'react';
import './editUser.less';
import { Form, Input, Button, Modal, Upload, message } from 'antd';
import { Link } from 'dva/router';
import { EditOutlined, InboxOutlined } from '@ant-design/icons';

export default class EditUser extends Component {
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
    const { Dragger } = Upload;
    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} 檔案上傳成功`);
        } else if (status === 'error') {
          message.error(`${info.file.name} 檔案上傳失敗`);
        }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };
    return (
      <div>
        <Form name="basic">
          <Form.Item
            label="暱稱"
            name="username"
            rules={[{ required: true, message: '請填寫暱稱!' }]}
          >
            <Input suffix={<EditOutlined />} />
          </Form.Item>
          <Form.Item
            label="信箱"
            name="usermail"
            rules={[{ required: true, message: '請填寫暱稱!' }]}
          >
            <Input placeholder="qq123@gmail.com" disabled />
          </Form.Item>
          <Form.Item
            label="密碼"
            name="password"
            rules={[{ required: true, message: '請填寫密碼!' }]}
          >
            <Input
              suffix={
                <Link to="/edit/password">
                  <EditOutlined />
                </Link>
              }
            />
          </Form.Item>
          <Form.Item>
            <div className="saveInfo">
              <Button type="primary" onClick={this.showModal}>
                編輯照片
              </Button>
              <Modal
                visible={visible}
                title="上傳大頭貼"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button type="primary" key="back" onClick={this.handleCancel}>
                    送出
                  </Button>,
                ]}
              >
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined className="uploadIcon" />
                  </p>
                  <p className="ant-upload-text">點擊或拖動文件到此區域進行上傳</p>
                  <p className="ant-upload-hint">支持單次或批量上傳</p>
                </Dragger>
              </Modal>
              <Link to="/">
                <Button type="primary">儲存變更</Button>
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
