import './App.css';
import Phones from './phones';
import Laptop from './laptop.js';
import Ass from './assesories.js';



function App() {



  return (
    <div className="App">
       <h1 className="logo" >V-cart</h1>

          <h2>Most popular phones</h2>        
          <Phones/>
          <h2>Recently relased laptops</h2>        
          <Laptop/>
          <h2>Must needed assesories</h2>        
          <Ass/>
          
    </div>
  );
}

export default App;
