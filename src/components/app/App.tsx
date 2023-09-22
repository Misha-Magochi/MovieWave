import React, { Component } from 'react'
import { Layout } from 'antd';
import HeaderMenu from '../header-menu/haeder-menu';
import Footer from '../footer/Footer';
import ContentBody from '../content/Content';



import SimpleSlider from '../simple-slider/simple-slider';


class App extends Component {
    render() {
        return (
            <Layout>
                <HeaderMenu />
                <SimpleSlider />
                <ContentBody>
                </ContentBody>
                <Footer />
            </Layout>
            
        )
    }
}

export default App;