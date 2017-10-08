/* app/javascripts/main/main.jjsx */

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Body from '../components/body'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

export default Main;

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
