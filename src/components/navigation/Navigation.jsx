import { useEffect } from 'react'
import './navigation.scss'
import { useLocation, Link } from 'react-router-dom'

export default function Navigation() {

    let location = useLocation()

    let currentPageStyle = {"color": "white", "backgroundColor": "rgb(48, 89, 82)"}

    useEffect(() => {
        console.log(location)
    }, [location])

    return (

        <div className="main-navigation">
            <Link to={{pathname: '/todo'}} className='nav-link' style={location.pathname.includes('todo') ? currentPageStyle : {}}>Todo List</Link>
            <Link to={{pathname: '/counter'}} className='nav-link' style={location.pathname.includes('counter') ? currentPageStyle : {}}>Counter</Link>
            <Link to={{pathname: '/users'}} className='nav-link' style={location.pathname.includes('users') ? currentPageStyle : {}}>Users</Link>
            <Link to={{pathname: '/products'}} className='nav-link' style={location.pathname.includes('products') ? currentPageStyle : {}}>Products</Link>
            <Link to={{pathname: '/movies', search: '?page=1'}} className='nav-link' style={location.pathname.includes('movies') ? currentPageStyle : {}}>Movies</Link>
        </div>

    )

}