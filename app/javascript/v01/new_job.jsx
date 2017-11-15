/* app/javascripts/components/new_job.jsx */

import React from 'react'
import axios from 'axios';

// component with input fields to add a new Job
class NewJob extends React.Component {
  constructor(props) {
    super(props);
    // source for state of job input fields
    this.state = {
      recruiter: '',
      company: '',
    };
    this.handleClick = this.handleClick.bind(this)
    this.setRecruiter = this.setRecruiter.bind(this)
    this.setCompany = this.setCompany.bind(this)
  }

  // after successful create, clear the input fields state
  // and hence the input fields
  clearFields() {
    this.setState({recruiter: '', company: ''})
  }

  // handle submit new job click event
  handleClick() {
    console.log('this.state: ' + JSON.stringify(this.state))

    // create the new job, update state upstream, and clear fields
    axios.post('/api/v01/jobs.json', this.state)
      .then((response) => {
        console.log('NewJob handleClick response returned');
        console.log(' - ' + JSON.stringify(response.data));
        this.props.handleAddJobClick(response.data);
        this.clearFields();
      })
      .catch((error) => {
        console.log('post new job json error response returned');
        console.error(error);
      });
  }

  // update state of recruiter from input field value
  setRecruiter(e) {
    // console.log('new_job.jsx setRecruiter e: '+e)
    let newRecruiter = e.target.value;
    // console.log('new_job.jsx newRecruiter: '+newRecruiter)
    this.setState({recruiter: newRecruiter});
  }

  // update state of company from input field value
  setCompany(e) {
    // console.log('new_job.jsx setCompany e: '+e)
    let newCompany = e.target.value;
    // console.log('new_job.jsx newCompany: '+newCompany)
    this.setState({company: newCompany});
  }

  // render the new job fields
  render() {
    return (
      <div className='newJob'>
        <h2>Add a New Job</h2>
        <input
          placeholder='Enter the Recruiter'
          value={this.state.recruiter}
          onChange={this.setRecruiter} />
        <input
          placeholder='Enter Company Name'
          value={this.state.company}
          onChange={this.setCompany} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default NewJob;
