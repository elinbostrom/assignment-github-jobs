import React, { useContext, useState } from 'react'
import { JobContext } from '../contexts/JobContextProvider';
import ButtonPreviousSearchTerm from './ButtonPreviousSearchTerm';

export default function SearchForm() {
  const { API_URL, setJobList, previousSearchItems, setPreviousSearchItems, jobObj } = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");

  const storeInContext = (data) => {
    setJobList(jobObj(searchTerm, data))
    if (!previousSearchItems) {
      setPreviousSearchItems(jobObj(searchTerm, data))
    }
    else {
      setPreviousSearchItems(prevState => [...prevState, jobObj(searchTerm, data)]);
    }
  }

  const checkSearchTerm = () => {
    const previousSearchArray = Object.entries(previousSearchItems);
    let obj;

    previousSearchArray.forEach(searchItem => {
      if (searchItem[1].term === searchTerm) {
        obj = jobObj(searchTerm, searchItem[1].jobs)
      }
    })

    if (obj?.term && obj.term === searchTerm) {
      setJobList(obj)
    }
    else {
      fetch(API_URL + searchTerm.replace(" ", "+"))
        .then(res => res.json())
        .then(data => storeInContext(data))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (0 < previousSearchItems.length) {
      checkSearchTerm();
    }

    else {
      fetch(API_URL + searchTerm.replace(" ", "+"))
        .then(res => res.json())
        .then(data => storeInContext(data))
    }

    setSearchTerm("");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="What job are you searching for?" />
        <button type="submit">Search</button>
      </form>
      {previousSearchItems.length > 0 && <div className="btn_prev_search">
        <p>Previous searchterms</p>
        {previousSearchItems && previousSearchItems.map((searchItem, index) => <ButtonPreviousSearchTerm key={index} item={searchItem} />)}
      </div>}
    </div>
  )
}
