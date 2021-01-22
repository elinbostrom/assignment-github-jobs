import React from 'react'
import JobItem from './JobItem';

export default function JobList({ jobList }) {
  const jobs = jobList.jobs;

  return (
    <ul className="job_list">
      {jobs && Array.isArray(jobs) && jobs.map(job => {
        return (
          <JobItem key={job.id} data={job} />
        )
      })}
    </ul>
  )
}
