import React from 'react';
import { Layout, theme, Breadcrumb as AntdBreadcrumb } from 'antd';



const NavMenu: React.FC = () => {

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <AntdBreadcrumb style={{ margin: '16px 0' }}>
        <AntdBreadcrumb.Item>Home</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item>List</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item>App</AntdBreadcrumb.Item>
      </AntdBreadcrumb>
    </Layout>
  );
};

export default NavMenu;