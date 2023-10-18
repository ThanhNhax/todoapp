import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserContext from './hooks/UserContext';
const HeaderComponent = React.lazy(() =>
  import('./components/header/HeaderComponent')
);
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem(process.env.REACT_APP_KEY_LOCAL);
    if (!user) {
      navigate('/auth');
    }
    setUser(user);
  }, []);
  return (
    <>
      <UserContext.Provider value={user}>
        <header className='bg-primary'>
          <HeaderComponent />
        </header>
        <main className='px-4'>
          <Outlet />
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
