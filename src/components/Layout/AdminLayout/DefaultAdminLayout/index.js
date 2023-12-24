import { DesktopOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultAdminLayout.module.scss';

const cx = classNames.bind(styles);

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Tổng quan', '/adminpage', <PieChartOutlined />),
  getItem('Khách Hàng', '/customer', <DesktopOutlined />),
  getItem('Đơn hàng', '/bill', <DesktopOutlined />),
  getItem('Sản phẩm', '/allproduct', <UserOutlined />, [
    getItem('Áo', '/shirt'),
    getItem('Quần', '/pants'),
    getItem('Áo khoác', '/jacket'),
    getItem('Phụ kiện', '/accessory'),
    getItem('Tất cả', '/allproduct'),
  ]),
  getItem('Nhân sự', '/personnel', <TeamOutlined />, [getItem('Nhân viên', '/staff'), getItem('Quản lý', '/manager')]),
  getItem('Quay về trang chủ', '/', <DesktopOutlined />),
];

function DefaultAdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const nagative = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className={cx('wrapper')}>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
            onClick={(item) => {
              nagative(item.key);
            }}
          />
        </Sider>
        <Layout>
          <Header className={cx('header')}>
            <div className="logo">BEELAB ADMIN</div>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            ></Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            <b>B E E L A B</b> ©2023 Created by beelabteam
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default DefaultAdminLayout;
