/* app/javascripts/components/job_listing.jsx */

import React from 'react';

class JobListing extends React.Component {

  render() {

    let jobsState = this.props.jobs;
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

