import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import { MainPage } from './pages/main';
import { ExplorePage } from './pages/explore';
import { BeeLiftPage } from './pages/beeLift';
import { LofiHop } from './pages/lofihop';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/beeLift" element={<BeeLiftPage/>}/>
        <Route path="/lofiHop" element={<LofiHop/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
