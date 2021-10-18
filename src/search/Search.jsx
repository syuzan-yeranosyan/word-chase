import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '../assets/icons/Search_Icon.svg';
import DataBox from '../data-box/DataBox';
import Loader  from '../Loader';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emptyBox, setEmptyBox] = useState(true);

  const search = () => {
    if(value) {
      setEmptyBox(false);
      setData([]);
      setLoading(true);

      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false)
      })
    }
  }

  return (
    <div className="bounding-box">
        <div className="search-box">
          <input type="text" placeholder="SEARCH" className="search-input" onChange={(e) => setValue(e.target.value)} />
          <img src={SearchIcon} alt="Search Icon" onClick={() => search()} />
        </div>

        {loading && !emptyBox && <Loader />}

        {data.length ? (
          <DataBox data={data[0]} emptyBox={emptyBox} />
        ) : loading ? null : (
          <div className="data-box-container no-results"><p>No results</p></div>
        )}

        {!data.length && emptyBox &&
          <div className="data-box-container">
            <div className="data-box-empty">
              <h4>DATA BOX</h4>
            </div>
          </div>
        }
    </div>
  )
};

export default SearchBox;
