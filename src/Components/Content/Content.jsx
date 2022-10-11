import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Content = () => {
  let history = useHistory();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  console.log(firstName);
  console.log(lastName);

  const sendDataToApi = () => {
    axios.post('http://localhost:3001/users', {
      firstName,
      lastName
    }).then(() => {
      history.push("/userlist");
    })
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='fname'
                  onChange={(e) => setfirstName(e.target.value)}
                  className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Designation</label>
                <input type="text" name='lname'
                  onChange={(e) => setlastName(e.target.value)}
                  className="form-control" />
              </div>

              <button type="submit" onClick={sendDataToApi} className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content