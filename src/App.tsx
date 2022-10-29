import React from 'react'
import { initializeApp, domain } from './helpers/get-app';

const App = () => {
  const AppContainer = initializeApp();
  return (
    <div>
      <div style={{
        display: 'flex',
        gap: 16,
        textTransform: 'uppercase',
      }}>
        <a href={domain()}>home</a>
        <a href={domain('user')}>user</a>
        <a href={domain('teacher')}>teacher</a>
      </div>
      <AppContainer />
    </div>
  )
}

export default App