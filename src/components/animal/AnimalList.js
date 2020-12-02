import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"

export const AnimalsList = () => {
  // This state changes when `getLocations()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      console.log("AnimalsList: Initial render before data")
      getAnimals()
    },
    []
  )

  return (
    <div className="animals">
      {
        animals.map(ani => <Animal key={ani.id} animal={ani} />)
      }
    </div>
  )
}