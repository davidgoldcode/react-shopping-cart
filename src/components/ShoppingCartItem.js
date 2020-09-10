import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {

	const { removeItem } = useContext(CartContext);

	return (
		<form action=""><div className="shopping-cart_item">
		<img src={props.image} alt={`${props.title} book`} />
		
		
		<div>
		<h1>{props.title}</h1>
		<p>$ {props.price}</p>
		<button onClick={removeItem} value={props}>Remove from cart</button>
		</div>
		</div></form>
	);
};

export default Item;
