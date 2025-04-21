import { NavLink } from "react-router";
import './navigation.css'

const Navigation = () => {

    return (
        <>
            <nav className='navigation'>
                <NavLink className='navigation__link' to="/scan">Сканирование штрихкода</NavLink>
                <NavLink className='navigation__link' to="/generate">Генерирование QR кода</NavLink>
                <NavLink className='navigation__link' to="/posts">Сообщения</NavLink>
                <NavLink className='navigation__link' to="/addpost">Новое Сообщение</NavLink>
                <NavLink className='navigation__link' to="/history">История</NavLink>
            </nav>
        </>

    )
}

export default Navigation
