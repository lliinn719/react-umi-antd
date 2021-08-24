/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './input.less';
import { Input } from 'antd';
import images from '../../theme/images';
import Layout from 'antd/lib/layout/layout';


export default class InputComponent extends Component {
  render() {
    return (
      <Input />
    );
  }
}
