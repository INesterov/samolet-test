import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Table, Input } from 'antd'
import debounce from 'debounce'
import useSelector from '../../helpers/useSelector'
import { loadLibraryDataAction } from '../../modules/libraryData/ducks'

const { Content } = Layout

const RegionsList = () => {
  const { isLoading, data } = useSelector(state => state.libraryData)
  const dispatch = useDispatch()
  const [searchText, changeSearchText] = useState('')

  useEffect(() => {
    dispatch(loadLibraryDataAction())
  }, [dispatch])

  const columns = [
    {
      title: 'Регион',
      dataIndex: 'territory',
      key: 'territory',
      width: '70%',
      render: function RegionLink(text: string, record: any) {
        const { order } = record

        return <Link to={`/region/${order}`}>{text}</Link>
      },
    },
    {
      title: 'Библиотеки',
      dataIndex: 'libraries',
      width: '30%',
      sorter: (a: any, b: any) => a.libraries - b.libraries,
    },
  ]

  const handleChange = debounce((value: string) => {
    changeSearchText(value)
  })

  const arrayData = Array.from(data.values())
  const tableData = searchText
    ? arrayData.filter((value) => {
      return value.territory.match(searchText)
    }) : arrayData

  return (
    <Layout>
      <Content>
        <Table
          bordered
          dataSource={tableData}
          loading={isLoading}
          columns={columns}
          rowKey={(item) => String(item.order)}
          title={() => (
            <Input placeholder="Поиск по региону" onChange={(e) => handleChange(e.target.value)} />
          )}
        >

        </Table>
      </Content>
    </Layout>
  )
}

export default RegionsList
