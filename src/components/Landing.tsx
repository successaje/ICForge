import styles from "./styles/landing.module.scss";
import DropBox from "../assets/dropbox.svg";
import DropWater from "../assets/dropwater.svg";
import Polygon from "../assets/Polygon.svg";

const Landing = () => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_left_container}>
        <div className={styles.landing_title}>
          <h5>ICFORGE</h5>
          <img src={DropBox} alt="" />
        </div>
        <h3>A Crypto Based platform Web 3 </h3>
        <h4>Easily deploy your smart contract without coding</h4>

        <div className={styles.landing_stats}>
          <div className={styles.landing_stats_lables}>
            <h5>311.56</h5>
          </div>
          <div className={styles.landing_stats_lables}>
            <h5>2,000</h5>
            <p>Canister</p>
          </div>
          <div className={styles.landing_stats_lables}>
            <h5>5,000</h5>
            <p>Users</p>
          </div>
        </div>
      </div>
      <div className={styles.landing_right_container}>
        {/* Drop Water */}
        <img src={DropWater} alt="1" className={styles.drop_water} />
        <img src={DropWater} alt="2" className={styles.drop_water} />
        <img src={DropWater} alt="3" className={styles.drop_water} />
        <img src={DropWater} alt="4" className={styles.drop_water} />
        <img src={DropWater} alt="5" className={styles.drop_water} />
        <img src={DropWater} alt="6" className={styles.drop_water} />
        {/* Polygon */}
        {/* <img src={Polygon} alt="7" className={styles.polygon} /> */}
        {/* <img src={Polygon} alt="2" className={styles.polygon} />
        <img src={Polygon} alt="3" className={styles.polygon} />
        <img src={Polygon} alt="4" className={styles.polygon} />
        <img src={Polygon} alt="5" className={styles.polygon} /> */}
        {/* <img src={Polygon} alt="6" className={styles.polygon} /> */}

        <div className={styles.welcome_header}>
          <h3>Welcome</h3>
          <p>Sign up/Login below</p>
        </div>
        <button>Log in with Internet Identity</button>
        <p>
          Powered by Internet computer{" "}
          <span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8092 10.8258L16.83 8.50664L19.8183 6.15997C19.9366 6.06719 20.0302 5.94676 20.0909 5.80929C20.1517 5.67182 20.1777 5.52152 20.1667 5.37164C20.1521 5.22231 20.1031 5.0784 20.0236 4.95117C19.9441 4.82394 19.8362 4.71685 19.7083 4.6383L14.9967 1.95247C14.8312 1.85938 14.6409 1.81996 14.4521 1.83967C14.2632 1.85937 14.0852 1.93722 13.9425 2.06247L11 4.62914L8.0575 2.06247C7.91482 1.93722 7.73676 1.85937 7.54793 1.83967C7.3591 1.81996 7.16881 1.85938 7.00334 1.95247L2.29167 4.6383C2.16384 4.71685 2.05594 4.82394 1.97642 4.95117C1.89691 5.0784 1.84793 5.22231 1.83334 5.37164C1.82232 5.52152 1.84833 5.67182 1.90908 5.80929C1.96982 5.94676 2.06343 6.06719 2.18167 6.15997L5.17 8.50664L2.19084 10.7891C2.07092 10.8809 1.97554 11.0009 1.91317 11.1384C1.85081 11.276 1.82338 11.4268 1.83334 11.5775C1.84349 11.728 1.89064 11.8737 1.97059 12.0016C2.05054 12.1295 2.16083 12.2357 2.29167 12.3108L5.4175 14.1441V16.4083C5.41816 16.565 5.45894 16.7188 5.53597 16.8552C5.613 16.9916 5.7237 17.106 5.8575 17.1875L10.5233 20.0566C10.6627 20.1371 10.8208 20.1794 10.9817 20.1794C11.1426 20.1794 11.3007 20.1371 11.44 20.0566L16.1058 17.1875C16.2396 17.106 16.3503 16.9916 16.4274 16.8552C16.5044 16.7188 16.5452 16.565 16.5458 16.4083V14.135L19.6717 12.3475C19.8025 12.2724 19.9128 12.1662 19.9928 12.0382C20.0727 11.9103 20.1198 11.7646 20.13 11.6141C20.1443 11.4666 20.1225 11.3178 20.0666 11.1805C20.0107 11.0432 19.9224 10.9215 19.8092 10.8258ZM14.6667 3.8683L17.6275 5.55497L15.29 7.3883L12.54 5.70164L14.6667 3.8683ZM13.6675 8.56164L11 10.395L8.3325 8.56164L11 6.9208L13.6675 8.56164ZM4.39084 5.55497L7.33334 3.8683L9.45084 5.70164L6.70084 7.3883L4.39084 5.55497ZM4.39084 11.4125L6.6825 9.65247L9.4325 11.5591L7.3975 13.145L4.39084 11.4125ZM14.74 15.8675L11 18.1775L7.25084 15.8675V15.1341C7.38476 15.167 7.52437 15.1692 7.65928 15.1407C7.79418 15.1121 7.9209 15.0535 8.03 14.9691L11 12.6775L13.97 14.9691C14.13 15.0933 14.3266 15.161 14.5292 15.1616C14.6022 15.1705 14.6761 15.1705 14.7492 15.1616L14.74 15.8675ZM14.6025 13.1175L12.5583 11.5591L15.3083 9.65247L17.6092 11.4308L14.6025 13.1175Z"
                fill="black"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
