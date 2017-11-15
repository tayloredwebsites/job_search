/* app/javascripts/components/job_listing.jsx */

import React from 'react';
import axios from 'axios';

import JobListing from './job_listing';
import NewJob from './new_job';

// import {jobList} from './api/jobList';

// Main section of page, with NewJob form on top and JobListing below.
class Main extends React.Component {

  constructor () {
    super();
    // Source for All Jobs State in Main component.
    this.state = {
      jobs: []
    };
    this.handleAddJobClick = this.handleAddJobClick.bind(this);
    this.handleDeleteJobClick = this.handleDeleteJobClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.jobList = this.jobList.bind(this);
  }

  // Added job is added to All Jobs State
  handleAddJobClick(job) {
    // console.log('handleAddJobClick job: '+JSON.stringify(job))
    let newState = this.state.jobs.concat(job);
    this.setState({ jobs: newState });
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
        return job.id !== jobFilt.id;
      });
      this.setState({ jobs: newState });
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
      return job.id !== jobFilt.id;
    }).concat(job);
    this.setState({ jobs: newState });
  }


  jobList(env) {
    return axios.get(env.host+'/api/'+env.api_ver+'/jobs.json');
  };

  // List jobs when body component is mounted.
  componentDidMount() {
    console.log('Body Component was mounted');
    this.jobList({
        host: 'http://localhost:3001',
        api_ver: 'v01'
    })
    .then((response) => {
      console.log('got response data: '+JSON.stringify(response.data));
      this.setState({ jobs: response.data });
      console.log('set state: '+JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log('apiGetJobs error: '+error.message);
      console.error(error);
    });

  }

  // render NewJob and JobListing components
  render() {
    return (
      <main>
        Hello create_react_app on Rails 5!
        <NewJob handleAddJobClick={this.handleAddJobClick} />
        <JobListing
          jobs={this.state.jobs}
          handleDeleteClick={this.handleDeleteJobClick}
          handleEdit={this.handleEdit} />
      </main>
    )
  }
}

export default Main;
