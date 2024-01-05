import MoneyManager from './components/MoneyManager'
import {Login} from './components/Login'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/money-manager" element={<MoneyManager />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
