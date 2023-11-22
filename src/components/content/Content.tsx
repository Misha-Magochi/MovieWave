import React from "react";
import { Layout, theme } from "antd";
const { Content, } = Layout;

import Sidebar from "../side-bar/side-bar";
import AppRouter from "../app-router/app-router";


const ContentBody = (_props: any) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                <Sidebar />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <AppRouter />
                </Content>
            </Layout>
        </Content>
    )
};

export default ContentBody;