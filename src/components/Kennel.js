import React from "react"
import { AnimalsList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomersList } from "./customer/CustomerList"
import { CustomerProvider} from "./customer/CustomerProvider"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { EmployeesList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import "./employee/Employee.css"
import "./location/Location.css"
import "./customer/Customer.css"
import "./animal/Animal.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
        <AnimalProvider>
                <AnimalsList />
            </AnimalProvider>
        </article>
        <h2>Customers</h2>
        <article className="customers">
        <CustomerProvider>
                <CustomersList />
            </CustomerProvider>
        </article>
        <h2>Employees</h2>
            <EmployeeProvider>
                <EmployeesList />
            </EmployeeProvider>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)