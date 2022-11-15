import Meta from '../photos/metabnb.svg';
import React, { useContext, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from '../App';
import './Home.css';
// import Connect from './Connect';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
// import {GrClose} from 'react-icons/gr';

const Header = () =>{
    
    const {connectwallet, setconnectwallet} = useContext(AppContext);
    const navRef = useRef();
    const btnref = useRef();
    const connectRef = useRef();

    useEffect(()=>{
        console.log(navRef.current.className);
    }, [])


    const toggleNavbar = () => {
        if (navRef && btnref && navRef.current.className === 'links') {
            navRef.current.className = 'links active';
            btnref.current.className = 'nav-toggle active';
            connectRef.current.className = 'btn-3';
        } else if (navRef.current.className !== 'links') {
            
            console.log(navRef.current.className);
            navRef.current.className = 'links';
            btnref.current.className = 'nav-toggle';
            connectRef.current.className = 'btn-1';

        }
    }

    // const[isOpen, setisOpen] = useState(false);
    return(       
        <nav>
            <div className='nav-bar'>
                {""}
                <div className='logo'>
                    <img src= { Meta } alt="company logo"/>
                </div>
             
                    <div className='nav-links'>
                        <div className={`links`}  ref={navRef}>
                            <ul>
                                <li><Link to ='/'>Home</Link></li>
                                <li><Link to='/place'>Place to stay</Link></li>
                                <li>NFTs</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='btn-1' ref={connectRef}
                        onClick={() => {
                            setconnectwallet(true);
                            // console.log('bishop is a good boy')
                            console.log(connectwallet);
                        }}
                        >Connect Wallet</button>
                    </div>
               
            </div>
            <div className={`nav-toggle`} ref={btnref} onClick={toggleNavbar}
                // onClick={() => { setisOpen(!isOpen)}}
                // onClick={document.getElementsByClassName('links').style.transform = 'translateX(-100%)'}
                >
                {/* <button className='nav-btn'>
                    <GrClose/>
                </button> */}
                <button className='nav-btn'>
                    <GiHamburgerMenu/>
                </button>
             </div>

             {/* ${isOpen && "open"} */}
        </nav>
    );
};
export default Header;