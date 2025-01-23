const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = (isValid) =>  {
//     if(isValid) {
//         return <ValidPassword />
//     } else {
//         return <InvalidPassword />
//     }
// }


const Password = (isValid) => isValid? <ValidPassword /> : <InvalidPassword />
const Component = ({isValid}) => {
    return (
        <div>{Password(isValid)}</div>
    )
}
export default Component
