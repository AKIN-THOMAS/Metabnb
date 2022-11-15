import React from 'react';
// import Meta from '../photos/metabnb.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './place.css';
import locimg from '../photos/location.png';
// import { Link } from 'react-router-dom';
import placeimg1 from '../photos/placeimg1.svg';
import placeimg2 from '../photos/placeimg2.svg';
import placeimg3 from '../photos/placeimg3.svg';
import placeimg4 from '../photos/placeimg4.svg';
import placeimg5 from '../photos/placeimg5.svg';
import placeimg6 from '../photos/placeimg6.svg';
import placeimg7 from '../photos/placeimg7.svg';
import placeimg8 from '../photos/placeimg8.svg';
import placeimg9 from '../photos/placeimg9.svg';
import placeimg10 from '../photos/placeimg10.svg';
import placeimg11 from '../photos/placeimg11.svg';
import placeimg12 from '../photos/placeimg12.svg';
import placeimg13 from '../photos/placeimg13.svg';
import placeimg14 from '../photos/placeimg14.svg';
import placeimg15 from '../photos/placeimg15.svg';
import placeimg16 from '../photos/placeimg16.svg';
// import facebook from '../photos/facebook.svg';
// import instagram from '../photos/instagram.svg';
// import twitter from '../photos/twitter.svg';
// import housefooter from '../photos/house-footer.svg';
import Star from '../photos/Star.png';
import Header from './Header';
import Footer from './Footer';
const Place = () => {
    return(
        <div className='body'>
            <Header />
            {/* Nav end*/}

            <section>
                <div className='place_to_stay'>
                    <div className='place'>
                        <ul>
                            <li>Resturant</li>
                            <li>Cottage</li>
                            <li>Castle</li>
                            <li>fantast city</li>
                            <li>beach</li>
                            <li>Carbins</li>
                            <li>Off-grid</li>
                            <li>Farm</li>
                            <p className='loc'>Location <img src={locimg}alt=""/></p>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='inspiration-part'>
                        <div className='grid-inspiration'>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg1 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star } alt=""/> <img  src={ Star } alt=""/> <img  src={ Star } alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg2 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg3 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg4 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg5 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg6 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg7 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star } alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg8 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg9 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg10 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg11 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg12 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg13 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg14 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg15 }alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <img  className='box-img' src={ placeimg16 } alt=""/>
                                <div className='word'>
                                    <div className='word1'>
                                            <p>Desert king</p>
                                            <p>2345km away</p>
                                            <div className='star'>
                                                <img  src={ Star } alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/> <img  src={ Star }alt=""/>
                                            </div>
                                    </div>
                                    <div className='word2'>
                                        <p className='bold'>1MBT per night</p>
                                        <p>availble for 2weeks stay</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default Place;