/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './newInstuction.less';
import { Button, Carousel, Layout } from 'antd';
import images from '../../theme/images';
import { Link } from 'dva/router';
const { Content } = Layout;

function onChange(a, b, c) {
  console.log(a, b, c);
}
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
  class Instuction extends Component {
    render() {
      return (
        <Content>
          <Carousel afterChange={onChange} className="carouselBackground">
            <div>
              <img src={images.instruction} className="carouselImg"></img>
              <div className="carouselText">
                <p>填寫寶寶的個人資料，例如：姓名、生日、性別、血型、關係以及上傳照片</p>
              </div>
            </div>
            <div>
              <img src={images.instruction} className="carouselImg"></img>
              <div className="carouselText">
                <p>填寫寶寶的個人資料，例如：姓名、生日、性別、血型、關係以及上傳照片</p>
              </div>
            </div>
            <div>
              <img src={images.instruction} className="carouselImg"></img>
              <div className="carouselText">
                <p>填寫寶寶的個人資料，例如：姓名、生日、性別、血型、關係以及上傳照片</p>
              </div>
            </div>
            <div>
              <img src={images.instruction} className="carouselImg"></img>
              <div className="carouselText">
                <p>填寫寶寶的個人資料，例如：姓名、生日、性別、血型、關係以及上傳照片</p>
              </div>
            </div>
          </Carousel>
          <Link to="/create">
            <Button type="primary" className="createButton">
              創建你的寶寶
            </Button>
          </Link>
        </Content>
      );
    }
  },
);
