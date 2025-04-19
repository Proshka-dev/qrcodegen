import './layout.css';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = () => {

    return (
        <div>
            <Header />

            <div className='layout__main'>
                <Outlet />
            </div>

            <Footer />
        </div>

    )
}

export default Layout
