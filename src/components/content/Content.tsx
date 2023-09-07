import React from "react";

import { Breadcrumb, Layout, theme } from "antd";
const { Content, } = Layout;
import Sidebar from "../side-bar/side-bar";

const ContentBody = (_props: any) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                <Sidebar />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            </Layout>
        </Content>
    )
};

export default ContentBody;