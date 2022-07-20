import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from './Navigation';

function AppRouter({isLoggedIn, userObj, refreshUser}) {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      {isLoggedIn && <Navigation userObj={userObj}/>}
      <div
        style={{
          maxWidth: 890,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={userObj} />}></Route>
              <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />}></Route>
            </>
          ) : (
            <Route path="/" element={<Auth />}></Route>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;