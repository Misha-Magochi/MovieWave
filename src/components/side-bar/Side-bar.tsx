import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps, SiderProps } from 'antd';
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
    <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[]}
        style={{ height: '100%', borderRight: 0  }}
        items={items2}
      />
    </Sider>
  </Layout>
  );
};

export default Sidebar;