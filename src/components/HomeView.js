import React from 'react'
import '../styles/home.css'
import Carousel from '../components/Carousel'

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.dir(this.props)
  }

  render() {
    return (
      <div className='home-container col-12'>
        {this.props.instruments ? <Carousel instruments={this.props.instruments} /> : ''}
      </div>
    )
  }
}

export default Home
