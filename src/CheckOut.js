import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckOut.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function CheckOut() {
  const [{basket}]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img 
      className="checkout__ad"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
      alt=""/>
      {
        basket?.length === 0 ? (
          <div>
            <h2>Your shopping is empty</h2>
            <p>You have no basket in your item.To buy one or more item "Add to basket" next to the item.</p>
          </div>  
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {
              basket?.map((item)=>(
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>
        )}
    </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal/>
        </div>
      )}
    </div>
  )
}

export default CheckOut
