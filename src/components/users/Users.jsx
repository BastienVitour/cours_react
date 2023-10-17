import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import './users.scss'
import * as Icon from 'react-bootstrap-icons';
import userList from './users.json';

export default function Users() {

    const [users, setUsers] = useState(userList)

    return (

        <div className="main-user-list">
            <div className="center">
                {
                    users.map((user) => {
                        return (
                            <Link to={`/users/${user.id}`} className="user-link">{user.name}</Link>
                        )
                    })
                }
            </div>
        </div>
       
    )

}