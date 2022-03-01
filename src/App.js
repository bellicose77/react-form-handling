import logo from './logo.svg';
import './App.css';
import FormHandle from './components/FormHandle/FormHandle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowData from './components/ShowData/ShowData';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
      <Routes>
        <Route path="home" element={<FormHandle/>}/>
        <Route path="/anotherpage" element={<ShowData/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
