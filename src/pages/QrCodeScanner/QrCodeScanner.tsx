import React, { useState } from 'react'
import s from './qrCodeScanner.module.css'
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState("штрихкод не найден");

    const onUpdateHandler = (err, result) => {
        if (result) {
            setScanned(result.text);
            console.log(result.text);
        } else {
            setScanned("штрихкод не найден");
            console.log('штрихкод не найден');
        }

    }

    return (
        <div className={s.qrcodescanner}>
            <div className="container">
                <div className={s.qrcodescanner__title}>QrCodeScanner component</div>
                <BarcodeScannerComponent
                    width={400}
                    height={400}
                    onUpdate={onUpdateHandler}
                />
                <div>
                    <span>Результат сканирования: </span>
                    {scanned}
                </div>
            </div>
        </div>
    );
}

export default QrCodeScanner
