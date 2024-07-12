import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("/employees.json").then((res) => {
      setEmployees(res.data.employees);
    });
  }, []);

  return (
    <div className="App">
      <h1>Employees</h1>
      <div className="employee-container">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <div className="employee-image-container">
              <img src={employee.image} alt={`${employee.firstName} ${employee.lastName}`} />
            </div>
            <div className="employee-details">
              <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Phone:</strong> {employee.phone}</p>
              <p><strong>Title:</strong> {employee.title}</p>
              <p><strong>Department:</strong> {employee.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
