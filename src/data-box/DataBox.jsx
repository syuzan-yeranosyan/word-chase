import React from 'react';
import PropTypes from 'prop-types';
import './DataBox.css';

const DataBox = ({ data }) => {

  return (
    <div className="data-box-container">
      {console.log(data)}
      <div className="data-box">
        {data.phonetic && <p>Phonetic:<span>{data.phonetic}</span></p>}
        {data.origin && <p>Origin:<span>{data.origin}</span></p>}
        {
          data.meanings[0]?.definitions?.map((item, index) => {
            return (
              <div className="definition" key={index.toString()}>
                <p>{item.definition}</p>
                <div className="synonyms">
                  {
                    item.synonyms?.map((synonym, index) => {
                      return (
                        <div key={index.toString()}><p>{synonym}</p></div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

DataBox.propTypes = {
  data: PropTypes.object,
}

DataBox.defaultProps = {
  data: {},
}

export default DataBox;
