import Head from 'next/head'
import styles from '@/styles/pages/Home.module.sass'
import NFT from '@/components/NFT/NFT'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react'
import InvestModal from '@/components/investModal/InvestModal'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll } from '../../store/slices/nfts'
import { selectAll as selectAllAnim } from '../../store/slices/anim'
import Tuto from '@/components/tuto/Tuto'
import { hex_sha512 } from '@/helpers/sha256'
import { next, selectPassword, setCurrent } from '../../store/slices/tutos'
import { setAll } from '../../store/slices/anim'


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [passwordInput, setPasswordInput] = useState("")
  const [nft, setNft] = useState({})
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const tutoPassword = useSelector(selectPassword)
  const nfts = useSelector(selectAll)
  const animAll = useSelector(selectAllAnim)
  const nftTutoRef = useRef(null)

  useEffect(() => {
    if (animAll) {
      gsap.utils.toArray('.nft').forEach((nft, i) => {
        nft.anim = gsap.fromTo(nft, {
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
    }
  }, [animAll])

  const tryPassword = (e) => {
    if (e.key === 'Enter')
      if (hex_sha512(passwordInput) == tutoPassword) {
        // TUTO COOKIE
        // if (document.cookie.split(";").some((item) => item.trim().startsWith("tutorial_passed=")))
        //   dispatch(setCurrent(0))
        // else
        dispatch(next())
        dispatch(setAll(true))
        document.cookie = "connected=true; expires=0; SameSite=None; Secure";
      }
      else
        setError("Invalid password")
  }
  
  return (
    <>
      <Head>
        <title>SmartProperty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TUTOS */}
      <Tuto
        id={1}
        target={null}
        msg="Welcome to the RECP demo."
        offset={{
          x: 240 + 50,
          y: 0
        }}
        center
        closable={false}
      >
        <p style={{ fontSize: '.8em' }}>Please enter the password below</p>
        {error &&
          <p className='error' style={{ fontSize: '.8em' }}>{error}</p>
        }
        <input 
          type="password" 
          style={{ marginTop: '.8em', letterSpacing: '.5em', padding: '5px 10px' }}
          value={passwordInput}
          onChange={(e) => { setPasswordInput(e.target.value) }}
          onKeyDown={tryPassword}
        />
      </Tuto>
      <Tuto
        id={2}
        overlay={false}
        delay={2500}
        show={false}
      />
      <Tuto
        id={3}
        msg="We will guide you trough this demo. If you'd like to try our smart contracts, ensure you're on the Sepolia testnet."
        center
        navigation={false}
      >
        <div style={{ display: 'flex' }}>
          <button
            className="btn"
            style={{ transform: 'scale(.8)' }} 
            onClick={() => { dispatch(next()) }}
          >
            CONTINUE
          </button>
          <button
            style={{ transform: 'scale(.8)' }} 
            className="btn"
            onClick={() => { dispatch(next()); dispatch(next()) }}
          >
            SKIP
          </button>
        </div>
      </Tuto>
      <Tuto
        id={5}
        navigation={false}
        msg="Let's begin by visiting the detailed page of this NFT. Click on it to continue."
        getTarget={() => nftTutoRef }
        offset={{
          x: -30,
          y: -140
        }}
      />
      <main className={styles.main}>
        {animAll &&
          <div className={styles.nfts}>
            {
              nfts.map((nft, i) => (
                <Link href={`/nfts/${nft.id}`} key={nft.id} ref={i == 10 ? nftTutoRef : null}>
                  <NFT nft={nft} setNft={setNft} />
                </Link>
              ))
            }
          </div>
        }
      </main>
      <InvestModal nft={nft} setNft={setNft} />
    </>
  )
}

export async function getServerSideProps() {
  const { nfts } = await import("/data/nfts.json")

  return {
    props: {
      nfts
    },
  }
}
