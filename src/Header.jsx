import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
const style = {
    height:"60px"
}

const Header = () => {
    useEffect(() => {
        document.title = "restaurant";
    })
    return (
        <>
            <div className="container-fluid bg-primary" style={style}>
                <div className="icon">
                    <img src="../assets/icon.svg" alt="random images" />
                    <span className="restaurant">Food's Restaurant</span>
                </div>
                <div className="content">
                        <p className="text">Welcome To Food's Kitchen</p>
                        <NavLink to="/menu" className="btn btn-outline-success btn">Go To Menu</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header;
