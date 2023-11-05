import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/meista"}>meista</Link>
        <Link to={"/tuotteet"}>tuotteet</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
