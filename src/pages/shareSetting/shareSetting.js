/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './shareSetting.less';
import { Row, Col, Upload, message, Button, Radio } from 'antd';
import images from '../../theme/images';
import ShareSettings from '../../components/shareSetting/shareSetting';
import { Layout } from 'antd';
import { router } from 'dva';
const { Link } = router;
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
  class Share extends Component {
    state = {};
    render() {
      const data = [
        {
          id: '1',
          name: '林小軟',
          birth: '89/07/19',
          gender: 'female',
          cover: <img src={images.youngGirl} className="babyImg"></img>,
        },
        {
          id: '2',
          name: '林小多',
          birth: '89/05/13',
          gender: 'male',
          cover: <img src={images.youngBoy} className="babyImg"></img>,
        },
      ];
      return (
        <Content>
          <ShareSettings />
        </Content>
      );
    }
  },
);
