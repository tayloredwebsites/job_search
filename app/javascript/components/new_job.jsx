/* app/javascripts/components/new_job.jsx */

import React from 'react'
import axios from 'axios';

class NewJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiter: '',
      company: '',
    };
    this.handleClick = this.handleClick.bind(this)
    this.setRecruiter = this.setRecruiter.bind(this)
    this.setCompany = this.setCompany.bind(this)
  }

  clearFields() {
    this.setState({recruiter: '', company: ''})
  }

  handleClick() {
    console.log('this.state: ' + JSON.stringify(this.state))

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

  setRecruiter(e) {
    console.log('new_job.jsx setRecruiter e: '+e)
    let newRecruiter = e.target.value;
    console.log('new_job.jsx newRecruiter: '+newRecruiter)
    this.setState({recruiter: newRecruiter});
  }

  setCompany(e) {
    console.log('new_job.jsx setCompany e: '+e)
    let newCompany = e.target.value;
    console.log('new_job.jsx newCompany: '+newCompany)
    this.setState({company: newCompany});
  }

  render() {
    return (
      <div>
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
