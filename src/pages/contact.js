import { useDispatch } from 'react-redux';
import { addNotif } from '../../store/slices/notifs';
import styles from '../styles/pages/contact.module.sass';

export default function Page() {
  const dispatch = useDispatch();

  const send = (e) => {
    e.preventDefault();
    dispatch(addNotif({ msg: "Message sent" }))
  }

  return (
    <div className={styles.contact} id="contact">
      <h1>Contact Us</h1>
      <form>
        <div>
          <input placeholder='First Name' />
          <input placeholder='Last Name' />
        </div>
        <input placeholder='Email' style={{ width: '100%' }} />
        <textarea placeholder='Message...' style={{ width: '100%' }} ></textarea>
        <button className="btn" onClick={send}>SEND</button>
      </form>
    </div>
  )
}