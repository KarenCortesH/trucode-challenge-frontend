import './App.css'
import { Routes, Route } from 'react-router-dom'
import Principal from './routes/Principal'
import Subir from './routes/Subir'
import Listar from './routes/Listar'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Principal />}></Route>
      <Route path='Subir' element={<Subir />}></Route>
      <Route path='Listar' element={<Listar />}></Route>
    </Routes>
    </>
  )
}

export default App
