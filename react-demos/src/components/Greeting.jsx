import React from 'react'
const message ="Welcome to the react course";
const dateToday = new Date();


const Greeting = ({timeOfDay}) => {
    return (
        <div>
          <h1>{message}</h1>
        <h2> Today Current date is : {dateToday.toLocaleDateString()}</h2>
        <h2>{timeOfDay === "Morning" ? "Good Morning" : timeOfDay === "Afternoon" ? "Good Afternoon" : "Good Evening"}</h2>
        </div>
    )
}
export default Greeting;
