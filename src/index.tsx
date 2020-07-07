import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import ruRU from 'antd/lib/locale-provider/ru_RU'
import 'antd/dist/antd.css'
import Routes from './routes'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={ruRU}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
)
