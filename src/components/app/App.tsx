import React, { Component } from 'react'

import { Layout } from 'antd';
import Header from '../header';
import Footer from '../footer/Footer';
import ContentBody from '../content/Content';

import './app.css'

class App extends Component {

    render() {
        return (
            <Layout>
                <Header />
                <ContentBody>

                </ContentBody>
                <Footer />
            </Layout>
        )
    }
}

export default App;