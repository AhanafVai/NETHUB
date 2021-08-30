import {
  BottomNavigation,
  BottomNavigationAction,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import SearchIcon from "@material-ui/icons/Search";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TvIcon from "@material-ui/icons/Tv";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#f50057",
    },
  },
});

// Styles
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "black",
    zIndex: 100,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);
  return (
    <ThemeProvider theme={darkTheme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} />

        <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />

        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default BottomNav;
