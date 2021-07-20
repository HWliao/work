import React from 'react';
import useStyles from './home.style';
import {Container, Grid} from '@material-ui/core';
import {HomeItem} from '/@/home/home.item';


/**
 * 主页面
 */
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container justifyContent="center">
            <h1 className={classes.title}>WORK</h1>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center">
            <Grid container justifyContent="center" spacing={3} className={classes.content}>
              {
                [{title: '待办', path: 'todo'}, {title: '周报', path: 'weekly'}].map((item, key) => (
                  <Grid item key={key}>
                    <HomeItem value={item.title} path={item.path}/>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
