import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import ruRU from 'antd/lib/locale-provider/ru_RU'
import 'antd/dist/antd.css'
import Routes from './routes'

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root'),
)
