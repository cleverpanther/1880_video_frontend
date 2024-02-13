import "assets/theme/base/plugins.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { setMiniSidenav, setOpenConfigurator, useVisionUIController } from "context";
import { useEffect, useState } from "react";

import BasicSignin from "pages/authentication/signin";
import BasicSignup from "pages/authentication/signup";
import Configurator from "layouts/Configurator";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "pages/dashboard";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Icon from "@mui/material/Icon";
import Sidenav from "layouts/Sidenav";
import { ThemeProvider } from "@mui/material/styles";
import VuiBox from "components/VuiBox";
import pageRoutes from "routes/page.routes";
import routes from "routes/routes";
import theme from "assets/theme";
import { useSelector } from "react-redux";

export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <VuiBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="white"
      sx={({ palette: { info } }) => ({ cursor: "pointer", backgroundColor: info.main })}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </VuiBox>
  );

  const auth = useSelector(state => state.auth);
  const role = auth.userData?.role;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brandName="1880 town"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      <Routes>
        <Route exact path="/" element={
          (auth.accessToken && auth.accessToken !== "" && role !== undefined) ? <Navigate to={role === 'admin' ? "/dashboard" : "/portfolio"} replace /> : <BasicSignin />
        }/>
        <Route exact path="/login" element={
          (auth.accessToken && auth.accessToken !== "" && role !== undefined) ? <Navigate to={role === 'admin' ? "/dashboard" : "/portfolio"} replace /> : <BasicSignin />
        } />
        <Route exact path="/register" element={
          (auth.accessToken && auth.accessToken !== "" && role !== undefined) ? <Navigate to={role === 'admin' ? "/dashboard" : "/portfolio"} replace /> : <BasicSignup />
        } />
        <Route
          path=""
          element={
            (auth.accessToken && auth.accessToken !== "" && role !== undefined) ? <Dashboard /> : <Navigate to="/login" replace />
          }
        >
          {
            role && (role === 'admin' ? <>
              <Route path="advisors" element={<Advisors />} />
              <Route path="advisor/view/:id" element={<AdvisorView />} />
              <Route path="advisor/edit/:id" element={<AdvisorEdit />} />
              <Route path="settings" element={<Settings />} />
            </> : <>
              <Route path="portfolio" element={<Portfolio />} />
              <Route exact path="portfolio/graph" element={<PortfolioGraph />} />
              <Route path="clients" element={<Clients />} />
              <Route path="chat" element={<Chat />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="email" element={<Email />}>
                <Route exact index element={<EmailInbox />} />
                <Route exact path="sent" element={<EmailSent />} />
                <Route exact path="draft" element={<EmailDraft />} />
                <Route exact path="trash" element={<EmailTrash />} />
                {/* <Route exact path="setting" element={<EmailSetting />}/> */}
                <Route exact path="view/:id" element={<EmailView />} />
                <Route exact path="compose" element={<EmailCompose />} />
              </Route>
            </>)
          }
          <Route path="profile" element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
