import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ButtonReadMore({ id }) {
  const history = useHistory();

  return (
    <button className="read_more" onClick={() => history.push(`/job/${id}`)}>
      Read more
    </button>
  )
}
