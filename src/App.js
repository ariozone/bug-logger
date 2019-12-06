import React, { useEffect } from "react"
import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import SearchBar from "./components/layout/SearchBar"

function App() {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div className='App'>
      <SearchBar></SearchBar>
    </div>
  )
}

export default App
