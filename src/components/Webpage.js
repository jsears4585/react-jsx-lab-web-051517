import React from 'react'
import FillerText from './FillerText'

class Webpage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage
