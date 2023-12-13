import React, { Fragment, useState } from "react";

const EditEmployee = ({ employee }) => {
  const [name, setName] = useState(employee.name);
  const [department, setDepartment] = useState(employee.department);
  const [designation, setDesignation] = useState(employee.designation);
  const [salary, setSalary] = useState(employee.salary);
  const [dob, setDob] = useState(employee.dob);
  const [address, setAddress] = useState(employee.address);
  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const body = { name, department, designation, salary, dob,address };
      const response = await fetch(
        `http://localhost:5000/employees/${employee.emp_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${employee.emp_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${employee.emp_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Department:</label>
              <input
                type="text"
                className="form-control"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />

              <label>Designation:</label>
              <input
                type="text"
                className="form-control"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <label>Salary:</label>
              <input
                type="number"
                className="form-control"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <label>DOB:</label>
              <input
                type= "date"
                className="form-control"
                value={employee.dob}
                onChange={(e) => setDob(e.target.value)}
               />
               <label>Address:</label>
              <input
                type="text"
                className="form-control"
                value={employee.address}
                onChange={(e) => setAddress(e.target.value)}
               />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateEmployee(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditEmployee;




