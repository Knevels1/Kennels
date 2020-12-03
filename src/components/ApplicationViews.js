import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalsList } from "./animal/AnimalList"
import { CustomersList } from "./customer/CustomerList"
import { EmployeesList } from "./employee/EmployeeList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalsList />
                </Route>
            </AnimalProvider>
            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomersList />
                </Route>
            </CustomerProvider>
            <EmployeeProvider>
                {/* Render the employee list when http://localhost:3000/animals */}
                <Route path="/employees">
                    <EmployeesList />
                </Route>
            </EmployeeProvider>
        </>
    )
}