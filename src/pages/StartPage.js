import React, { useContext, useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import { JobContext } from '../contexts/JobContextProvider';

export default function StartPage() {
  const { previousSearchItems } = useContext(JobContext);

  useEffect(() => {
    console.log(previousSearchItems);
  }, [previousSearchItems])

  return (
    <main>
      <h1>GitHub Job Listing</h1>
      <SearchForm />
    </main>
  )
}
