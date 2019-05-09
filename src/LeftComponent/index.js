import React, { Component } from 'react'

export default class LeftComponent extends Component {
  render() {
    return (
        <div className='left'>
          <div className='left-top'>
          <p>profile pic and name</p>
        </div>
        
        <div className='left-bottom'>
          <p>bio</p>
          </div>
        </div>
    )
  }
}
