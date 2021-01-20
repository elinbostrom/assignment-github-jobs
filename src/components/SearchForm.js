import React, { useContext, useState } from 'react'
import { JobContext } from '../contexts/JobContextProvider';

export default function SearchForm() {
  const { API_URL, setPreviousSearchItems } = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL + searchTerm.replace(" ", "+"))
      .then(res => res.json())
      .then(data => setPreviousSearchItems({ term: searchTerm, jobs: data }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What job are you searching for?
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Javascript" />
      </label>
      <button type="submit">Search</button>
    </form>
  )
}
