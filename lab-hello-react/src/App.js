import icon1 from '../src/images/icon1.png';
import icon2 from '../src/images/icon2.png';
import icon3 from '../src/images/icon3.png';
import icon4 from '../src/images/icon4.png';
import ironhack from '../src/images/ironhack-logo-xs.png';
import menu from '../src/images/menu-top-xs.png';
import background from '../src/images/background.png';


// src/App.js
import './App.css';

function App() {



  return (
    <div className="App">
    <div className='container'>
    
    <nav className='menu-icons'>
    <img src={ironhack} className="Ironhack"/>
    <img src={menu} className="menu" />

      </nav>
    
     <div className='Main-text'> 
     <h1>Say hello to <br></br> ReactJS</h1>
     <h3>You will learn to use <br></br> the most popular frontend library,<br></br>and become a super Ninja developer.</h3>
     </div>
     <button className='button'><strong>Awesome!</strong></button>
     </div>

     <div className='App-icons'>
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
      </div>
     
    
      
    </div>
  );
}

const Icon1 = () => {
  return(
    <div>
  <img src={icon1} className="Icon1" />
  <h2>Declarative</h2>
  <p>React makes it <br></br> painless to create <br></br> interactive UI'src</p>
  </div>
  )
}
const Icon2 = () => {
  return(
    <div>
    <img src={icon2} className="Icon2" />
  <h2>Components</h2>
  <p>Build encapsulated <br></br> components that <br></br> manage their state.</p>
  </div>
  )
}
const Icon3 = () => {
  return(
    <div>
  <img src={icon3} className="Icon3" />
  <h2>Single-Way</h2>
  <p>A set of immutable<br></br> values are passed to <br></br>the component's.</p>
  </div>
  )
}
const Icon4 = () => {
  return(
    <div>
   <img src={icon4} className="Icon4"/>
  <h2>JSX</h2>
  <p>Statically-typed<br></br>designed to run on <br></br>modern browsers.</p>
  </div>
  )
}

export default App;
