import React from 'react'
import './App.css'
import HomeView from './HomeView'
import DetailView from './DetailView.js'

/**
 * Global data
 */

import instruments from '../instruments'

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
class HomePage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
   return (
     <div className="App home-page">
       <AppHeader title={'Interesting Acoustic Folk Instruments'} />
       <div className="App-body">
         {(instruments) ? <HomeView instruments={instruments} /> : ''}
       </div>
       <AppFooter/>
     </div>
   )
  }
}

class DetailPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      instrument: instruments[props.match.params.id]
    }
  }

  render () {
    return (
      <div className="App detail-page">
        <AppHeader title={this.state.instrument.title} />
        <div className="App-body">
          {(this.state.instrument) ? <DetailView instrument={this.state.instrument} /> : ''}
        </div>
        <AppFooter/>
      </div>
    )
  }
}

const AppHeader = (props) => {
  return (
    <header className="App-header">
      <h2>{props.title}</h2>
    </header>
  )
}

const AppFooter = () => {
  return (
    <div className="App-footer">
      &copy; 2019
    </div>
  )
}

export { HomePage, DetailPage }
