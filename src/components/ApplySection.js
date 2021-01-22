import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContextProvider';

export default function ApplySection({ apply }) {
  const { createMarkup } = useContext(JobContext)

  return (
    <div dangerouslySetInnerHTML={createMarkup(apply)} />
  )
}
