import sarabi from "../../../Assets/sarabi.png"
import styles from "./PixelArt.module.css"
import { AiFillHeart } from "react-icons/ai"
const Sarabi = () => {
  return (
    <div className={styles.container}>
      <img src={sarabi} alt="" className={styles.sarabiImg} />
      <p className={styles.onHover}>
        Sarabi <AiFillHeart />
      </p>
    </div>
  )
}

export default Sarabi
