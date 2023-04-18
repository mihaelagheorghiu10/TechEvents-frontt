import './App.css'
import Navbar from './components/Navbar/Navbar'
// import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </Router>
  )
}

export default App
