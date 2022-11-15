import React from 'react';
import housefooter from '../photos/house-footer.svg';
import facebook from '../photos/facebook.svg';
import instagram from '../photos/instagram.svg';
import twitter from '../photos/twitter.svg';
// import Star from '../photos/Star.png';
import './Home.css';

const Footer = () => {
    return(
        <footer>
                <div className='main-footer'>
                    <div className='container'>
                        <div className='house'>
                            <div className='house1'>
                                <img  src={ housefooter } alt="metabnb logo"/>
                            </div>
                        <div className='house2'>
                                <img  src={ facebook } alt="metabnb facebook"/>
                                <img  src={ instagram } alt="metabnb instagram"/>
                                <img  src={ twitter } alt="metabnb twitter"/>
                        </div>
                            <p>&copy; 2022 Metabnb</p>
                        </div>
                        <div className='community'>
                            
                            <ul>
                                <p>Community</p>
                                <li>NFT</li>
                                <li>Tokens</li>
                                <li>Landlords</li>
                                <li>Discord</li>
                            </ul>
                        </div>
                        <div className='places'>
                            
                            <ul>
                                <p>Places</p>
                                <li>Castle</li>
                                <li>Farms</li>
                                <li>Beach</li>
                                <li>Learn more</li>
                            </ul>
                        </div>
                        <div className='about'>
                            
                            <ul>
                                <p>About us</p>
                                <li>Road map</li>
                                <li>Creators</li>
                                <li>Career</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    );
}
export default Footer;