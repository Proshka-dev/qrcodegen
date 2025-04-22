import { useEffect, useState } from 'react'
import s from './effectTest.module.scss'



const EffectTest = () => {
    // ***** Переменные *****
    //Хук для переменной, хранящей значение в поле ввода
    const [showChildren, setShowChildren] = useState(true);
    const [timerNumber, setTimerNumber] = useState(0);

    // ***** Функции *****
    function onClickHandler() {
        countDown();
    }

    //useEffect срабатывает при изменении timerNumber
    useEffect(() => {
        console.log('Таймер изменился и равен ', timerNumber);
    }, [timerNumber]);

    async function countDown() {
        // изменение значения с задержкой
        const timeout = 2000;
        const step = 200;
        const numberOfSteps = Math.round(timeout / step);

        for (let index = numberOfSteps; index >= 0; index--) {
            console.log('index * step', index * step);
            await new Promise((resolve) => {
                setTimeout(() => {
                    setTimerNumber(index * step);
                    resolve(true);
                }, step);
            });
        }
        setShowChildren((value) => (!value));
    }



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
                        {showChildren ? 'Скрыть ребенка' : 'Показать ребенка'}

                    </button>

                    {(timerNumber > 0) && (
                        <div>{timerNumber}</div>
                    )}
                </div>



                {showChildren && (
                    <div>Дочерний компонент</div>
                )}
            </div>
        </div>
    )
}

export default EffectTest
