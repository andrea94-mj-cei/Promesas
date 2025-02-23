import { NavLink } from "react-router";

const Header = () =>{
    return(
        <>
        <header className="Header">
        <div className="Header-div"> 
          <nav className="Header-nav">
            <ul className="Header-ul">
              <li className="Header-li"><NavLink to={"/"}>Inicio</NavLink></li>
              <li className="Header-li"><NavLink to={"pokeApi"}>PokeApi</NavLink></li>
              <li className="Header-li"><NavLink to={"dungeonsDragons"}>DungeonsDragons</NavLink></li>
           </ul>
          </nav>
        </div>
        </header>
        </>
    )
}

export default Header