import React from 'react'
import './App.css'
// import { Route } from 'react-router-dom'
import Home from './views/Home'
import DetailPage from './views/DetailPage'

/**
 * Global data
 */

import instruments from './instruments'

// <Router>
// <Route exact path='/' component={Home}/>
// {/* both /roster and /roster/:number begin with /roster */}
// <Route path='/banjo' component={DetailPage}/>
// <Route path='/shamisen' component={DetailPage}/>
// <Route path='/dulcimer' component={DetailPage}/>
// </Router>

/**
 * Main app component
 * @returns {*}
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Interesting Acoustic Folk Instruments
      </header>
      <div className="App-body">
        {(instruments) ? <Home instruments={instruments} /> : ''}
      </div>
      <div className="App-footer" />
    </div>
  )
}

export default App
