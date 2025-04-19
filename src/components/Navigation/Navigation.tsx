import { NavLink } from "react-router";
import './navigation.css'

const Navigation = () => {

    return (
        <>
            <nav className='navigation'>
                <NavLink to="/scan">Scan</NavLink>
                <NavLink to="/generate">Generate</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </>

    )
}

export default Navigation
