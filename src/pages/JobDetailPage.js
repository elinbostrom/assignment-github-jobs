import React, { useState, useEffect } from 'react'
import JobItem from '../components/JobItem';

export default function JobDetailPage(props) {
  const id = props.match.params.id;
  const JOB_URL = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;
  const [job, setJob] = useState();

  useEffect(() => {
    fetch(JOB_URL)
      .then(res => res.json())
      .then(data => setJob(data))
  }, [])

  return (
    <article>
      Job Detail Page
      {job && <JobItem data={job} detailpage />}
    </article>
  )
}
