import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <>
      <header className='bg-primary'>
        <HeaderComponent />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
