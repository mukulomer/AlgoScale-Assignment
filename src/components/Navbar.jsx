import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useGoogleLogout } from "react-google-login";

const clientId =
  "546966206822-fqs482aj9fh8hpkb1m9r1d2nv1ra9guc.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  const onLogoutSuccess = (res) => {
    props.handleLogout(props.prop);
    console.log("Logged out Success");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Full Stack Assignment
          </Typography>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button component={Link} to="/" onClick="">
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button component={Link} to="/analytics" onClick={""}>
              <ListItemText primary="Analytics" />
            </ListItem>
          </List>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button component={Link} to="/login" onClick={signOut}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <div className={classes.search}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
