import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
