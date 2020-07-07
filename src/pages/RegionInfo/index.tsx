import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Spin, Layout, Descriptions } from 'antd'
import useSelector from '../../helpers/useSelector'
import { loadLibraryDataAction } from '../../modules/libraryData/ducks'

const RegionInfo = () => {
  const { isLoading, data } = useSelector(state => state.libraryData)
  const dispatch = useDispatch()
  const { order } = useParams()

  useEffect(() => {
    if (data.size === 0) {
      dispatch(loadLibraryDataAction())
    }
  }, [dispatch, data.size])

  const regionObject = data.get(Number(order))

  if (!regionObject) {
    return <h1>Данных не найдено</h1>
  }

  return (
    <Layout>
      <Layout.Content>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <Descriptions title={`${regionObject?.territory} информация по библиотекам`} layout="vertical" bordered>
            <Descriptions.Item label="Название" span={3}>
              {regionObject.fullname}
            </Descriptions.Item>
            <Descriptions.Item label="Адрес" span={3}>
              {regionObject.address}
            </Descriptions.Item>
            <Descriptions.Item label="Библиотеки">
              {regionObject.libraries}
            </Descriptions.Item>
            <Descriptions.Item label="Посещения">
              {regionObject.visits}
            </Descriptions.Item>
            <Descriptions.Item label="Подписки">
              {regionObject.subscribers}
            </Descriptions.Item>
            <Descriptions.Item label="Компьютеры">
              {regionObject.computers}
            </Descriptions.Item>
            <Descriptions.Item label="Цифровые каталоги">
              {regionObject.digital_catalogs}
            </Descriptions.Item>
            <Descriptions.Item label="Интернет-каталоги">
              {regionObject.internet_catalogs}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Имя формы">
              {regionObject.formname}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Layout.Content>
    </Layout>
  )
}

export default RegionInfo
