import React from 'react'

import { Focusable } from 'react-key-navigation'

export default class TwitchMedia extends React.Component {
  constructor (...args) {
    super(...args)
    this._handleFocusableOnFocus = this._handleFocusableOnFocus.bind(this)
    this._handleFocusableOnBlur = this._handleFocusableOnBlur.bind(this)
    this.state = { active: false }
    this.mediaItem = React.createRef()
  }

  render () {
    const className = `${this.props.className} ` +
                      `item${(this.state.active && ' item-focus') || ''}`
    return (
      <Focusable
        onFocus={this.props.onMediaItemFocus(
          this._handleFocusableOnFocus,
          this.mediaItem,
          this.props.focusStruct
        )}
        onBlur={this._handleFocusableOnBlur}
      >
        <div
          ref={mediaItem => { this.mediaItem = mediaItem }}
          className={className}
          onClick={this.props.onMediaClick}
          style={{
            backgroundImage: `url("${this.props.previewUrl}")`,
            backgroundSize: 'cover',
            color: 'white'
          }}
        >
          <div className='twitch-media-copy'>
            <div className='twitch-media-name'>
              {this.props.name}
            </div>
            <div className='twitch-media-statusText'>
              {this.props.statusText}
            </div>
            <div className='twitch-media-gameTitle'>
              {this.props.gameTitle}
            </div>
            <div className='twitch-media-viewCount'>
              {new Intl.NumberFormat('en').format(this.props.viewCount)} viewers
            </div>
          </div>
        </div>
      </Focusable>
    )
  }

  _handleFocusableOnFocus () {
    this.setState({ active: true })
  }

  _handleFocusableOnBlur () {
    this.setState({ active: false })
  }
}
