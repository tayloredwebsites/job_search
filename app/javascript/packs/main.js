/* app/javascripts/main/main.jsx */

import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

import Header from '../components/header'
import Body from '../components/body'

// Main page to load up Header and Body components
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

// Render main page
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
