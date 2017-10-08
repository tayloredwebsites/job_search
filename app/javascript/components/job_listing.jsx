/* app/javascripts/components/job_listing.jsx */

import React from 'react';

class JobListing extends React.Component {

  handleDeleteClick(job) {
    console.log('Clicked delete');
    this.props.handleDeleteClick(job)
  }

  render() {
    console.log('render - this.props: '+JSON.stringify(this.props));
    let jobsState = this.props.jobs;
    console.log('render - jobs: '+JSON.stringify(jobsState));

    let jobsList = jobsState.map((job) => {
      return (
        <tr className='row' key={job.id}>
          <td className='recruiter'>{job.recruiter}</td>
          <td className='company'>{job.company}</td>
          <td>
            <button className='deleteButton' onClick={this.handleDeleteClick.bind(this, job)}>Delete</button>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <h2>Jobs Listing</h2>
        <table id='jobs-table' style={{tableLayout: 'fixed'}}>
          <thead>
            <tr>
              <th className='recruiterHead'>Recruiter</th>
              <th className='companyHead'>Company</th>
              <th className='actionsHead'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobsList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default JobListing;

