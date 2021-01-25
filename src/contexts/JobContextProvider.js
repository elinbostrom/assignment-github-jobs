import React, { createContext, useState } from 'react'

export const JobContext = createContext({});

export default function JobContextProvider({ children }) {
  const API_URL = "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";
  const [previousSearchItems, setPreviousSearchItems] = useState([]);
  const [jobList, setJobList] = useState([]);

  const createMarkup = (data) => {
    return { __html: data };
  }

  const jobObj = (searchTerm, data) => {
    return { term: searchTerm, jobs: data }
  }

  return (
    <JobContext.Provider value={{
      API_URL,
      previousSearchItems,
      setJobList,
      jobList,
      setPreviousSearchItems,
      createMarkup,
      jobObj
    }}>
      {children}
    </JobContext.Provider>
  )
}
