import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const HeaderComponent = React.lazy(() =>
  import('./components/header/HeaderComponent')
);
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_KEY_LOCAL)) {
      navigate('/auth');
    }
  }, []);
  return (
    <>
      <header className='bg-primary'>
        <HeaderComponent />
      </header>
      <main className='px-4'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
