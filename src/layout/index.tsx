import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout_container}>
      <Header />

      <div className={styles.layout_container_body}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
