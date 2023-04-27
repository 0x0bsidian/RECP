import { useDispatch, useSelector } from 'react-redux';
import styles from './NFT.module.sass';
import { selectUserAddress } from '../../../store/slices/user';
import { next, selectCurrent } from '../../../store/slices/tutos';

export default function NFT({ nft, setNft }) {
    const dispatch = useDispatch()
    const address = useSelector(selectUserAddress)
    const current = useSelector(selectCurrent)

    const invest = (e) => {
        e.preventDefault();
        if (current != 0)
            return
        setNft(nft)
    }

    const handleClick = () => {
        if (current == 5)
            dispatch(next())
    }

    return (
        <div className={`${styles.nft} nft`} onClick={handleClick}>
            <div className={styles.img}>
                <div style={{
                    backgroundImage: `url(${nft.src})`
                }}></div>
            </div>
            <div className={styles.btn}>
                {
                    (!address || (address && address != nft.owner)) ?
                        <button className="btn" onClick={invest}>{nft.price} Eth</button>
                    :
                        <p>{nft.name} (OWNED)</p>
                }
            </div>
        </div>
    )
}