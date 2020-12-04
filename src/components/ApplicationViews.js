import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalList } from "./animal/AnimalList"
import { CustomersList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
    return (
        <>
<AnimalProvider>
    <EmployeeProvider>
        <LocationProvider>
            <CustomerProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                    </Route>
                    <LocationProvider>
                        <Route exact path="/locations/:locationId(\d+)" render={
                        props => <LocationDetail {...props} />
                        } />
                </LocationProvider>
            </CustomerProvider>
        </LocationProvider>
    </EmployeeProvider>
</AnimalProvider>

<AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" render={
                                    props => <AnimalList {...props} />
                                    } />

                            <Route exact path="/animals/create" render={
                                    props => <AnimalForm {...props} />
                                    } />
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
                            {/* New route for showing employee details */}
                            <Route path="/employees/:employeeId(\d+)" render={
                                    props => <EmployeeDetail {...props} />
                                    } />
                    </EmployeeProvider>
                </CustomerProvider>
    </LocationProvider>
</AnimalProvider>
        </>
    )
}