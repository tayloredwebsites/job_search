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
    this.handleDeleteJobClick = this.handleDeleteJobClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleAddJobClick(job) {
    console.log('handleAddJobClick job: '+JSON.stringify(job))
    // console.log('handleAddJobClick this.state: '+JSON.stringify(this.state))
    let newState = this.state.jobs.concat(job);
    // console.log('handleAddJobClick updated state: '+JSON.stringify(newState))
    this.setState({ jobs: newState })
    // console.log('handleAddJobClick state set: '+JSON.stringify(newState))
  }

  handleDeleteJobClick(job) {
    console.log('body.jsx handleDeleteJobClick job: '+JSON.stringify(job));
    // console.log('body.jsx handleDeleteJobClick this.state: '+JSON.stringify(this.state));
    axios({
      method: 'DELETE',
      url: '/api/v01/jobs/'+job.id+'.json',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
      console.log('Body handleDeleteJobClick response returned')
      console.log(' - ' + JSON.stringify(response.data))
      let newState = this.state.jobs.filter((jobFilt)=> {
        return job.id != jobFilt.id;
      });
      // console.log('handleDeleteJobClick updated state: '+JSON.stringify(newState))
      this.setState({ jobs: newState })
      // console.log('handleDeleteJobClick state set: '+JSON.stringify(newState))
    })
    .catch((error) => {
      console.log('handleDeleteJobClick - error response returned')
      console.error(error);
    });
  }

  handleEdit(job) {
    console.log('handleEdit job: '+JSON.stringify(job))
    // console.log('handleEdit this.state: '+JSON.stringify(this.state))
    let newState = this.state.jobs.filter((jobFilt)=> {
      return job.id != jobFilt.id;
    }).concat(job);
    // console.log('handleEdit updated state: '+JSON.stringify(newState))
    this.setState({ jobs: newState })
    // console.log('handleEdit state set: '+JSON.stringify(newState))
  }


  componentDidMount() {
    console.log('Body Component was mounted');
    axios.get('/api/v01/jobs.json')
      .then((response) => {
        // console.log('componentDidMount response returned' + JSON.stringify(response.data))
        this.setState({ jobs: response.data });
        // console.log('setState to: ' + JSON.stringify(response.data))
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
        <JobListing
          jobs={this.state.jobs}
          handleDeleteClick={this.handleDeleteJobClick}
          handleEdit={this.handleEdit} />
      </div>
    )
  }
}

export default Body;
