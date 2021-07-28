import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Container } from "../";
import { classNames } from "utils";

// import { IconButton } from "@material-ui/core";
// 
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

import PropTypes from "prop-types";

import Link from 'next/link'

export default function Navbar({ classes }) {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  let clickHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.navbar}>
      <Container classes={{container:styles.navbarWrapper}}>
        <h2 className={styles.logo}>
          <Link href="/">Wrestling Insight</Link>
        </h2>
      </Container>
    </div>
  );
}

Navbar.propTypes = {
  logo:PropTypes.node,
  menuItems:PropTypes.arrayOf(PropTypes.node),
  classes:PropTypes.arrayOf(PropTypes.string)
}