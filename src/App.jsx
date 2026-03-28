import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Impressum from './components/impressum.jsx'
import Datenschutz from './components/datenschutz.jsx'
import HomeApp from './components/homeApp.jsx'

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={<HomeApp />
}
      />

      {/* Impressum page */}
      <Route path="/impressum" element={<Impressum />}/>
      {/* Datenschutz page */}
      <Route path="/datenschutz" element={<Datenschutz />}/>
    </Routes>
  );
}
export default App