
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'react-materialize'

class ControlButton extends Component {
  makeIcon = (icon, text) => {
    if (icon === undefined) {
      return false
    }
    const hasText = text !== undefined
    return hasText ? <Icon left>{icon}</Icon> : <Icon>{icon}</Icon>
  }

  getWidth = (width) => {
    if (typeof (width) === 'undefined') {
      return '' // wrap content
    } else {
      return width
    }
  }

  getMargin = (margin, width) => {
    if (typeof (margin) === 'undefined') {
      return this.getWidth(width) === '100%' ? '0px' : '0px 5px 5px 0px'
    } else {
      return margin
    }
  }

  render () {
    const { text, icon, onClick, active, disabled, type, width, tooltip, margin, visible } = this.props
    return visible === undefined || visible
      ? (
      <Button
        style={{
          backgroundColor: active === undefined ? '#3F8730' : active ? '#3F8730' : '#999999',
          color: '#FFFFFF',
          width: this.getWidth(width),
          margin: this.getMargin(margin, width)
        }}
        onClick={onClick}
        disabled={disabled}
        node="button"
        waves="light"
        small
        icon={this.makeIcon(icon, text)}
        type={type}
        tooltip={tooltip}
        tooltipOptions={{ enterDelay: 1000 }}>
        {text}
      </Button>
        )
      : ''
  }
}

ControlButton.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), // undefined if no text just an icon is wanted
  icon: PropTypes.string, // undefined if no icon is wanted
  onClick: PropTypes.func, // undefined for dummy buttons
  disabled: PropTypes.bool,
  type: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  active: PropTypes.bool, // undefined for buttons who cannot be "active"
  tooltip: PropTypes.string
}

export default ControlButton
