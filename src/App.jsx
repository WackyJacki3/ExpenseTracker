import { useState } from 'react'
import './App.css'
import Home from "./pages/Home/Home"
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddExpense from './pages/AddExpense/AddExpense'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/add-expense' exact Component={AddExpense} />
      </Routes>
    </Router>
  )
}

export default App
