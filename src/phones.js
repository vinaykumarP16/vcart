import Item from './item.js';
import './App.css';
import iphone from './img/phone/ipnone.jpg';
import mi from './img/phone/mi.jpg';
import one from './img/phone/one.jpg';
import sam from './img/phone/sam.png';
/*import sam2 from './img/phone/sam2.jpg';*/



const Phones=()=>{
	return(
		<div className="phone">
		
			<div className='items'>
							<img src={sam} alt="phone"/>
							<Item  name="samsung f62 " desc="" price="22999"/>
							</div>
							<div className='items'>
							<img src={iphone} alt="phone"/>
							<Item  name="iphone" desc="" price="45999"/>
							</div>
							<div className='items'>
							<img src={mi} alt="phone"/>
							<Item  name="mi" desc="" price="29999" />
							</div>
							<div className='items'>
							<img src={one} alt="phone"/>
							<Item  name="onePlus" desc="" price="32999" />
							</div>
{/*							<div className='items'>
							<img src={sam2}/>
							<Item  name="samsung s10plus" desc="" price="25999" />
					</div>*/}
		</div>
		)
} 

export default Phones;