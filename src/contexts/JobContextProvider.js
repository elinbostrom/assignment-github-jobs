import React, { createContext, useState } from 'react'

export const JobContext = createContext({});

export default function JobContextProvider({ children }) {
  const API_URL = "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";
  const [previousSearchItems, setPreviousSearchItems] = useState(null);

  return (
    <JobContext.Provider value={{ API_URL, previousSearchItems, setPreviousSearchItems }}>
      {children}
    </JobContext.Provider>
  )
}
