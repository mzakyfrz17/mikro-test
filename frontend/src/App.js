import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import DetailPage from './pages/detail';
import Lapak from './pages/Lapak';
import Popup from './components/Popup';
import DaftarForm from './components/Daftar-form';
import AddProduct from './components/AddLapak';
import DashboardAdmin from './components/DashboarAdmin';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail' element={<DetailPage/>}/>
          <Route path='/lapak' element={<Lapak/>}/>
          <Route path='/Popup' element={<Popup/>}/>
          <Route path='/daftar-form' element={<DaftarForm/>}/>
          <Route path='/form' element={<AddProduct/>}/>
          <Route path='/admin' element={<DashboardAdmin/>}/>
          
        </Routes>
      </Router>
    );
  }

export default App;
