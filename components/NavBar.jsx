import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
const NavBar = () => {
  const {showCart, setShowCart, totalQuantites} = useStateContext()
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ShoppersInitiative</Link>
      </p>

      <button type="button" className="cart-icon" onClick={()=> setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantites}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default NavBar