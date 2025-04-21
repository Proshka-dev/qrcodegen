import React, { useState } from 'react'
import s from './qrCodeScanner.module.css'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Result } from "@zxing/library";

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState("");
    const [isScanActivated, setIsScanActivated] = useState(false);

    const onUpdateHandler = (err: unknown, result: Result | undefined) => {
        console.error(err);
        if (result) {
            setScanned(result.getText());
            setIsScanActivated(false);
            // сохранаяем результат в локальное хранилище
            const scanDataInStorage = JSON.parse(localStorage.getItem('scan_data') || '[]');
            scanDataInStorage.push(scanned);
            localStorage.setItem('scan_data', JSON.stringify(scanDataInStorage));

        } else {
            setScanned("штрихкод не найден");
        }

    }

    const onClickScanHandler = (event: React.MouseEvent) => {
        setIsScanActivated(true);
        console.log(event);
        //event.target.disabled = is;
    }

    const onClickStopHandler = () => {
        setIsScanActivated(false);
    }


    return (
        <div className={s.qrcodescanner}>
            <div className="container">
                <div className={s.qrcodescanner__title}>
                    Сканирование штрих-кода
                </div>
                <div className={s.qrcodescanner__scanwindow} >
                    {isScanActivated && //если isScanActivated активировать компонент для сканирования
                        <BarcodeScannerComponent
                            width={300}
                            onUpdate={onUpdateHandler}
                        />
                    }

                </div>
                <div>
                    {(scanned !== '') &&
                        <div>
                            <span>Результат сканирования: </span>
                            {scanned}
                        </div>
                    }
                </div>
                <div>
                    <button className={s.qrcodescanner__button} onClick={onClickScanHandler} disabled={isScanActivated}>
                        Сканировать
                    </button>
                    <button className={s.qrcodescanner__button} onClick={onClickStopHandler} disabled={!isScanActivated}>
                        Остановить сканирование
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QrCodeScanner
