import { useState } from 'react'
import Table from './components/Table'
import './App.css'

function App() {
  const [lista, setLista] = useState([
    {nome: 'Stepherson',sobrenome: 'Borges  dos Santos', idade: 36}
  ])

  return (
    <>
      {lista.length > 0 ? 
      <Table lista={lista}/> :
      <label>Nenhum item cadastrado!</label>}
    </>
  )
}

export default App
