import React from 'react';
import {BrowserRouter as Router, Link as RouterLink, Route, Switch} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import {Fab, makeStyles} from '@material-ui/core';
import Home from '/@/home/home';
import {NotFound} from '/@/not-found/not.found';

const useStyles = makeStyles(theme => ({
  homeFab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  homeIcon: {
    marginRight: theme.spacing(1),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <Fab component={RouterLink} to="/home" color="primary" variant="extended" className={classes.homeFab}>
        <HomeIcon className={classes.homeIcon}/>
        HOME
      </Fab>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
    </Router>
  );
};

export default App;
