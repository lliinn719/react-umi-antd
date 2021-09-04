/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './editPassword.less';
import { Row, Col } from 'antd';
import images from '../../theme/images';
import { Layout } from 'antd';
import EditPassword from '../../components/EditUser/editPassword';
const { Content } = Layout;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Login extends Component {
    render() {
      return (
        <Content className="materialArea">
          <Row className="editBlock">
            <Col xs={{ span: 24 }} sm={{ span: 8, offset: 4 }} className="userEdit">
              <img src={images.user} className="userImg"></img>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8, offset: 2 }} className="editInfo">
              <EditPassword />
            </Col>
          </Row>
        </Content>
      );
    }
  },
);
