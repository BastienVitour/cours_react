import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import './users.scss'
import * as Icon from 'react-bootstrap-icons';
import userList from './users.json';

export default function User() {

    const { id } = useParams()



    let userExists = false

    const [user, setUser] = useState({})

    useEffect(() => {
        let userById = userList.find((u) => u.id == id)
        if(userById != null) {
            setUser(userById)
            userExists = true
        }
    }, [id])

    return (

        <div className="main-user-card">
        {
            (user.id != undefined)  
            ?
            <div className="center">
            <div className="user-card">
                <img src={'https://randomuser.me/api/portraits/men/'+Math.floor(Math.random() * 100)+'.jpg'} className="user-image"/><br/>
                <span className="user-name">{user.name}</span><br/>
                <span className="user-job">{user.metier}</span>
                <div className="user-tags">
                    {user.tags.map((tag) => {
                        return (
                            <div className="user-tag" key={tag}>
                                <Icon.Tag />
                                {tag}
                            </div>
                        )
                    })}
                </div>
                <p className="user-resume">{user.resume}</p>
                <div className="user-complementary">
                    <div>{user.relations}<br/>relations</div>
                    <div>{user.publications}<br/>publications</div>
                </div>
            </div>
            </div>
            :
            <div>
                <p>Utilisateur non trouvé</p>
            </div>
    
        }
        </div>
       
    )

}