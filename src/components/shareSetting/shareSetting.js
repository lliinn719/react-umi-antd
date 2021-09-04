/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './shareSetting.less';
import { Row, Col, Layout } from 'antd';
import { router } from 'dva';
import images from '../../theme/images';
const { Link } = router;
const { Content } = Layout;

export default class Share extends Component {
  state = {};

  render() {
    const { babylist } = this.props;
    console.log(babylist);
    return (
      <Content>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <img src={images.youngGirl}></img>
          </Col>
        </Row>
      </Content>
    );
  }
}
