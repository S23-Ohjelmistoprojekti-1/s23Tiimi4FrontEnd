import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1 align="center">Welcome to React Router</h1>
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
