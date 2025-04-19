import { NavLink } from "react-router";
import './navigation.css'

const Navigation = () => {

    return (
        <>
            <nav className='navigation'>
                <NavLink to="/scan">Сканирование штрихкода</NavLink>
                <NavLink to="/generate">Генерирование QR кода</NavLink>
                <NavLink to="/posts">Сообщения</NavLink>
                <NavLink to="/addpost">Новое Сообщение</NavLink>
            </nav>
        </>

    )
}

export default Navigation
