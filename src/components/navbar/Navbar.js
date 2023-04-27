import Link from "next/link"
import styles from './Navbar.module.sass';
import { useRouter } from 'next/router'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectIsNavCollapsed, setIsNavCollapsed } from "../../../store/slices/navbar";


export default function Navbar() {
  const {asPath} = useRouter();
  const dispacth = useDispatch()
  const isNavCollapsed = useSelector(selectIsNavCollapsed)

  const links = [
    {
      name: "Marketplace",
      path: "/"
    },
    {
      name: "My NFTs",
      path: "/my-nfts"
    },
    {
      name: "About RECP",
      path: "/about-us"
    },
    {
      name: "Get In Touch",
      path: "/contact#contact"
    }
  ]

  const close = () => {
    dispacth(setIsNavCollapsed({ isNavCollapsed: false }));
  }

  return (
    <div className={`${styles.overlay} ${isNavCollapsed ? '' : 'hidden'}`}>
      <nav>
        <ul>
          {links.map((link, i) => (
              <li
                className={asPath.split('/')[1] === link.path.slice(1) ? styles.active : ''}
                key={i}
                onClick={close}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className={styles.close} onClick={close}>
        <AiOutlineClose />
      </div>
    </div>
  )
}
  