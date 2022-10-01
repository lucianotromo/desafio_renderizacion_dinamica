
import './App.css'
import { useState } from 'react'
import data from "./components/data"
import Header from "./components/Header"
import Agregar from './components/Agregar'
import Listado from "./components/Listado"
import { useRef } from 'react'

function App() {
  const [colaboradores, setColaboradores] = useState(data)
  const [mostrarColaboradores, setMostrarColaboradores] = useState(data)
  const buscador = useRef(null)
  

  const handleSubmit = (e)=> {
    e.preventDefault()

    if(!e.target[0].value || !e.target[1].value) return

    const nuevoColaborador = {
      id: colaboradores.length + 1,
      nombre: e.target[0].value,
      correo: e.target[1].value
    }

    const colaboradoresActualizado = [...colaboradores, nuevoColaborador]

    setColaboradores(colaboradoresActualizado)
    setMostrarColaboradores(colaboradoresActualizado)

    e.target[0].value = ""
    e.target[1].value = ""

  }

  const reset = ()=> {
    if(!buscador.current.value)
    setMostrarColaboradores(colaboradores)
  }


  const handleKeyDown = (e)=> {
    if(e.key !== "Enter") return

    const valor = buscador.current.value.toLowerCase()

    const filtrado = colaboradores.filter((colaborador)=> {
        return colaborador.nombre.toLowerCase().includes(valor) ||
          colaborador.correo.toLocaleLowerCase().includes(valor)
    })

    setMostrarColaboradores(filtrado)
  } 

  return (
    <div className="App">
      <Header 
      reset={reset}
      referencia={buscador}
      buscar={handleKeyDown}>

      </Header>

      <main className='main'>
        <Agregar submit={handleSubmit}></Agregar>

        <div className='listado-colaboradores'>
          <h3>Listado de colaboradores</h3>
          {
            mostrarColaboradores.length > 0 ?
          <Listado Listado={mostrarColaboradores}></Listado>
          : <p className='sin-resultados'>No hay resultados</p>
          }
           
        </div>
      </main>
    </div>
  )
}

export default App
