const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
// POST, GET, DELETE, PUT

//create a Employee Detail

app.post("/employees", async (req, res) => {
    try { 
      const { name, department, designation, salary, dob, address } = req.body;

      const newEmployee = await pool.query(
        "INSERT INTO employee (Name, Department, Designation, salary, dob, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, department, designation, salary, dob, address]
      );
  
      res.json(newEmployee.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  

//get all Details
app.get("/employees", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM employee ORDER BY emp_id ASC");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
// Get a specific employee
app.get("/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await pool.query("SELECT * FROM employee WHERE emp_id = $1", [id]);
  
      res.json(employee.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // Update an employee
  app.put("/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, department, designation, salary, dob, address } = req.body;
      const updateEmployee = await pool.query(
        "UPDATE employee SET name = $1, department = $2, designation = $3, salary = $4, dob = $5, address = $6 WHERE emp_id = $7",
        [name, department, designation, salary, dob, address, id]
      );
  
      res.json("Employee was updated!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // Delete an employee
  app.delete("/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteEmployee = await pool.query("DELETE FROM employee WHERE emp_id = $1", [id]);
      res.json("Employee was deleted!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
app.listen(5000, () => {
  console.log("server has started on port 5000");
});