/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import { useState } from 'react'
import './App.css'
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent';

function App() {

  return (
    <>
      <div>
        <h1>KISSES SHANNEN O. REYES ACTIVITY</h1>
        <Hello />
        <Welcome />

        <h3>React Props Example</h3>
        <ParentComponent />
      </div>
    </>
  )
}

export default App
