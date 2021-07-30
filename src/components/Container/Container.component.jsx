import React from "react";
import styles from "./Container.module.css";

import { classNames, returnDefault } from "utils";

import PropTypes from "prop-types";

// Have to convert these inline styles to classes

export default function Container({
  children,
  classes,
  maxWidth,
  disableGutters,
}) {
  let maxWidthMapper = (maxWidth) => {
    return `width-${returnDefault({
      array: ["md", "xs", "sm", "lg", "xl"],
      value: maxWidth,
    })}`;
  };

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles[maxWidthMapper(maxWidth)]]: true,
        [styles["no-padding"]]: disableGutters,
        [classes?.container]: classes?.container,
      })}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  disableGutters: PropTypes.bool,
  classes: PropTypes.object,
};

Container.defaultProps = {
  disableGutters: false,
};
