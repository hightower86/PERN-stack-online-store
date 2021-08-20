import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import styled from 'styled-components'
import NavBar from './components/NavBar'

const AppContainer = styled.div`
  /* padding:20px; */
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <NavBar />
        <AppRouter />
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
