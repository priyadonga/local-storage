import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleAddData = () => {
    const newData = { name, email, password };
    setData([...data, newData]);
    setName('');
    setEmail('');
    setPassword('');
    localStorage.setItem('data', JSON.stringify([...data, newData]));
  };

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>

{/* form------------------------------------------- */}

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                Add User
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label me-2">Name :- </label>
                    <input type="text" value={name} onChange={(e) => handleInputChange(e, setName)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label me-2">Email :- </label>
                    <input type="email"  value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label me-2">Password :-</label>
                    <input type="password" value={password}onChange={(e) => handleInputChange(e, setPassword)}/>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary" onClick={handleAddData}>Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* table---------------------------------------------- */}

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                User List
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                         <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
