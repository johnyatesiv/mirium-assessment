import React from 'react'

class DetailPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='home-container'>
        <img className='active-image' src={this.props.instrument.image} />
        <div className='sub-image-row'>
        </div>
      </div>
    )
  }
}

export default DetailPage
