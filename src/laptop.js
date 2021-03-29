import './App.css';
import Item from './item.js';
import dell from './img/laptop/dell.jpg';
import hp from './img/laptop/hp.jpg';
import lenovo from './img/laptop/lenovo.jpg';
import mac from './img/laptop/mac.jpg'; 


const Laptop=()=>{

	return(
		<div className="laptop">
						<div className='items'>
							<img src={dell} alt="laptop"/>
							<Item  name="dell vastro " desc="" price="43999"/>
							</div>
							<div className='items'>
							<img src={hp} alt="laptop"/>
							<Item  name="Hp" desc="" price="45999"/>
							</div>
							<div className='items'>
							<img src={lenovo} alt="laptop"/>
							<Item  name="mi" desc="" price="48999" />
							</div>
							<div className='items'>
							<img src={mac} alt="laptop"/>
							<Item  name="macbook" desc="" price="132999" />
							</div>

		</div>


		)
} 

export default Laptop;