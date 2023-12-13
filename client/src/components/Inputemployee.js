import React, { Fragment, useState } from "react";

const InputEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    department: "",
    designation: "",
    salary: "",
    dob: "",
    address: ""
  });

  const { name, department, designation, salary, dob, address } = employeeData;

  const onChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeData)
      });

      if (response.ok) {
        console.log("Employee added successfully!");
        window.location = "/";
      } else {
        console.error("Failed to add employee.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Employee Management System</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Department"
          name="department"
          value={department}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Designation"
          name="designation"
          value={designation}
          onChange={onChange}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Salary"
          name="salary"
          value={salary}
          onChange={onChange}
        />
        <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          name="dob"
          value={dob}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          name="address"
          value={address}
          onChange={onChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputEmployee;
