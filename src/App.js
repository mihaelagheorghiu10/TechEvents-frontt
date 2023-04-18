import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register'


function App() {
  return (
    //com
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
