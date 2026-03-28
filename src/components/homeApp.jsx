import { Route } from 'react-router-dom';
import QRComponent from './qrComponent.jsx'
export default function HomeApp() {
  return (
        <div className='main'>
            <h1>Welcome to qrbuilder.xyz</h1>
            <QRComponent />
            <div className='footer'>
            <ul>
                <li> &copy; {new Date().getFullYear()} qrbuilder.xyz. All rights reserved.</li>
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
            </div>
        </div>
);
}