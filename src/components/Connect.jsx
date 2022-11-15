import React, { useContext } from 'react';
import { AppContext } from '../App';
import metamask from '../photos/metamaskpop.svg';
import walletconnect from '../photos/walletconnect.svg';
import next from '../photos/next.svg';
import { AiOutlineClose } from 'react-icons/ai';

const Connect = () =>{
    const { connectwallet, setconnectwallet } = useContext(AppContext);

    return(
        <div className='connect-wallet'>
            <div className='wallet-heading'>
                <p>Connect Wallet</p>
                <button
                onClick={() => {
                    setconnectwallet(false);
                    console.log(connectwallet);
                }}
                style={{background :'none', border:'none'}}>
                    <AiOutlineClose/>
                </button>
            </div>
            <div className='connect-line'></div>
            <div className='wallets'>
                <p className='wallet-text'>Choose your preferred wallet: </p>
                <div className='the-wallet'>
                    <div>
                        <img  src={ metamask } alt='metamask'/>
                        Metamask
                        <img src={ next }alt=""/>
                    </div>
                    <div>
                        <img src={walletconnect} alt="walletconnect"/>
                        WalletConnect
                        <img src={ next }alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Connect;