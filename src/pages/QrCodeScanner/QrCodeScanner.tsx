import React, { useState } from 'react'
import s from './qrCodeScanner.module.css'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Result } from "@zxing/library";

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState("штрихкод не найден");

    const onUpdateHandler = (err: unknown, result: Result | undefined) => {
        if (result) {
            setScanned(result.getText());
            console.log(result.getText());
        } else {
            setScanned("штрихкод не найден");
            console.log('штрихкод не найден');
        }

    }

    return (
        <div className={s.qrcodescanner}>
            <div className="container">
                <div className={s.qrcodescanner__title}>
                    Сканирование штрих-кода
                </div>
                <div className={s.qrcodescanner__scanwindow} >
                    <BarcodeScannerComponent
                        width={300}
                        onUpdate={onUpdateHandler}
                    />
                </div>
                <div>
                    <span>Результат сканирования: </span>
                    {scanned}
                </div>
            </div>
        </div>
    );
}

export default QrCodeScanner
