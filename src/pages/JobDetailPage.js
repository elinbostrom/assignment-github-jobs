import React, { useState, useEffect } from 'react'

export default function JobDetailPage(props) {
  const id = props.match.params.id;
  const JOB_URL = `https://jobs.github.com/positions/${id}/`;
  const [job, setJob] = useState();

  useEffect(() => {
    fetch(JOB_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      Job Detail Page
    </div>
  )
}
