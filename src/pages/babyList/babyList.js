/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'dva';
import './babyList.less';
import { Row, Col, Upload, message, Button, Radio } from 'antd';
import images from '../../theme/images';
import BabyList from '../../components/BabyList/babyList';
import { Layout } from 'antd';
import { router } from 'dva';
import _ from 'lodash';
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
  class List extends Component {
    state = {
      loading: false,
    };
    componentDidMount = () => {
      console.log('123', this.props.match.path);
    };

    render() {
      const data = [
        {
          id: '1',
          name: '林小軟',
          birth: '89/07/19',
          gender: 0,
          cover: <img src={images.youngGirl} className="babyImg"></img>,
        },
        {
          id: '2',
          name: '林小多',
          birth: '89/05/13',
          gender: 1,
          cover: <img src={images.youngBoy} className="babyImg"></img>,
        },
      ];
      return (
        <Content className="babylistBackground">
          <Row className="listBlock">
            {_.map(data, (item, index) => (
              <BabyList key={index} id={item.id} babylist={item} />
            ))}
          </Row>
        </Content>
      );
    }
  },
);
