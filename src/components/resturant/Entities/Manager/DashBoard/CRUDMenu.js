import React from "react";
import { observer, inject } from "mobx-react";
import Add from "./Add";
import "../../../../../styles/NavBar.css";
import UpdateItems from "./UpdateItems";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Employees from "./Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});


const CRUDMenu = inject("menu")(
  observer((props) => {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Employees />

        <CssBaseline />
      </div>
    </ThemeProvider>
      // <div>
        
      //   <UpdateItems />
      // </div>
    );
  })
);

export default CRUDMenu;
