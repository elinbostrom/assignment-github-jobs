import React from 'react'
import JobItem from './JobItem';

export default function JobList({ jobList }) {
  const jobs = Object.entries(jobList.jobs);

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
