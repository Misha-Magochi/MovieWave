import React from 'react';
import { Menu, Layout } from 'antd';
import { MenuProps } from 'antd';

const { Header } = Layout;

const HeaderMenu: React.FC = () => {
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
  );
};

export default HeaderMenu;