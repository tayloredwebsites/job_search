// job.jsx

import React from 'react'
// import axios from 'axios';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      id: props.job.id,
      recruiter: props.job.recruiter,
      company: props.job.company,
    };
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    console.log('job.jsx handleDelete: ');
    console.log('state: '+JSON.stringify(this.state));
    this.props.handleDeleteClick(this.state);
  }

  // handleEdit() {
  //   console.log('job.jsx handleEdit: ');
  //   console.log('state: '+JSON.stringify(this.state));
  // }

  render() {
    let thisJob = this.props.job;
    let inForm = this.state.editing;
    let recruiterTag = inForm ? (
      <td className='recruiter'><input type='text' defaultValue={thisJob.recruiter} /></td>
    ) : (
      <td className='recruiter'>{thisJob.recruiter}</td>
    );
    let companyTag = inForm ? (
      <td className='company'><input type='text' defaultValue={thisJob.company} /></td>
    ) : (
      <td className='company'>{thisJob.company}</td>
    );
    return (
      <tr className='row' key={thisJob.id}>
        {recruiterTag}
        {companyTag}
        <td>
          <button className='deleteButton' onClick={this.handleDelete}>Delete</button>
          {/* <button onClick={this.handleEdit}>Test</button>*/}
        </td>
      </tr>
    )
  }
}

export default Job;

