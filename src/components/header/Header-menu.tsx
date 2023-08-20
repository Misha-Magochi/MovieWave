import React from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd';

const HeaderMenu: React.FC = () => {
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
  );
};

export default HeaderMenu;