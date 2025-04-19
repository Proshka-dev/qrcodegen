import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCodeGenerator.module.css'

const QrCodeGenerator = () => {
    // ***** Переменные *****
    //Хук для переменной, хранящей значение в поле ввода
    const [value, setValue] = useState('');

    const [result, setResult] = useState('');


    // ***** Функции *****
    //Функция onClickHandler
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('onClickHandler() вызвана');
        setResult(value);
        setValue('');
    }

    //Функция onChangeHandler
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('onChangeHandler() вызвана');
        // Изменение переменной, хранящей значение в поле ввода
        setValue(event.target.value);
        setResult('');
    }


    return (
        <div className={s.qrcodegenerator}>
            <div className="container">
                <div className={s.qrcodegenerator__title}>
                    Генерирование QR кода
                </div>
                <div className={s.qrcodegenerator__body}>
                    <input
                        className={s.qrcodegenerator__input}
                        onChange={onChangeHandler}
                        type="text"
                        value={value}
                        placeholder='Введите текст'
                    />

                    <button
                        className={s.qrcodegenerator__button}
                        onClick={onClickHandler}
                        type='button'
                    >
                        Сгенерировать QR
                    </button>
                </div>

                {result !== '' && (
                    <QRCodeSVG
                        className={s.qrcodegenerator__code}
                        value={result} />
                )}
            </div>
        </div>
    )
}

export default QrCodeGenerator
