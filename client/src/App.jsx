import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <div className='app'>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
