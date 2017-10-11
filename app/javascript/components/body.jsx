/* app/javascripts/components/job_listing.jsx */

import React from 'react'
import axios from 'axios';

import JobListing from '../components/job_listing'
import NewJob from '../components/new_job'

// Body of page, with NewJob form on top and JobListing below.
class Body extends React.Component {

  constructor () {
    super();
    // Source for All Jobs State in Body component.
    this.state = {
      jobs: []
    };
    this.handleAddJobClick = this.handleAddJobClick.bind(this)
    this.handleDeleteJobClick = this.handleDeleteJobClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  // Added job is added to All Jobs State
  handleAddJobClick(job) {
    // console.log('handleAddJobClick job: '+JSON.stringify(job))
    let newState = this.state.jobs.concat(job);
    this.setState({ jobs: newState })
  }

  // Deleted job is removed from All Jobs State upon success
  handleDeleteJobClick(job) {
    // console.log('body.jsx handleDeleteJobClick job: '+JSON.stringify(job));
    axios({
      method: 'DELETE',
      url: '/api/v01/jobs/'+job.id+'.json',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
      // console.log('Body handleDeleteJobClick response returned')
      // console.log(' - ' + JSON.stringify(response.data))
      let newState = this.state.jobs.filter((jobFilt)=> {
        return job.id != jobFilt.id;
      });
      this.setState({ jobs: newState })
    })
    .catch((error) => {
      console.log('handleDeleteJobClick - error response returned')
      console.error(error);
    });
  }

  // Updated Job:
  // - first removed old job All Jobs State
  // - new job is concatenated
  handleEdit(job) {
    // console.log('handleEdit job: '+JSON.stringify(job))
    let newState = this.state.jobs.filter((jobFilt)=> {
      return job.id != jobFilt.id;
    }).concat(job);
    this.setState({ jobs: newState })
  }


  // List jobs when body component is mounted.
  componentDidMount() {
    // console.log('Body Component was mounted');
    axios.get('/api/v01/jobs.json')
      .then((response) => {
        this.setState({ jobs: response.data });
      })
      .catch((error) => {
        console.log('componentDidMount error response returned')
        console.error(error);
      });
  }

  // render NewJob and JobListing components
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
