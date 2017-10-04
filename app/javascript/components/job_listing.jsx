/* app/javascripts/components/job_listing.jsx */

import React from 'react'

class JobListing extends React.Component {

  componentDidMount() {
    console.log('Job Listing Component was mounted')
  }

  render() {
    return (
      <div>
        <h2>All Jobs Sought</h2>
      </div>
    )
  }
}

export default JobListing;

