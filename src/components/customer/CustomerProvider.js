import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {

  const [customers, setCustomer] = useState([]) 
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
      .then(res => res.json())
      .then(setCustomer)
      // .then(parsedLocations => setLocations(parsedLocations))
  }

  const addCustomer = customer => {
    return fetch("http://localhost:8088/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(getCustomers)
  }

  /*
      You return a context provider which has the
      `locations` state, the `addLocation` function,
      and the `getLocation` function as keys. This
      allows any child elements to access them.
  */
  return (
    <CustomerContext.Provider value={
      {
      customers, addCustomer, getCustomers
      }
    }>
      {props.children}
    </CustomerContext.Provider>
  )
}