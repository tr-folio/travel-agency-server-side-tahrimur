import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  // travel1: https://i.ibb.co/xXgrK3N/travel1.jpg
  // travel2: https://i.ibb.co/Z86qRN3/travel2.jpg
  // travel3: https://i.ibb.co/NxJXjr5/travel3.jpg
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
