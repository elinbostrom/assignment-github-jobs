import React from 'react'
import ButtonReadMore from './ButtonReadMore';

export default function JobItem({ data }) {


  const createMarkup = () => {
    return { __html: data.description };
  }

  return (
    <article>
      <header>
        <strong>{data.type}</strong>
        <h2>{data.title}</h2>
        {data.company_url && <a href={data.company_url}>{data.company_url}</a>}
        <img src={data.company_logo} alt={data.company} />
        <ButtonReadMore id={data.id} />
      </header>
      <main dangerouslySetInnerHTML={createMarkup()} />
    </article>
  )
}
