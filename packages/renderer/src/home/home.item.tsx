import React from 'react';
import {Card, CardContent, Grid} from '@material-ui/core';

import useStyles from './home.item.style';

const colors = [
  '#c1cbd7', '#afb0b2', '#939391', '#bfbfbf', '#e0e5df', '#b5c4b1',
  '#8696a7', '#9ca8b8', '#ececea', '#fffaf4', '#96a48b', '#7b8b6f',
  '#dfd7d7', '#656565', '#d8caaf', '#c5b8a5', '#fdf9ee', '#f0ebe5',
];

type Props = {
  value: string;
};

/**
 * 主页应用组件
 */
export const HomeItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={({background: colors[props.value.charCodeAt(0) % colors.length]})}>
      <CardContent>
        <Grid container justifyContent="center" alignContent="center">
          <h1>{props.value}</h1>
        </Grid>
      </CardContent>
    </Card>
  );
};
