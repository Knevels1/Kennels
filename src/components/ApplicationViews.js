import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomersList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"

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
                            <Route exact path="/employees" render={
                                    props => <EmployeeList {...props} />
                                    } />

                            <Route exact path="/employees/create" render={
                                    props => <EmployeeForm {...props} />
                                    } />
                    </EmployeeProvider>
                </CustomerProvider>
    </LocationProvider>
</AnimalProvider>
        </>
    )
}