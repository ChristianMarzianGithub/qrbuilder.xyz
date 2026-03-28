import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <div className="page">        
        <h1>Datenschutzerklärung</h1>
        <br />
        <p>So gehen wir mit Daten auf qrbuilder.xyz um.</p>
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
        <h2>Verantwortliche Stelle</h2>
        <p>Christian Marzian</p>
        <p>Brunnenstraße 29</p>
        <p>58332 Schwelm</p>
        <p>Deutschland</p>

        <p>E-Mail: cmarzian91@gmail.com</p>
        <p>Telefon: +49 0157 34 31 65 72</p>
        <br/>
        <h2>Verarbeitung der eingegebenen Daten</h2>
        <p>Die auf dieser Website eingegebenen Namen werden ausschließlich lokal im Browser verarbeitet, um die Auswahl auf dem Wheel zu ermöglichen. Es erfolgt keine Übertragung dieser Daten an einen Server und keine dauerhafte Speicherung.</p>
        <br/>
        <h2>Server-Logfiles</h2>
        <p>Beim Besuch dieser Website werden automatisch Informationen durch den Server erfasst. Dies sind z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser sowie das Betriebssystem des Nutzers. Diese Daten sind technisch erforderlich, um die Website korrekt auszuliefern.</p>
        <br/>
        <h2>Cookies</h2>
        <p> Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die eine Analyse der Benutzung der Website ermöglichen.</p>
        <br/>
        <h2>Werbung (Google AdSense)</h2>
        <p> Diese Website verwendet Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>

        <p>Google AdSense verwendet Cookies und sogenannte Web Beacons. Dadurch kann Google Informationen über die Nutzung dieser Website auswerten. Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) können an Server von Google übertragen und dort gespeichert werden.</p>
        <br/>
        <h2>Rechtsgrundlage</h2>
        <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionierenden Website und der Finanzierung des Angebots durch Werbung).</p>
        <br/>
        <h2>Ihre Rechte</h2>
        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde.</p>

        <p>Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie mich bitte unter: cmarzian91@gmail.com</p>
        <br/>
        <Link to="/">Back to Home</Link>
    </div>
  )
}