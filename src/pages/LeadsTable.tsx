import type { ColumnsType } from 'antd/es/table'
import type { ILead } from '@/interfaces'
import { Table } from 'antd'
import { useState } from 'react'
import { useLeadsListQuery } from '@/api/reactQuery'

const LeadsTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const { data, isLoading } = useLeadsListQuery({
    page: currentPage,
    limit: pageSize
  })

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
    <div className="card-table">
      <h2 className="leads-form-title">Listado de Leads</h2>
      <Table
        dataSource={data?.data}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        locale={{ emptyText: 'No hay leads registrados' }}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data?.total || 0,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '50'],
          onShowSizeChange: (_, size) => {
            setPageSize(size)
            setCurrentPage(1)
          }
        }}
        scroll={{ x: 300 }}
      />
    </div>
  )
}

export default LeadsTable
