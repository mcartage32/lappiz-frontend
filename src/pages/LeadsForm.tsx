import type { ICreateLeadPayload } from '@/interfaces'
import { Button, Form, Input, Card } from 'antd'
import { useCreateLeadMutation } from '@/api/reactQuery'
import { createNotification } from '@/componets/NotificationCustom'

const LeadsForm = () => {
  const [form] = Form.useForm()
  const createLeadMutation = useCreateLeadMutation()

  const onFinish = (values: ICreateLeadPayload) => {
    createLeadMutation.mutate(values, {
      onSuccess: () => {
        createNotification.success({
          message: 'Lead registrado',
          description: 'El lead ha sido registrado exitosamente.'
        })
        form.resetFields()
      },
      onError: (error) => {
        createNotification.error({
          message: 'Error al registrar',
          description: 'Ocurrió un error al registrar el lead. Inténtalo de nuevo.'
        })
        console.error('Error al crear lead:', error)
      }
    })
  }

  return (
    <Card title="Registro de Leads" style={{ maxWidth: 500, margin: '0 auto' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: 'El nombre es obligatorio' }]}
        >
          <Input placeholder="Ingresa el nombre" />
        </Form.Item>

        <Form.Item
          label="Correo"
          name="email"
          rules={[
            { required: true, message: 'El correo es obligatorio' },
            { type: 'email', message: 'Correo inválido' }
          ]}
        >
          <Input placeholder="ejemplo@correo.com" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={createLeadMutation.isPending} block>
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default LeadsForm
