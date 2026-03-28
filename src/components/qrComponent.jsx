import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRComponent() {
    const [url, setUrl] = useState('');
    const canvasRef = useRef(null);

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handleDownload = () => {
        if (!canvasRef.current) return;

        const qrCodeElement = canvasRef.current.querySelector('canvas');
        if (!qrCodeElement) return;

        const link = document.createElement('a');
        link.href = qrCodeElement.toDataURL('image/png');
        link.download = 'qrcode.png';
        link.click();
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1>Build your QR-Code</h1>
            
            <input
                type="text"
                placeholder="Enter a web link"
                value={url}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    marginBottom: '20px',
                    boxSizing: 'border-box'
                }}
            />

            {url && (
                <div style={{ textAlign: 'center' }} ref={canvasRef}>
                    <QRCodeCanvas value={url} size={256} level="H" includeMargin />
                    <button
                        onClick={handleDownload}
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                    >
                        Download QR Code
                    </button>
                </div>
            )}
        </div>
    );
}
