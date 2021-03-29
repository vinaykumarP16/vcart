import './App.css';
import Item from './item.js';
import blu from './img/asses/wireless.png';
import char from './img/asses/chare.jpg';
import tl from './img/asses/trueless.jpg';
import power from './img/asses/power.jpg';

const Ass=()=>{


	return(

		<div className="asses">
		<div className='items'>
				<img src={blu} alt="asses"/>
				<Item  name="bluetooth earphones" desc="" price="999"/>
				</div>
				<div className='items'>
				<img src={char} alt="asses"/>
				<Item  name="charger" desc="" price="459"/>
				</div>
				<div className='items'>
				<img src={tl} alt="asses"/>
				<Item  name="true-wireless" desc="" price="1899" />
				</div>
				<div className='items'>
				<img src={power} alt="asses"/>
				<Item  name="power bank" desc="" price="799" />
		</div>
		</div>
		)
}

export default Ass;