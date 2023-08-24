import { Avatar, SiderProps } from 'antd';
import { Avatar, SiderProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import React from 'react';

const { Sider } = Layout;


const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `sidenav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const Sidebar: React.FC<SiderProps> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        theme='dark'
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={menuItems}
      />
    </Sider>
  );
};
export default Sidebar;