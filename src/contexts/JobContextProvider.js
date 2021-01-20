import React, { createContext, useState } from 'react'

export const JobContext = createContext({});

export default function JobContextProvider({ children }) {
  const API_URL = "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";
  const [jobList, setJobList] = useState(null);

  return (
    <JobContext.Provider value={{ API_URL, jobList, setJobList }}>
      {children}
    </JobContext.Provider>
  )
}
