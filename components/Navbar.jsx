import React from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"

import { Cart } from "./"
import { useStateContext } from "../context/StateContext"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link className="px-2 py-1 rounded-md font-bold bg-red-600 text-white hover:scale-110 transition-transform" href="/">
          Szone
        </Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
