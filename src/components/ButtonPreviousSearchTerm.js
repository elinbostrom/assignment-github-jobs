import React, { useContext } from 'react'
import { JobContext } from '../contexts/JobContextProvider'

export default function ButtonPreviousSearchTerm({ item }) {
  const { setJobList } = useContext(JobContext);

  return (
    <button onClick={() => setJobList(item)}>
      {item.term}
    </button>
  )
}
