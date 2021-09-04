/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './confirmEmail.less';
import { Row, Col } from 'antd';
import images from '../../theme/images';
import ConfirmEmail from '../../components/Form/confirmEmail';
import { Layout } from 'antd';

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
  class confirmEmail extends Component {
    render() {
      return (
        <Content>
          <Row className="block">
            <Col xs={{ span: 24 }} sm={{ span: 8, offset: 2 }} className="userInfo">
              <ConfirmEmail />
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12, offset: 2 }}>
              <img src={images.login} className="login"></img>
            </Col>
          </Row>
        </Content>
      );
    }
  },
);
