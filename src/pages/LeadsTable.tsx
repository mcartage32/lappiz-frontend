import type { ColumnsType } from 'antd/es/table'
import type { ILead } from '@/interfaces'
import { Table, Card } from 'antd'
import { useState } from 'react'
import { useLeadsListQuery } from '@/api/reactQuery'

const LeadsTable = () => {
  const { data = [], isLoading } = useLeadsListQuery()

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const columns: ColumnsType<ILead> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Fecha de creación',
      dataIndex: 'createdAt',
      key: 'createdAt'
    }
  ]

  return (
    <Card title="Lista de Leads" style={{ marginTop: 20 }}>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false
        }}
        locale={{ emptyText: 'No hay leads registrados' }}
      />
    </Card>
  )
}

export default LeadsTable
