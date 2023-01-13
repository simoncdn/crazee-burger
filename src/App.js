import './App.css';
import LoginPage from './components/Pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
import ErrorPage from './components/Pages/error/ErrorPage'
import OrderPage from './components/Pages/order/OrderPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order/:username' element={<OrderPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
