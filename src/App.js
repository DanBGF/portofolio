import './App.css';
import {Home} from './Pages';
import logo from './img/shared/logo.svg';
function App() {
  return (
 <div>
 <nav className='navbar  navbar-expand-sm mt-5'>
      <div className='container-fluid'>
        <img className='navbar-brand' alt='logo' src = {logo}/>

      </div>

      <div class="navbar-collapse" id="navbarNav">
        <hr/>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link active" aria-current="page"><span>01</span>Home</button>
          </li>
          <li class="nav-item">
            <button class="nav-link"><span>02</span>Destination</button>
          </li>
          <li class="nav-item">
            <button class="nav-link"><span>03</span>Crew</button>
          </li>
        </ul>
      </div>


    </nav>
    <Home/> 
 </div>
   
  );
}

export default App;
