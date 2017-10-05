/* app/javascripts/components/job_listing.jsx */

import React from 'react';
import axios from 'axios';

class JobListing extends React.Component {

  constructor () {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    console.log('Job Listing Component was mounted');
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

    let jobsState = this.state.jobs;
    console.log('render - jobs: '+JSON.stringify(jobsState));
    let jobsList = jobsState.map((job) => {
      return (
        <tr className='row' key={job.id}>
          <td className='recruiter'>{job.recruiter}</td>
          <td className='company'>{job.company}</td>
        </tr>
      )
    });

    return (
      <div>
        <h2>All Jobs Sought</h2>
        <table id='jobs-table'>
          <tbody>
            {jobsList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default JobListing;

