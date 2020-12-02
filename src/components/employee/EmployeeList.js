import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeesList = () => {
  // This state changes when `getLocations()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      console.log("EmployeeList: Initial render before data")
      getEmployees()
    },
    []
  )

  return (
    <div className="employees">
      {
        employees.map(emp => <Employee key={emp.id} employee={emp} />)
      }
    </div>
  )
}