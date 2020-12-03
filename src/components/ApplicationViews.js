import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomersList } from "./customer/CustomerList"
import { EmployeesList } from "./employee/EmployeeList"

export const ApplicationViews = (props) => {
    return (
        <>
<AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                    </Route>
        </CustomerProvider>
    </LocationProvider>
</AnimalProvider>

<AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalList />
                </Route>
                </CustomerProvider>
    </LocationProvider>
</AnimalProvider>
<AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomersList />
                </Route>
                </CustomerProvider>
    </LocationProvider>
</AnimalProvider>
<AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
            <EmployeeProvider>
                {/* Render the employee list when http://localhost:3000/animals */}
                <Route path="/employees">
                    <EmployeesList />
                </Route>
                    </EmployeeProvider>
                </CustomerProvider>
    </LocationProvider>
</AnimalProvider>
        </>
    )
}