import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />}></Route>
          </>
        ) : (
          <Route path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;