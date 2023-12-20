import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {  Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route path="/:gameType-kamas" element={<PaymentForm />} />
        {/* ... other routes ... */}}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
