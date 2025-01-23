import React from 'react'

const ListArray = () => {
    const numbers = [1, 2, 3, 4, 5];
    const userInfo = [
        {
            name: "John",
            age: 30,
            email: "john@example.com"
        },
        {
            name: "Jane",
            age: 25,
            email: "jane@example.com"
        },
        {
            name: "Bob",
            age: 40,
            email: "bob@example.com"
        }
    ]


    return (
        <div>

            <ul>
            {numbers.map((item, index) => (
                <li key={index}>{item}</li>
            ))}

            </ul>

            <ul>
                {userInfo.map((item, index) => (
                    <li key={index}>{item.name} {item.age} {item.email}</li>

                ))}
            </ul>

            {userInfo.map(({name, age,email}) => (
                <div key={Math.random()}>
                    <h1>{name}</h1>
                    <h2>{age}</h2>
                    <h3>{email}</h3>
                </div>
            ))}
        </div>
    )
}
export default ListArray
