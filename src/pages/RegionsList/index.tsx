import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Layout, Table } from 'antd'
import useSelector from '../../helpers/useSelector'
import { loadLibraryDataAction } from '../../modules/libraryData/ducks'

const { Content } = Layout

const RegionsList = () => {
  const { isLoading, data } = useSelector(state => state.libraryData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLibraryDataAction())
  }, [dispatch])

  const columns = [
    {
      title: 'Регион',
      dataIndex: 'territory',
      key: 'territory',
      width: '70%',
    },
    {
      title: 'Библиотеки',
      dataIndex: 'libraries',
      width: '30%',
      sorter: (a: any, b: any) => a.library - b.library,
    },
  ]

  return (
    <Layout>
      <Content>
        <Table
          bordered
          dataSource={Array.from(data.values())}
          loading={isLoading}
          columns={columns}
          rowKey={(item) => String(item.order)}
        >

        </Table>
      </Content>
    </Layout>
  )
}

export default RegionsList
