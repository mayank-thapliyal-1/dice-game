import React from 'react'
import Main from './assets/components/main.jsx'
import './App.css'
import Game from './assets/components/Game.jsx'
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element={ <Main/>}/>
         <Route path = "/game" element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App