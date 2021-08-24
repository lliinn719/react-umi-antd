/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './input.less';
import { Input } from 'antd';
import images from '../../theme/images';
import Layout from 'antd/lib/layout/layout';

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
  class Input extends Component {
    render() {
      return (
        <Layout>
          <div>
            <Input />
          </div>
        </Layout>
      );
    }
  },
);
