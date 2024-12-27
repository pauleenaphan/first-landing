import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import { MainPage } from './pages/main';
import { ExplorePage } from './pages/explore';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
