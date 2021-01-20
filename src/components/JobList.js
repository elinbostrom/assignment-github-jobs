import React from 'react'
import JobItem from './JobItem';

export default function JobList({ previousSearchItems }) {
  const jobs = Object.entries(previousSearchItems.jobs);

  return (
    <ul>
      {jobs && Array.isArray(jobs) && jobs.map(job => {
        return (
          <JobItem key={job[1].id} data={job[1]} />
        )
      })}
    </ul>
  )
}
