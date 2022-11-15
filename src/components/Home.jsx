import React,{useContext} from 'react';
// import Meta from '../photos/metabnb.svg';
import img1 from '../photos/image1.svg';
import img2 from '../photos/image2.svg';
import img3 from '../photos/image3.svg';
import img4 from '../photos/image4.svg';
import mbtoken from '../photos/mbtoken.svg';
import metamask1 from '../photos/metamask1.svg';
import opensea from '../photos/opensea.svg';
import inspiration1 from '../photos/inspiration1.svg';
import inspiration2 from '../photos/inspiration2.svg';
import inspiration3 from '../photos/inspiration3.svg';
import inspiration4 from '../photos/inspiration4.svg';
import inspiration5 from '../photos/inspiration5.svg';
import inspiration6 from '../photos/inspiration6.svg';
import inspiration7 from '../photos/inspiration7.svg';
import inspiration8 from '../photos/inspiration8.svg';
import footerimg from '../photos/footer-image.webp'
// import housefooter from '../photos/house-footer.svg';
// import facebook from '../photos/facebook.svg';
// import instagram from '../photos/instagram.svg';
// import twitter from '../photos/twitter.svg';
import Star from '../photos/Star.png';
import './Home.css';
// import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import Connect from './Connect';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    const {connectwallet} = useContext(AppContext);
    // useEffect(()=> {
    //     console.log(connectwallet);
    // }, [])
    return(
        <div className="body"> 

            {/* navbar */}
            {""}
            {connectwallet ? <Connect /> : null}
            <Header />
            <section>
                <div className='main'>
                    <div className='main-1'>
                        <div className='rent'>
                            <p>Rent a <span className='w5'>Place</span> from <span className='w5'>Home</span> in a <span className='w5'>Metaverse</span></p>
                        </div>
                        <div className='provision'>
                            <p>we provide you access to luxury and affordable houses  in the metaverse, get a chance to turn your  imaginations to reality at your comfort zone</p>
                        </div>
                        <div className='search-1'>
                            <input placeholder='Search for location' /><button className='btn-2'>Search</button>
                        </div>
                    </div>
                    <div className='main-2'>
                        <img  className='img1' src={ img1 } alt = "img1"/>
                        <img  className='img2' src={ img2 } alt = "img2"/>
                        <img  className='img3' src={ img3 } alt = "img3"/>
                        <img  className='img4' src={ img4 } alt = "img4"/>
                    </div>
                </div>
            </section>
                {/* inspiration section */}
            <section>
                <div className='part2'>
                   <img  src={ mbtoken } alt="mbtoken"/>
                   <img  src={ metamask1 } alt="metamask1"/>
                   <img  src={ opensea } alt="opensea"/>
                </div>
                <p className='inspiration-header'>Inspiration for your next adventure</p>
                {/*start*/}
                <div className='inspiration-part'>
                    <div className='grid-inspiration'>
                        <div className='box'>
                            <img  className='box-img' src={ inspiration1 }alt=""/>
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
                            <img  className='box-img' src={ inspiration2 }alt=""/>
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
                            <img  className='box-img' src={ inspiration3 }alt=""/>
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
                            <img  className='box-img' src={ inspiration4 }alt=""/>
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
                            <img  className='box-img' src={ inspiration5 }alt=""/>
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
                            <img  className='box-img' src={ inspiration6 }alt=""/>
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
                            <img  className='box-img' src={ inspiration7 }alt=""/>
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
                            <img  className='box-img' src={ inspiration8 }alt=""/>
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
                        
                    </div>
               </div>
               {/*end*/}
            </section>
            {/* inspiration section end */}
            <section>
                <div className='sub-footer'>
                    <div className='sub-words'>
                        <p className='nft'>Metabnb NFTs</p>
                        <p className='discover'>Discover our NFT gift card collection. Loyal customers getting amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                        <button className='learn'>Learn more</button>
                    </div>
                    <div className='sub-pictures'>
                        <img className='subpic1' src={ footerimg } alt="subpic1"/>
                    </div>
                </div>
            </section>
            <Footer />
            </div>
    );
}
export default Home;