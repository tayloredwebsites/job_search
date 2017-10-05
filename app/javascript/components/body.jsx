/* app/javascripts/components/job_listing.jsx */

import React from 'react'

import JobListing from '../components/job_listing'
import NewJob from '../components/new_job'

class Body extends React.Component {
  render() {
    return (
      <div>
        <NewJob />
        <JobListing />
      </div>
    )
  }
}

export default Body;
