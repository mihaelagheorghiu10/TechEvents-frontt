import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import EventList from './pages/EventList/EventList';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/events" element = {<EventList/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
