import { NavLink, useRouteError } from "react-router"
import './errorPage.css'

const ErrorPage = () => {

    // хук ошибки
    const error = useRouteError();
    console.error(error);

    return (
        <div className="errorpage">
            <div className="container">
                <div className="errorpage__body">
                    <div className="errorpage__title">
                        Такой страницы не существует
                    </div>
                    <div className="errorpage__link">
                        <NavLink to="/scan">
                            <button>Перейти на главную</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ErrorPage
