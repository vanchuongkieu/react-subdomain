import React from 'react'
import { initializeApp } from './helpers/get-app';

const App = () => {
  const AppContainer = initializeApp();
  
  return (
    <AppContainer />
  )
}

export default App