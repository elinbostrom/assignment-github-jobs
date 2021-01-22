import React, { useContext } from 'react'
import ButtonReadMore from './ButtonReadMore';
import ApplySection from './ApplySection';
import { JobContext } from '../contexts/JobContextProvider';

export default function JobItem(props) {
  const { createMarkup } = useContext(JobContext);
  const data = props.data;
  let description;

  if (!props.detailpage) {
    description = `${data.description.slice(0, 400)}...`;
  }
  else {
    description = data.description;
  }

  return (
    <article>
      <header>
        <strong>{data.type}</strong>
        <h2>{data.title}</h2>
        {data.company_url && <a href={data.company_url}>{data.company_url}</a>}
        <img src={data.company_logo} alt={data.company} />
        {props.detailpage ? <ApplySection apply={data.how_to_apply} /> : <ButtonReadMore id={data.id} />}
      </header>
      {description && <main dangerouslySetInnerHTML={createMarkup(description)} />}
    </article>
  )
}
