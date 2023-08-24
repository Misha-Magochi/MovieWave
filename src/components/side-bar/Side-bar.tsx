import { Avatar, SiderProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import axiosinstans from '../lib/axios';
import React, {useState, useEffect} from 'react';
import { AxiosResponse } from 'axios';

const { Sider } = Layout;
const Sidebar: React.FC<SiderProps> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [sidebarData, setSidebarData] = useState([]);
  useEffect(() => {
    axiosinstans.get('/api/siderbar-link')
      .then((response: AxiosResponse) => {
        const responseData = response.data;
        setSidebarData(responseData);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const menuItems = sidebarData.map((dataItem: any, index: number) => {
    
    return {
      key:  `sub${index + 1}`,
      icon: <Avatar src={dataItem.iconPath} alt={dataItem.label} />,
      label: `${dataItem.type} `,
      children: dataItem.links.map((link: any, j: number) => {
        return {
          key: `${dataItem.type}${j}`,
          label: link.label,
        };
      }),
    }
  })


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