import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationProvider } from './componets/NotificationCustom.tsx'
import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import App from './App.tsx'
import './index.css'

dayjs.locale('es')
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={esES}>
          <App />
        </ConfigProvider>
      </QueryClientProvider>
    </NotificationProvider>
  </StrictMode>
)
