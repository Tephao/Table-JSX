import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  const [lista, setLista] = useState([])

  function add (novoItem) {
    setLista([...lista, novoItem])
  }

  return (
    <div className='card'>
    <Form add={add}/>
      {lista.length > 0 ?
        < Table lista={lista} />
        :
        <label>Nenhum item cadastrado!</label>
      }
    </div>
)
}

export default App
