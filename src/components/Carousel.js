import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Carousel.css'

/**
 * Parent image carousel component
 */
class Carousel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      previousImageIndex: (this.props.instruments ? this.props.instruments.length - 1 : 0),
      activeImageIndex: 0,
      nextImageIndex: 1
    }

    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
    this.getPreviousContent = this.getPreviousContent.bind(this)
    this.getCurrentContent = this.getCurrentContent.bind(this)
    this.getNextContent = this.getNextContent.bind(this)
  }

  /**
   * Returns the current index less one, resetting if needed
   * @param index
   * @returns {number}
   */
  getPreviousIndex (index) {
    const last = this.props.instruments.length - 1
    const resetIndex = index === 0
    return resetIndex ? last : index - 1
  }

  /**
   * Returns the current index plus one, resetting if needed
   * @param index
   * @returns {number}
   */
  getNextIndex (index) {
    const last = this.props.instruments.length - 1
    const resetIndex = index === last
    return resetIndex ? 0 : index + 1
  }

  /**
   * Transitions to the previous slide
   */
  goToPreviousSlide () {
    const { activeImageIndex } = this.state
    const index =  this.getPreviousIndex(activeImageIndex)
    this.rotate(index)
  }

  /**
   * Transitions to the next slide
   */
  goToNextSlide () {
    const { activeImageIndex } = this.state
    const index = this.getNextIndex(activeImageIndex)
    this.rotate(index)
  }

  /**
   * Transitions the slider
   * @param index
   */
  rotate (index) {
    console.log('Going to ' + index)
    this.setState({
      previousImageIndex: this.getPreviousIndex(index),
      nextImageIndex: this.getNextIndex(index),
      activeImageIndex: index
    }, () => {
      console.log(this.state)
    })
  }

  /**
   * Gets the previous content by index
   * @returns {HTMLImageElement}
   */
  getPreviousContent () {
    return this.props.instruments[this.state.previousImageIndex]
  }

  /**
   * Gets the current content by index
   * @returns {HTMLImageElement}
   */
  getCurrentContent () {
    return this.props.instruments[this.state.activeImageIndex]
  }

  /**
   * Gets the next content by index
   * @returns {HTMLImageElement}
   */
  getNextContent() {
    return this.props.instruments[this.state.nextImageIndex]
  }

  /**
   * Render method
   * @returns {*}
   */
  render () {
    return (
      <div className='image-carousel col-12'>
        <NavArrow direction='left' onClick={this.goToPreviousSlide} glyph='<' />
        <Slider src={this.getPreviousContent()} size='small '/>
        <Slider src={this.getCurrentContent()} size='normal' />
        <Slider src={this.getNextContent()} size='small' />
        <NavArrow direction='right' onClick={this.goToNextSlide} glyph=">" />
      </div>
    )
  }
}

/**
 * Slider for image rotation
 * @param url
 * @returns {*}
 * @constructor
 */
class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.imageStyles = {
      backgroundImage: `url(${this.props.src.img})`,
      backgroundSize: 'auto',
      backgroundPosition: 'center',
    }

    this.styles = {
      cursor: 'pointer',
      transition: 'width 1s'
    }

    if (props.size === 'normal') {
      this.col = 'col-4'
    } else {
      this.col = 'col-3'
      this.styles.opacity = 0.5
    }
  }

  onClick () {

  }

  render () {
    return (
      <div className={'image-slider image-slider-'+this.props.size +' '+ this.col } style={this.styles} onClick={this.onClick}>
        {/*<div className='image-slider-image' style={this.imageStyles} />*/}
        <img src={this.props.src.img} alt={this.props.src.title}/>
        <div className='image-slider-content'>
          {this.props.src.shortContent}
        </div>
      </div>
    )
  }
}

const NavArrow = ({ direction, onClick, glyph }) => (
  <div
    className={ `col-1 nav-arrow ${direction}` }
    onClick={ onClick }>
    <img className='nav-arrow-image' src={`/caret-${direction}.png`} alt={`Navigate ${direction}`}/>
  </div>
)

export default Carousel
