import React, { Component } from 'react'

import HeaderMenu from '../header/Header-menu';
import NavMenu from '../nav-menu/Nav-menu';
import Sidebar from '../side-bar/Side-bar';
import Content from '../content/Content';
import Footer from '../footer/Footer';

import './app.css'
import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

class App extends Component {

    render () {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <HeaderMenu />
            </Header>
            <Layout>
                <NavMenu/>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Sidebar />
                    <Content />
                    <Footer />
                </Layout>
            </Layout>
        </Layout>
    )
    }
}

export default App;