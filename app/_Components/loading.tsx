import styles from './loading.module.scss'; // Assuming you're using CSS Modules
import loader from "../../public/img/loading/loader.gif";
export default function Loading() {
  return (
    <div>
        <img src={loader.src} alt="Loading" />
    </div>
  )
}
