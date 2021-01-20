import React, { useState, useEffect } from 'react'

export default function JobDetailPage(props) {
  const id = props.match.params.id;
  const JOB_URL = `https://jobs.github.com/positions/${id}/`;
  const [job, setJob] = useState();

  useEffect(() => {
    fetch('https://jobs.github.com/positions/dcf7cacf-ac39-4e6e-a5df-83135f69cff0')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      Job Detail Page
    </div>
  )
}
