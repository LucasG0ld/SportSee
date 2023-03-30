import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from './pages/profile';
import Login from './pages/login';
import NotFound from './pages/not-found';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/user/:id" element={<Profile />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/404" element={<NotFound />}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;