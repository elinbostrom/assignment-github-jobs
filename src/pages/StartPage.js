import React, { useContext } from 'react'
import JobList from '../components/JobList';
import SearchForm from '../components/SearchForm'
import ButtonPreviousSearchTerm from '../components/ButtonPreviousSearchTerm';
import { JobContext } from '../contexts/JobContextProvider';

export default function StartPage() {
  const { previousSearchItems, jobList, setJobList } = useContext(JobContext);

  return (
    <main className="startpage">
      <h1 className="headline">GitHub Job Listing</h1>
      <section className="form">
        <SearchForm />
        {Array.isArray(previousSearchItems) && previousSearchItems.length > 0 && <div className="btn_prev_search">
          <p>Previous searchterms</p>
          {previousSearchItems && previousSearchItems.map((searchItem, index) => <ButtonPreviousSearchTerm key={index} item={searchItem} />)}
        </div>}
      </section>
      {jobList && <JobList jobList={jobList} />}
      {jobList.jobs && Array.isArray(jobList.jobs) && jobList.jobs.length <= 0 ? <h2 className="no_jobs">No jobs found</h2> : null}
    </main>
  )
}
