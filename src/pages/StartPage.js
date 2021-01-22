import React, { useContext } from 'react'
import JobList from '../components/JobList';
import SearchForm from '../components/SearchForm'
import { JobContext } from '../contexts/JobContextProvider';

export default function StartPage() {
  const { jobList } = useContext(JobContext);

  return (
    <main className="startpage">
      <h1 className="headline">GitHub Job Listing</h1>
      <SearchForm />
      {jobList && <JobList jobList={jobList} />}
      {jobList.jobs && Array.isArray(jobList.jobs) && jobList.jobs.length <= 0 ? <h2>No jobs found</h2> : null}
    </main>
  )
}
