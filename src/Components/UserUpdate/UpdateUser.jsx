import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const UpdateUser = () => {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  console.log(firstName);
  console.log(lastName);

  const sendDataToApi = () => {
    axios.put('http://localhost:3001/users', {
      firstName,
      lastName
    })
  }
  useEffect(() => {
    // setfirstName(localStorage.getItem('firstName'));
    // setlastName(localStorage.getItem('lastName'));
  }, [])
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='fname'
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Designation</label>
                <input type="text" name='lname'
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  className="form-control" />
              </div>

              <button type="submit" onClick={sendDataToApi} className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateUser