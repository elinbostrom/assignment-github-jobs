import React from 'react'

export default function ButtonPreviousSearchTerm({ previousSearchItems }) {
  return (
    <button>
      {previousSearchItems.term}
    </button>
  )
}
