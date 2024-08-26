import React from 'react'
import { useState, useEffect } from 'react'

const Body = () => {
    const [data, setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/api/data/')
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);

      const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Data' : 'Show Data'}
      </button>
      {isVisible && (
        <div>
          <h2>Data from Backend:</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Body
