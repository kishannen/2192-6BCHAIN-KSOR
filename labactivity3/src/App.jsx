/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import { useState } from 'react'
import './App.css'
import ConditionalDemo1 from './components/Conditional-Demo-1'
import ConditionalDemo2 from './components/Conditional-Demo-2'
import ConditionalDemo3 from './components/Conditional-Demo-3'
import ConditionalDemo4 from './components/Conditional-Demo-4'
function App() {

  return (
    <>
      <div>
        <h1>KISSES SHANNEN O. REYES ACTIVITY</h1>
        <h3>Date: Jan 16</h3>
        <h2>Conditional Rendering</h2>
        
        <h3>Conditional Demo 1</h3>
        <ConditionalDemo1/>
        <br /> <br />
        <h3>Conditional Demo 2</h3>
        <ConditionalDemo2/>
        <br /> <br />
        <h3>Conditional Demo 3</h3>
        <ConditionalDemo3/>
        <br /> <br />
        <h3>Conditional Demo 4</h3>
        <ConditionalDemo4/>
      </div>
    </>
  )
}

export default App
