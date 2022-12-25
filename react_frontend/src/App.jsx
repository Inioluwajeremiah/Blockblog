import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';


export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/authenticate' element={<Login/>} />
      <Route path='/resetpassword' element={<ResetPassword/>} />
      <Route path='/changepassword' element={<ChangePassword/>} />
    </Routes>
  </BrowserRouter>

  )
}