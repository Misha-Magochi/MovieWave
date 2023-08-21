import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps, SiderProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import axiosinstans from '../lib/axios';
import React, {useState, useEffect} from 'react';
import { AxiosResponse } from 'axios';
import expressServer from '../lib/axios'; 

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

  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    axiosinstans.get('/')
      .then((response: AxiosResponse) => {
        const responseData = response.data;
        console.log(responseData);
        setSidebarData(responseData);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        theme='dark'
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={items2}
      />
    </Sider>
  );
};

export default Sidebar;