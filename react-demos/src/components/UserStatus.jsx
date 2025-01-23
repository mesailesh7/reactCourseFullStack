import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
    const checkUser = (loggedIn, isAdmin) => {
        if (loggedIn && isAdmin) {
            return "welcome admin"
        }
        else if(loggedIn) {
            return "Welcome user"
        }
    }
    return (
        <div>
            {checkUser(loggedIn, isAdmin)}
        </div>
    )
}
export default UserStatus
