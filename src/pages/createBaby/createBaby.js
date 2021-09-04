/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './createBaby.less';
import { Row, Col, Upload, message, Button, Radio } from 'antd';
import { LoadingOutlined, PlusOutlined, CameraOutlined } from '@ant-design/icons';
import CreateBaby from '../../components/createBaby/createBaby';
import images from '../../theme/images';
import { Link } from 'dva/router';
import { Layout } from 'antd';
const { Content } = Layout;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Create extends Component {
    state = {
      loading: false,
    };
    handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    };
    render() {
      const { loading, imageUrl } = this.state;
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
      return (
        <Content className="materialImg">
          <Row className="createBlock">
            <Col xs={{ span: 24 }} sm={{ span: 8 }} className="createLeft">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
              <div className="uploadText">上傳照片</div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} className="editInfo">
              <CreateBaby />
            </Col>
          </Row>
          <img src={images.profile} className="illustration"></img>
        </Content>
      );
    }
  },
);
