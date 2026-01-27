import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user={_id:"fdsf",role:"admin"}

const Header = () => {

const [isopen,setIsopen]=useState<boolean>(false)
  return <nav>

    <Link to={"/"}>Home</Link>
    <Link to={"/search"}>
    <FaSearch/>
    </Link>
    <Link to={"/cart"}>
    <FaShoppingBag/>
    </Link>

    {
        user?._id?(
            <>
            <button onClick={()=>setIsopen((prev)=>!prev)}>
                <FaUser/>
            </button>
            <dialog open={isopen}>
                <div>
                    {user.role==="admin" &&(<Link to={"/admin/dashboard"}>Admin</Link>)}
                    <Link to={"/orders"}>Orders</Link>
                    <button><FaSignOutAlt/></button>
                </div>
            </dialog>
            </>
        ): (
    <Link to={"/cart"}>
    <FaSignInAlt/>
    </Link>)
    }
  </nav>
}

export default Header
