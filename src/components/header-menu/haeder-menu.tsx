import React from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd';
import {  Link } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';


const HeaderMenu: React.FC = () => {

  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" 
      defaultSelectedKeys={['1']}
       items={items1} >
          <Link  to="/">nav 1</Link>
          <Link to="/top-100">nav 2</Link>
      </Menu>
    </Header>
  );
};

export default HeaderMenu;