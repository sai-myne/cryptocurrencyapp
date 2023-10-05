import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
            <div className="routes">
                <Routes>
                    <Route exact path="/" Component={Homepage} />
                    <Route exact path="/exchanges" Component={Exchanges} />
                    <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
                    <Route exact path="/crypto/:coinId" Component={CryptoDetails} />
                    <Route exact path="/news" Component={News} />
                </Routes>
            </div>
        </Layout>
      
        <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                Cryptoverses <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/">News</Link>
            </Space>
        </div>
        </div>
    </div>
  )
}

export default App
