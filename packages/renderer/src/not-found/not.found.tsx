import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: '80px',
    backgroundImage: 'linear-gradient(to top, white, ' + theme.palette.primary.main + ')',
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    color: 'transparent',
  },
}));

export const NotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h1 className={classes.title}>404</h1>
    </Container>
  );
};
