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
    this.handleAddJobClick = this.handleAddJobClick.bind(this)
  }

  handleAddJobClick(job) {
    console.log('handleAddJobClick job: '+JSON.stringify(job))
    console.log('handleAddJobClick this.state: '+JSON.stringify(this.state))
    let newState = this.state.jobs.concat(job);
    console.log('handleAddJobClick updated state: '+JSON.stringify(newState))
    this.setState({ jobs: newState })
    console.log('handleAddJobClick state set: '+JSON.stringify(newState))
  }

  componentDidMount() {
    console.log('Body Component was mounted');
    axios.get('/api/v01/jobs.json')
      .then((response) => {
        console.log('componentDidMount response returned' + JSON.stringify(response.data))
        this.setState({ jobs: response.data });
        console.log('setState to: ' + JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log('componentDidMount error response returned')
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <NewJob handleAddJobClick={this.handleAddJobClick} />
        <JobListing  jobs={this.state.jobs} />
      </div>
    )
  }
}

export default Body;
