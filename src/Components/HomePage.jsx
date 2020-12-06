import React from 'react'
import './Style.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { UserHeader } from './userHeader';
import UserTableData from './userTable';


function Homepage(props) {
    debugger;
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    const history = useHistory();

    function onLogout(){
        history.push("/");
    }

    return (
        <div className="grid-container">
            <div>
            <button onClick={onLogout}>Logout</button>
            <h1>Welcome to Home Page </h1>
            </div>
            <table>
                <thead>
                    <UserHeader />
                </thead>
                <tbody>
                    {data && data.users && data.users.map(user => {
                        return <UserTableData dt={user} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Homepage;