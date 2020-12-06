import React from 'react'

const UserTableData = (props) => {
    

    return (
        <>
            <tr>
                <td>{props.dt.login}</td>
                <td>{props.dt.url}</td>
                <td>{props.dt.type}</td>
                <td><img src={props.dt.avatar_url} alt="Avatar_Image"></img></td>
            </tr>
        </>
    )
}

export default UserTableData