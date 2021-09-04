/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './babyList.less';
import { Row, Col, Card } from 'antd';
import { ShareAltOutlined, ReconciliationOutlined, EditOutlined } from '@ant-design/icons';
import { router } from 'dva';
import images from '../../theme/images';
const { Meta } = Card;
const { Link } = router;

export default class BabyList extends Component {
  render() {
    const { babylist } = this.props;
    console.log(babylist);
    return (
      <Col xs={{ span: 24 }} sm={{ span: 8 }} className="babyArea">
        <Row>
          <Col span={24} className="babyImg">
            {babylist.cover}
          </Col>
          <Col span={24} className={babylist.gender ? 'male' : 'female'}>
            {babylist.name}
          </Col>
          <Col span={24} className={babylist.gender ? 'male' : 'female'}>
            {babylist.birth}
          </Col>
          <Col span={24} className={babylist.gender ? 'boy' : 'girl'}>
            <Row>
              <Col span={8} className="actionBlock">
                <Link to="/">
                  <ReconciliationOutlined className="actionIcon" />
                </Link>
              </Col>
              <Col span={8} className="actionBlock">
                <Link to="/">
                  <ShareAltOutlined className="actionIcon" />
                </Link>
              </Col>
              <Col span={8} className="actionBlock">
                <Link to="/">
                  <EditOutlined className="actionIcon" />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
