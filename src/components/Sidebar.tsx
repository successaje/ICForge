import styles from "./styles/sidebar.module.scss";
import { TbCell, TbWallet } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import { IoSyncCircleOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { useLocation, NavLink } from "react-router-dom";


const Sidebar = () => {
   const location = useLocation();
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_nav}>
        <NavLink to="/dashboard">
          <div
            className={`${
              location.pathname === "/dashboard" && styles.active_route
            }`}
          >
            <TiHomeOutline />
          </div>
        </NavLink>
        {/* <NavLink to="/wallet">
          <div
            className={`${
              location.pathname === "/wallet" && styles.active_route
            }`}
          >
            <TbWallet />
          </div>
        </NavLink> */}

        <NavLink to="/carniters">
          <div
            className={`${
              location.pathname === "/carniters" && styles.active_route
            }`}
          >
            <TbCell />
          </div>
        </NavLink>

        <NavLink to="/transactions">
          <div
            className={`${
              location.pathname === "/transactions" && styles.active_route
            }`}
          >
            <IoSyncCircleOutline />
          </div>
        </NavLink>
      </div>
      <div className={styles.sidebar_logout}>
        <BiLogOut />
      </div>
    </div>
  );
}

export default Sidebar