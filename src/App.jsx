import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to={"/"}> KOTI </Link>
        <Link to={"/meista"}> MEISTÄ </Link>
        <Link to={"/tuotteet"}> TUOTTEET </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
