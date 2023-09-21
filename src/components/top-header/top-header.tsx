import React, { useState } from 'react';
import './top-header.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const items = [
  {
    label: (
      <span>
        Top 100 Movies <CaretDownOutlined />
      </span>
    ),
    key: 'SubMenu',
    children: [
      {
        label: 'Top 100 Films',
        key: 'setting:1',
        path: '/top-100/films',
      },
      {
        label: 'Top 100 Series',
        key: 'setting:2',
        path: '/top-100/series',
      },
      {
        label: 'Top 100 Cartoon',
        key: 'setting:3',
        path: '/top-100/cartoon',
      },
      {
        label: 'Top 100 Anime',
        key: 'setting:4',
        path: '/top-100/anime',
      },
    ],
  },
];

const TopHeader: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      {items.map((item) => (
        <Menu.SubMenu key={item.key} title={item.label}>
          {item.children.map((child) => (
            <Menu.Item key={child.key}>
              <Link to={child.path}>{child.label}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};

export default TopHeader;