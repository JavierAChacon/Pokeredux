import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <HashRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedex/:id' element = {<Pokemon/>}/>
            </Route>
          </Routes>
        </div>
      </HashRouter>
  )
}

export default App
