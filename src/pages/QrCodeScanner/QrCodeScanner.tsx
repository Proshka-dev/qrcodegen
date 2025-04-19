import React, { useState } from 'react'
import s from './qrCodeScanner.module.css'
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState("Not Found");

    const onUpdateHandler = (err, result) => {
        if (result) {
            setScanned(result.text);
            console.log(result.text);
        } else {
            setScanned("Not Found");
            console.log('Not Found');
        }

    }

    return (
        <>
            <BarcodeScannerComponent
                width={400}
                height={400}
                onUpdate={onUpdateHandler}
            />
            <p>{scanned}</p>
        </>
    );
}

export default QrCodeScanner
