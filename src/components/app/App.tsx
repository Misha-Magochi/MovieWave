import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Layout } from 'antd';

import Header from '../header';
import Footer from '../footer/Footer';
import ContentBody from '../content/Content';

import SimpleSlider from '../simple-slider/simple-slider';


class App extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <SimpleSlider />
                <ContentBody>
                </ContentBody>
                <Footer />
            </Layout>
        )
    }
}

export default App;