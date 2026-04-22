import LeadsForm from './pages/LeadsForm'
import LeadsTable from './pages/LeadsTable'

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>Gestión de Leads</h1>
        <p>Plataforma inteligente para administración de contactos</p>
      </header>

      <main className="content">
        <LeadsForm />
        <LeadsTable />
      </main>
    </div>
  )
}

export default App
