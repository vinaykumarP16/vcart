import './App.css';

const Item=({name,description,price})=>{



	return(

		<div className="item">
		<h3>{name}</h3>	
		{/*<h4>description</h4>*/}
		<h1>rs. {price}/-</h1>	
		<button>Buy</button>
		</div>

		)
}

export default Item;