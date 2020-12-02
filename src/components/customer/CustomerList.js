import React, { useContext, useEffect } from "react"
import { Customer } from "./Customer"
import { CustomerContext } from "./CustomerProvider"

export const CustomersList = () => {
  // This state changes when `getLocations()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      console.log("CustomerList: Initial render before data")
      getCustomers()
    },
    []
  )

  return (
    <div className="customers">
      {
        customers.map(cus => <Customer key={cus.id} customer={cus} />)
      }
    </div>
  )
}