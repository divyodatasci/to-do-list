import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' flex  align-middle'>
        <Link to= '/' className=' mx-4 text-center'>Using Prop Drilling</Link>
        <Link to= '/taskAdderRedux' className=' mx-4 text-center'>Using Redux</Link>
        

    </div>
  )
}

export default Header