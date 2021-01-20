import React, { useContext, useState, useEffect } from 'react'
import ButtonPreviousSearchTerm from '../components/ButtonPreviousSearchTerm';
import JobList from '../components/JobList';
import SearchForm from '../components/SearchForm'
import { JobContext } from '../contexts/JobContextProvider';

export default function StartPage() {
  const { previousSearchItems } = useContext(JobContext);

  // useEffect(() => {
  //   emptyList = previousSearchItems.jobs ?? null;
  // }, [previousSearchItems])

  return (
    <main>
      <h1>GitHub Job Listing</h1>
      <SearchForm />
      {previousSearchItems && <ButtonPreviousSearchTerm previousSearchItems={previousSearchItems} />}
      {previousSearchItems && <JobList previousSearchItems={previousSearchItems} />}
      {previousSearchItems && Array.isArray(previousSearchItems.jobs) && previousSearchItems.jobs.length <= 0 && <h2>No jobs found</h2>}
    </main>
  )
}
