import CarnisterCard from "./cards/CarnisterCard";
import styles from "./styles/carnisters.module.scss";
import { MyCarnisterCards } from "../utils/data";

const Carnisters = () => {
  return (
    <div className={styles.carnister_container}>
      <h2>My canisters</h2>
      <p>You have total 5 canisters</p>

      <div className={styles.mycarnisters_container}>
        {MyCarnisterCards.map((item) => ( 
          <CarnisterCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Carnisters;
