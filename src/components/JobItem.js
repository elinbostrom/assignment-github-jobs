import React from 'react'

export default function JobItem({ data }) {


  const createMarkup = () => {
    return { __html: data.description };
  }

  return (
    <article>
      <strong>{data.type}</strong>
      <h2>{data.title}</h2>
      {data.company_url && <a href={data.company_url}>{data.company_url}</a>}
      <p dangerouslySetInnerHTML={createMarkup()} />
      <img src={data.company_logo} alt={data.company} />
    </article>
  )
}
