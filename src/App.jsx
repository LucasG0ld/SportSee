import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from './pages/profile';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/user/:id" element={<Profile />} />
            <Route exact path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;