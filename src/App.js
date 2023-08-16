import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Calculator from './routes/calculator';
import Quote from './routes/quote';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
