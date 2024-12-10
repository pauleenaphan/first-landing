import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import { MainPage } from './pages/mainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
