import React, { useEffect, useState } from 'react'

function App() {
 const [data, setData] = useState([]);
  useEffect(() => {
fetch('http://localhost:8081/db')
.then(res => res.json())
.then(data => setData(data))
.catch(err => console.log(err));
  }, [])
  return (
    <div style={{padding:"50px"}}>
      <table>
        <thead>
          <th>DB: </th>
          <th>Index_priv	: </th>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.Db}</td>
              <td>{d.Index_priv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
