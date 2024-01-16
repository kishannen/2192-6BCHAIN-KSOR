/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import { useState } from 'react'
import './App.css'
import BookList from './components/BookList'
import ChoresList from './components/ChoresList'
import MovieList from './components/MovieList'

function App() {

  return (
    <>
      <div>
        <h1>KISSES SHANNEN O. REYES ACTIVITY</h1>
        <h3>Jan. 16: Activity</h3>
        <h4>TODO LIST</h4>
        <ChoresList />
        <h4>MOVIE LIST</h4>
        <MovieList />
        <h4>BOOK LIST</h4>
        <BookList />
        
      </div>
    </>
  )
}

export default App
