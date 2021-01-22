import React from 'react'

export default function Navigation() {

  return (
    <nav>
      <button onClick={() => window.history.back()}>Go back</button>
    </nav>
  )
}
