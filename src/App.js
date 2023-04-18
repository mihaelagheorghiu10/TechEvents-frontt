import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register'
// import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
