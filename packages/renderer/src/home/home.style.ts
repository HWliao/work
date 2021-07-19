import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: '80px',
    backgroundImage: 'linear-gradient(to top, white, ' + theme.palette.primary.main + ')',
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    color: 'transparent',
  },
  paper: {
    height: 120,
    width: 120,
    borderRadius: 0,
    cursor: 'pointer',
  },
  content: {
    width: '600px',
  },
}));
