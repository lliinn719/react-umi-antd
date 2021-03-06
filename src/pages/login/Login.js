/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './Login.less';
import { Row, Col } from 'antd';
import images from '../../theme/images';
import { Layout } from 'antd';
import LoginForm from '../../components/Form/loginInput';
import _ from 'lodash';
const { Content } = Layout;

const mapStateToProps = state => {
  return {
    users: _.get(state, 'users.users', []),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    POST_login(payload, loading, callback) {
      dispatch({ type: 'users/POST_login', payload, loading, callback });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Login extends Component {
    handleLogin = payload => {
      const { POST_login } = this.props;
      POST_login(payload);
    };

    render() {
      return (
        <Content>
          <Row className="block">
            <Col xs={{ span: 24 }} sm={{ span: 8, offset: 2 }} className="userInfo">
              <LoginForm login={this.handleLogin} />
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
