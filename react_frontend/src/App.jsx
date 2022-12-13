import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';


export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>

  )
}