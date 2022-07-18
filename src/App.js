import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InfrastructureView from './components/InfrastructureView'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InfrastructureView />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
