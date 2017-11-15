/* app/javascripts/components/job_listing.jsx */

import React from 'react';

import Job from './job'

// Listing of Job components
class JobListing extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  // update Jobs state upstream after delete
  handleDeleteClick(job) {
    // console.log('Clicked delete');
    this.props.handleDeleteClick(job);
  }

  // update Jobs state upstream after update
  handleEdit(job) {
    // console.log('Clicked edit');
    // console.log('job: '+JSON.stringify(job));
    this.props.handleEdit(job);
  }

  render() {

    console.log('job_listing render - jobs: '+JSON.stringify(this.props.jobs));
    // list of individual jobs
    let jobsList = this.props.jobs.map((job) => {
      return (
        <Job
          key={job.id}
          job={job}
          handleDeleteClick = {this.handleDeleteClick.bind(this, job)}
          handleEdit = {this.handleEdit}
        />
      )
    });

    // render listing of Jobs
    return (
      <div className='jobListing'>
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

