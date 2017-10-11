/* app/javascripts/components/job_listing.jsx */

import React from 'react';

import Job from '../components/job'

class JobListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputRecruiter: '',
      inputCompany: '',
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDeleteClick(job) {
    console.log('Clicked delete');
    this.props.handleDeleteClick(job);
  }

  handleEdit(job) {
    console.log('Clicked edit');
    console.log('job: '+JSON.stringify(job));
    this.props.handleEdit(job);
  }

  render() {
    // console.log('render - this.props: '+JSON.stringify(this.props));
    let jobsState = this.props.jobs;
    // console.log('render - jobs: '+JSON.stringify(jobsState));

    let jobsList = jobsState.map((job) => {
      return (
        <Job
          key={job.id}
          job={job}
          handleDeleteClick = {this.handleDeleteClick.bind(this, job)}
          handleEdit = {this.handleEdit}
        />
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

