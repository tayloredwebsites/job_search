/* app/javascripts/components/new_job.jsx */

import React from 'react'
import axios from 'axios';

class NewJob extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var recruiter = this.refs.recruiter.value;
    var company = this.refs.company.value;

    console.log('recruiter: '+recruiter)
    console.log('company: '+company)

    let newJobJson = {
      recruiter: recruiter,
      company: company
    }

    console.log('newJobJson: ' + JSON.stringify(newJobJson))

    axios.post('/api/v01/jobs.json', newJobJson)
      .then((response) => {
        console.log('NewJob handleClick response returned')
        console.log(' - ' + JSON.stringify(response.data))
        this.props.handleAddJobClick(response.data)
      })
      .catch((error) => {
        console.log('post new job json error response returned')
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Add a New Job</h2>
        <input ref='recruiter' placeholder='Enter the Recruiter' />
        <input ref='company' placeholder='Enter Company Name' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default NewJob;
