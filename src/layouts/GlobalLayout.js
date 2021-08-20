import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import './GlobalLayout.less';

const { Header, Content, Footer } = Layout;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToRoute(path, callback) {
      dispatch({ type: 'global/goToRoute', path, callback });
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class GlobalLayout extends Component {
      state = {
        isMobile: false,
      };

      componentDidMount = () => {
        this.handleCheckIsMobile();

        window.addEventListener('resize', this.handleCheckIsMobile);
        return () => {
          window.removeEventListener('resize', this.handleCheckIsMobile);
        };
      };

      handleCheckIsMobile = () => {
        if (window.screen.width > 768) this.setState({ isMobile: false });
        else this.setState({ isMobile: true });
      };

      render() {
        const { children } = this.props;

        return (
          <Layout className="global-layout">
            <Header className='header'>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content  className="content">
              <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div  className="content-child">{children}</div>
            </Content>
            <Footer className="footer">Ant Design Template © 2020 Created by carie8655</Footer>
          </Layout>
        );
      }
    },
  ),
);
