import React from 'react'

export default function ButtonPreviousSearchTerm({ jobList }) {
  return (
    <button>
      {jobList.term}
    </button>
  )
}
