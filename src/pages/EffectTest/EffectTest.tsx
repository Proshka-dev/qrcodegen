import { useState } from 'react'
import s from './effectTest.module.scss'

//функции
function onClickHandler() {

}


const EffectTest = () => {
    // ***** Переменные *****
    //Хук для переменной, хранящей значение в поле ввода
    const [showChildren, setValue] = useState('true');




    return (
        <div className={s.effecttest}>
            <div className="container">
                <div className={s.effecttest__title}>
                    Генерирование QR кода
                </div>
                <div className={s.effecttest__body}>
                    <button
                        className={s.effecttest__button}
                        onClick={onClickHandler}
                        type='button'
                    >
                        Показать/скрыть ребенка
                    </button>
                </div>

                {showChildren !== '' && (
                    <div>Дочерний компонент</div>
                )}
            </div>
        </div>
    )
}

export default EffectTest
