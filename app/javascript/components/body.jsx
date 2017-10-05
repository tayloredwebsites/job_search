/* app/javascripts/components/job_listing.jsx */

import React from 'react'
import axios from 'axios';

import JobListing from '../components/job_listing'
import NewJob from '../components/new_job'

class Body extends React.Component {

  constructor () {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    console.log('Body Component was mounted');
    axios.get('/api/v01/jobs.json')
      .then(response => {
        console.log('componentDidMount response returned' + response.data)
        this.setState({ jobs: response.data });
        console.log('setState to: ' + JSON.stringify(this.state.jobs))
      })
      .catch(error => {
        console.log('componentDidMount error response returned')
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <NewJob />
        <JobListing  jobs={this.state.jobs} />
      </div>
    )
  }
}

export default Body;
