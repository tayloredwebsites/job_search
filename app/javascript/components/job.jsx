// job.jsx

import React from 'react'
import axios from 'axios';

// Component for individual Job
class Job extends React.Component {
  constructor(props) {
    super(props);
    // state includes editing mode and edited job fields
    this.state = {
      editing: false,
      job: {
        id: props.job.id,
        recruiter: props.job.recruiter,
        company: props.job.company,
      }
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.setRecruiter = this.setRecruiter.bind(this)
    this.setCompany = this.setCompany.bind(this)
  }

  // pass delete event upstream to update state
  handleDelete() {
    console.log('job.jsx handleDelete: ');
    console.log('state: '+JSON.stringify(this.state));
    this.props.handleDeleteClick(this.state.job);
  }

  // Toggle Edit state (between edit job and display job)
  // handle click on the 'Edit' or 'Save' button
  // On save:
  // - save changes to server
  // - and pass event upstream to update state
  handleEdit() {
    console.log('job.jsx handleEdit: ');
    this.setState({editing: !this.state.editing})
    console.log('job.jsx handleEdit state: '+JSON.stringify(this.state));
    if(this.state.editing) {
      axios.put('/api/v01/jobs/'+this.state.job.id+'.json', this.state.job)
        .then((response) => {
          console.log('Job handleEdit response returned');
          console.log(' - ' + JSON.stringify(response.data));
          this.props.handleEdit(response.data);
        })
        .catch((error) => {
          console.log('post new job json error response returned');
          console.error(error);
        });
    }
  }

  // update state of recruiter from input field value
  setRecruiter(e) {
    console.log('new_job.jsx setRecruiter e: '+e)
    let newRecruiter = e.target.value;
    console.log('new_job.jsx newRecruiter: '+newRecruiter)
    var newJob = {...this.state.job};
    newJob.recruiter = newRecruiter;
    this.setState({job: newJob});
    console.log('job.jsx setRecruiter state: '+JSON.stringify(this.state));
    console.log('job.jsx setRecruiter job: '+JSON.stringify(this.state.job));
  }

  // update state of company from input field value
  setCompany(e) {
    console.log('new_job.jsx setCompany e: '+e)
    let newCompany = e.target.value;
    console.log('new_job.jsx newCompany: '+newCompany)
    var newJob = {...this.state.job};
    newJob.company = newCompany;
    this.setState({job: newJob});
    console.log('job.jsx setCompany state: '+JSON.stringify(this.state));
    console.log('job.jsx setCompany job: '+JSON.stringify(this.state.job));
  }

  render() {
    // display job as input fields or text depending on editing mode
    let thisJob = this.props.job;
    let inForm = this.state.editing;
    let recruiterTag = inForm ? (
      <td className='recruiter'><input type='text' defaultValue={thisJob.recruiter} onChange={this.setRecruiter} /></td>
    ) : (
      <td className='recruiter'>{thisJob.recruiter}</td>
    );
    let companyTag = inForm ? (
      <td className='company'><input type='text' defaultValue={thisJob.company} onChange={this.setCompany} /></td>
    ) : (
      <td className='company'>{thisJob.company}</td>
    );
    // display table row for job with delete and edit/save button
    return (
      <tr className='row' key={thisJob.id}>
        {recruiterTag}
        {companyTag}
        <td>
          <button className='deleteButton' onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>{this.state.editing ? 'Save' : 'Edit'}</button>
        </td>
      </tr>
    )
  }
}

export default Job;

