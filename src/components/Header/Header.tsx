import './header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {

    return (
        <div className='header'>
            <div className='container'>
                {/* <div className='header__title'>Header title</div> */}
                <Navigation />
            </div>
        </div>
    )
}

export default Header
