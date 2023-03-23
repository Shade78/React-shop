import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  return (<div>
     {props.orders.map( (el) => (
      <Order key={el.id} item={el}/>
   ))} 
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
        <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = React.useState(false);

  return (
    <header>
        <div>
            <span className='logo'>Soda Shop</span>
            <ul className='nav'>
                <li>Obout us</li>
                <li>Contacts</li>
                <li>Account</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
