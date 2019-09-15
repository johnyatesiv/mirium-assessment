import React from 'react'
import { Link } from 'react-router-dom'
import './DetailView.css'

class DetailView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeImage: props.instrument.img
    }

    this.changeActiveImage = this.changeActiveImage.bind(this)
  }

  /**
   * Changes active image, pass this down to the child component
   * @param img
   */
  changeActiveImage (img) {
    this.setState({
      activeImage: img
    })
  }

  render() {
    return (
      this.props.instrument ? (
        <div className='home-container'>
          <div className='col-12 nav'>
            <Link to='/'>Home</Link>/<Link to={'/details' + this.props.instrument.id}>{this.props.instrument.title}</Link>
          </div>
          <img className='active-image' src={this.state.activeImage} alt={this.props.instrument.title} />
          <div className='sub-image-row-desktop col-12'>
            <div className='col-1'/>
            {
                this.props.instrument.subimages ? this.props.instrument.subimages.map((img) => {
                  return <SubImage img={img} changeActiveImage={this.changeActiveImage} />
                }) : ''
            }
            <div className='col-1'/>
          </div>
          <div className='sub-image-row-mobile col-12'>
            <div className='col-1'/>
            {
              this.props.instrument.subimages ? this.props.instrument.subimages.map((img) => {
                return <SubImageMobile img={img} changeActiveImage={this.changeActiveImage} />
              }) : ''
            }
            <div className='col-1'/>
          </div>
          <div className='content-row col-12'>
            <div className='col-1' />
            <div className='content col-10'>
              {this.props.instrument.content ? this.props.instrument.content : ''}
            </div>
            <div className='col-1' />
          </div>
        </div>
      ) : (
        <div>
          <h2>Select a valid instrument to see more details!</h2>
        </div>
      )
    )
  }
}

class SubImage extends React.Component {
  constructor (props) {
    super(props)
    console.dir(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      componentClasses: 'col-2 sub-image-container show'
    }
  }

  /**
   * Invokes parent component's change active image function
   */
  onClick () {
    this.props.changeActiveImage(this.props.img.src)
  }

  render () {
    return (
      this.props.img ? (
        <div className={this.state.componentClasses}>
          <img className='sub-image' src={this.props.img.src} alt={this.props.img.title} onClick={this.onClick} />
        </div>
      ): ''
    )
  }
}

class SubImageMobile extends React.Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  /**
   * Invokes parent component's change active image function
   */
  onClick () {
    this.props.changeActiveImage(this.props.img.src)
  }

  render () {
    return (
      this.props.img ? (
        <div className="col-2">
          <img className='sub-image-mobile' src={this.props.img.src} alt={this.props.img.title} onClick={this.onClick} />
        </div>
      ): ''
    )
  }
}

export default DetailView
