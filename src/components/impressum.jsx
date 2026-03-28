import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <div className="page">        
        <h1>Impressum</h1>
        <br />
        <p>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).</p>
        <br/>
        <h2>Verantwortlich</h2>
        <p>Christian Marzian</p>
        <p>Brunnenstraße 29</p>
        <p>58332 Schwelm</p>
        <p>Deutschland</p>
        <br/>
        <h2>Kontakt</h2>
        <p>E-Mail: cmarzian91@gmail.com</p>
        <p>Telefon: +49 0157 34 31 65 72</p>
        <br/>
        <Link to="/">Back to Home</Link>
    </div>
  )
}