/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './Login.less';
import { Row, Col } from 'antd';
import images from '../../theme/images';
import { Layout } from 'antd';
import InputComponent from '../../components/input/input';

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
        <Layout>
          <div>
            <Row>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <InputComponent />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <img src={images.login} className="login"></img>
              </Col>
            </Row>
          </div>
        </Layout>
      );
    }
  },
);
