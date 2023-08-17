import React from "react";

import { Breadcrumb, Layout, theme } from "antd";
const { Content, } = Layout;
import Sidebar from "../side-bar/Side-bar";

import './content.css';

const ContentBody = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                <Sidebar />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            </Layout>
        </Content>
    )
};

export default ContentBody;