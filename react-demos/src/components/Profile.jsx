// Step 3: useState with an Object of Data
// 1. Create a new file called Profile.jsx.
// 2. Inside this file, create a functional component called Profile.
// 3. Use useState to manage an object with user profile information.
// • Initialize the state with an object containing name and age.
// • Provide input fields to update the name and age.
// • Display the updated profile information.

import {useState} from "react";

const Profile = () => {
const [info, setInfo] = useState(
    {
        name: "John",
        age: 25
    }
);

const [ageNumber, setAgeNumber] = useState("`${info.age}`");
const[name,setName] = useState("");

const handleClick = () => {
    setInfo({...info, age: ageNumber});
    setInfo({...info, name: name});
}


    return (
        <div>
            Age: <input type="number" value={ageNumber} onChange={(e) => setAgeNumber(e.target.value)}/>
            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleClick}>Click</button>
            <h1>{info.age}</h1>
            <h1>{info.name}</h1>
        </div>

    )
}
export default Profile
