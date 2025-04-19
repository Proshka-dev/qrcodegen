import { NavLink } from "react-router";

const Navigation = () => {

    return (
        <>
            <nav className='navigation__header'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/scan">Scan</NavLink>
                <NavLink to="/generate">Generate</NavLink>
            </nav>
        </>

    )
}

export default Navigation
