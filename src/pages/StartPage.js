import React, { useContext } from 'react'
import ButtonPreviousSearchTerm from '../components/ButtonPreviousSearchTerm';
import JobList from '../components/JobList';
import SearchForm from '../components/SearchForm'
import { JobContext } from '../contexts/JobContextProvider';

export default function StartPage() {
  const { jobList, previousSearchItems } = useContext(JobContext);

  return (
    <main>
      <h1>GitHub Job Listing</h1>
      <SearchForm />
      {previousSearchItems && previousSearchItems.map((searchItem, index) => <ButtonPreviousSearchTerm key={index} item={searchItem} />)}
      {jobList && <JobList jobList={jobList} />}
      {jobList.jobs && Array.isArray(jobList.jobs) && jobList.jobs.length <= 0 ? <h2>No jobs found</h2> : null}
    </main>
  )
}
