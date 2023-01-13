import './App.css';
import LoginPage from './components/Pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
import Error from './components/Pages/Error/Error'
import OrderPage from './components/Pages/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order/:username' element={<OrderPage />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
