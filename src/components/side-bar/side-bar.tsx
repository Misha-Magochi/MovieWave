import { Avatar, SiderProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import axiosinstans from '../../lib/axios';
import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;
const Sidebar: React.FC<SiderProps> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [sidebarData, setSidebarData] = useState([]);
  const location = useLocation();

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

  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        theme='dark'
        mode="inline"
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        selectedKeys={[location.pathname]}
      >
        {sidebarData.map((dataItem: any, index: number) => (
          <Menu.SubMenu
            key={`sub${index + 1}`}
            title={
              <span>
                <Avatar src={dataItem.iconPath} alt={dataItem.label} />
                <span>{dataItem.type}</span>
              </span>
            }
          >
            {dataItem.links.map((link: any, j: number) => (
              <Menu.Item key={`/${dataItem.type}/${link.path}`}>
                <Link to={`/${dataItem.type}/${link.path}`}>{link.label}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;