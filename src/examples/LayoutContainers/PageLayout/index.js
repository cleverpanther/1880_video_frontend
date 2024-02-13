/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// Vision UI Dashboard PRO React context
import { setLayout, useVisionUIController } from "context";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import { useEffect } from "react";
// react-router-dom components
import { useLocation } from "react-router-dom";

function PageLayout({ background, children }) {
  const [, dispatch] = useVisionUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <VuiBox
      width="100vw"
      maxWidth="100%"
      height="100%"
      minHeight="100vh"
      sx={({ functions: { tripleLinearGradient }, palette: { gradients } }) => ({
        overflowX: "hidden",
        background: background
          ? `${background} !important`
          : ` ${tripleLinearGradient(
              gradients.cover.main,
              gradients.cover.state,
              gradients.cover.stateSecondary,
              gradients.cover.deg
            )} !important`,
        backgroundSize: "cover",
        position: "relative",
      })}
    >
      {children}
    </VuiBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
