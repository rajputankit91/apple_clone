import './header.css'
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const HeaderFile = () => {
    const headerStyleIcon = {fontSize: '18px' , color:'#333336'}

    return (
        <>
            <header className='Mainheader'>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}><a href="#"><FaApple style={headerStyleIcon}/></a></Link>
                        </li>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li>
                            <Link to={"/Iphone"}><a href="#">iPhone</a></Link>
                        </li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Vision</a></li>
                        <li><a href="#">AirPods</a></li>
                        <li><a href="#">TV & Home</a></li>
                        <li>
                            <Link to={"/Support"}><a href="#">Support</a></Link>
                        </li>
                        <li><a href="#"><IoSearchOutline style={headerStyleIcon}/></a></li>
                        <li><a href="#"><IoBagOutline style={headerStyleIcon}/></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderFile;