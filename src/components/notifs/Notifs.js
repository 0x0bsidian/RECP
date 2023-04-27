import { useSelector } from "react-redux";
import { selectnotifs } from "../../../store/slices/notifs";
import Notif from "../notif/Notif";
import styles from './Notifs.module.sass';

export default function () {
  const notifs = useSelector(selectnotifs)

  return (            
    <div className={styles.notifs}>
      {
        notifs.map(notif => <Notif key={notif.date} message={notif.msg} type={notif.type} />)
      }
    </div>
  )
}