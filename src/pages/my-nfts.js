import styles from '@/styles/pages/my-nfts.module.sass'
import NFT from '@/components/NFT/NFT'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connectUser, selectUserAddress } from '../../store/slices/user';

gsap.registerPlugin(ScrollTrigger);

export default function MyNFTS({ nfts }) {
  const dispatch = useDispatch()
  const address = useSelector(selectUserAddress)

  useEffect(() => {
    gsap.utils.toArray('.nft').forEach((nft, i) => {
      gsap.fromTo(nft, {
        opacity: 0,
        yPercent: 20
      }, {
        scrollTrigger: {
          trigger: nft,
          toggleActions: "restart pause pause reset",
        },
        opacity: 1,
        yPercent: 0,
        delay: i % 4 * .2
      })
    })
  }, [])
  
  return (
    <>
      <main className={styles.main}>
        {
        address ?
          <div className={styles.nfts}>
            {
              nfts.filter((nft) => nft.owner === address).map((nft, i) => (
                <Link href={`/nfts/${nft.id}`} key={nft.id}>            
                  <NFT nft={nft} />
                </Link>
              ))
            }
          </div>
        :
        <div className={styles.connect}>
          <p>You should first connect your wallet</p>
          <button className="btn" onClick={() => dispatch(connectUser())}>BEGIN NOW</button>
        </div>
        }
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const { nfts } = await import("/data/nfts.json")
  // const address = useSelector(selectUserAddress)

  return {
    props: {
      nfts: nfts
    },
  }
}
