import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const UserList = () => {
  // const history = useHistory();

  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/users').then((getData) => {
      console.log(getData.data);
      setapiData(getData.data);
    })
  }, [])

  const setId = (id) => {
    console.log(id);
    localStorage.setItem("id", id);
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data) => {
                  return (
                    <tr>
                      <th>{data.id}</th>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>
                        <Link to="/update">
                          <button onClick={() => setId(data.id)} className='btn btn-warning'>Edit</button>
                        </Link>
                        <button className='btn btn-danger'>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList