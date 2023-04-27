import styles from './InvestModal.module.sass';
import { AiOutlineClose } from "react-icons/ai";
import { ethers } from 'ethers';
import { useDispatch, useSelector } from 'react-redux';
import { connectUser, selectUserAddress } from '../../../store/slices/user';
import { addNotif } from '../../../store/slices/notifs';
import { FaEthereum } from "react-icons/fa";
import { changeOwner } from '../../../store/slices/nfts';
import { useRef } from 'react';
import Tuto from '../tuto/Tuto';
import { next, selectCurrent, setCurrent } from '../../../store/slices/tutos';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "/data/contract.json";

const MINT_AMOUNT = 1

export default function InvestModal({ nft, setNft }) {
  const dispatch = useDispatch()
  const userAddress = useSelector(selectUserAddress)
  const current = useSelector(selectCurrent)
  const buyRef = useRef(null)
  const nftcpy = {...nft}
  
  if (!nft || !nft.id)
  return <></>
  
  let provider = null
  let signer = null

  const invest = async () => {
    if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
    } else {
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner();
    }

    if (provider && signer) {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      if (!contract) {
        dispatch(addNotif({
          msg: "A problem occurred",
          type: "danger"
        }))
        return
      }
      
      const tx = await contract.mint(
        MINT_AMOUNT, 
        { 
          value: ethers.parseEther(`${nft.price}`) 
        }
      )
      .catch(err => {
        if (err.code === "INSUFFICIENT_FUNDS") {
          dispatch(addNotif({
            msg: "Not enough funds",
            type: "danger"
          }))
        }
      });

      if (!tx) {
        return
      }

      setNft({})
      if (current == 8)
        dispatch(next())
        
      await tx.wait()
      .then(() => {
        dispatch(addNotif({
          msg: "Transaction successful"
        }))
        const res = dispatch(changeOwner({
          nft: nftcpy, 
          newOwner: userAddress
        }))
        console.log(res);
        dispatch(addNotif({ msg: `You now own ${nft.name}` }))
      })
      .catch(err => {
        console.log(err);
        dispatch(addNotif({
          msg: "something went wrong during transaction",
          type: "danger"
        }))
      });
    }
  };

  const close = (e) => {
    e.preventDefault() 
    setNft({})
    if (current == 8)
      dispatch(setCurrent(0))
  }

  return (
    <div className={styles.wrapper} ref={buyRef} onClick={ (e) => { e.preventDefault(); /*setNft({})*/ } }>
      <Tuto
        id={8}
        show={false}
        getTarget={() => buyRef}
      />
      <div className={styles.modal} onClick={ (e) => e.preventDefault()  }>
        <div className='head'>
          <h2>Buy {nft.name}</h2>
        </div>
        <div className={styles.img}>
          <img src={nft.src} />
        </div>
        <div>
          {!userAddress && (
            <>
              <p>Connect to your wallet</p>
              <button className="btn" onClick={() => dispatch(connectUser())}>
                  Connect
              </button>
            </>
          )}
            {userAddress && (
            <>
              <p>Connected with:<br/><span>{userAddress}</span></p>
              <p>{nft.price} <FaEthereum /></p>
              {
              (!userAddress || (userAddress && userAddress != nft.owner)) ?
                <button className='btn' onClick={invest}>BUY</button>
              :
                <p>(OWNED)</p>
              }
            </>
          )}
        </div>
        <div className={styles.close} onClick={close}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}
  