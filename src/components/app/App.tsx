import React, { Component } from 'react'
import { Layout } from 'antd';
import HeaderMenu from '../header-menu/haeder-menu';
import Footer from '../footer/Footer';
import ContentBody from '../content/Content';

import SimpleSlider from '../simple-slider/simple-slider';
import AppRouter from '../app-router/app-router';



class App extends Component {
    render() {
        return (
            <Layout>
            <HeaderMenu />
            <SimpleSlider />
            <ContentBody>
                <AppRouter />
            </ContentBody>
            <Footer />
            </Layout>
            
        )
    }
}

export default App;