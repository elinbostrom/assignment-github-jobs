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
    <li className={props.detailpage ? 'detail_page_item' : 'job_list_item'}>
      <header>
        <div>
          <strong>{data.type}</strong>
          <h2>{data.title}</h2>
          {data.company_url && <a className="company_link" href={data.company_url}>{data.company_url}</a>}
        </div>
        <div>
          {props.detailpage ? <ApplySection apply={data.how_to_apply} /> : <ButtonReadMore id={data.id} />}
          <a className="image" href={data.company_url}>
            <img src={data.company_logo} alt={data.company} />
          </a>
        </div>
      </header>
      {description && <div dangerouslySetInnerHTML={createMarkup(description)} />}
    </li>
  )
}
