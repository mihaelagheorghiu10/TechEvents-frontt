import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage'
import EventList from './pages/EventList/EventList';
import EventDetail from './pages/EventDetail/EventDetail';
import EventForm from './pages/EventForm/EventForm'



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventForm" element={<EventForm/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
