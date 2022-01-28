import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import BlogDetail from './Components/Home/Blogs/BlogDetail';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Dashboard from './Components/Dashboard/dashboard';

function App() {
  // travel1: https://i.ibb.co/xXgrK3N/travel1.jpg
  // travel2: https://i.ibb.co/Z86qRN3/travel2.jpg
  // travel3: https://i.ibb.co/NxJXjr5/travel3.jpg
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/blog-detail/:id" element={<BlogDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
