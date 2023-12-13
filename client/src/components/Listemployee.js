import React, { Fragment, useEffect, useState } from "react";
import EditEmployee from "./Editemployee";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  // delete employee function
  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/employees/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEmployees(employees.filter((employee) => employee.emp_id !== id));
      } else {
        console.error("Failed to delete employee.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/employees");
      const jsonData = await response.json();
      console.log(jsonData);
      setEmployees(jsonData);
    } catch (err) {
      
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

 

  return (
    <Fragment>
      <table className="table mt-5 text-center table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.emp_id}>
              <td>{employee.emp_id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.dob}</td>
              <td>{employee.address}</td>
              <td>{employee.salary}</td>
              <td>
                <EditEmployee employee={employee} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.emp_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListEmployees;
