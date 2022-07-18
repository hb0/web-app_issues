import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DatasetsView from './components/datasets/DatasetsView'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DatasetsView />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
