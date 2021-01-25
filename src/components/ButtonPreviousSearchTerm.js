import React, { useContext } from 'react'
import { JobContext } from '../contexts/JobContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

export default function ButtonPreviousSearchTerm({ item }) {
  const { setJobList } = useContext(JobContext);

  return (
    <>
      {item &&
        <button onClick={() => setJobList(item)}>
          <FontAwesomeIcon icon={faHistory} />  {item.term}
        </button>}
    </>
  )
}
