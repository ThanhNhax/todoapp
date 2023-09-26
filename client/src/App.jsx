import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
