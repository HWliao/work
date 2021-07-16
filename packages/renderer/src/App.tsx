import React from 'react';
import Button from '@material-ui/core/Button';
import {Box, Checkbox, Fab, Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const App: React.FC = () => {
  return (
    <div className="app">
      <Button variant="contained" color="primary">你好世界 ! Click Me !</Button>
      <Checkbox color="primary"/>
      <p>你好世界</p>
      <p>Hello World</p>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <p>
        <Typography component="div" variant="body1">
          <Box color="primary.main">primary.main</Box>
          <Box color="secondary.main">secondary.main</Box>
          <Box color="error.main">error.main</Box>
          <Box color="warning.main">warning.main</Box>
          <Box color="info.main">info.main</Box>
          <Box color="success.main">success.main</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.secondary">text.secondary</Box>
          <Box color="text.disabled">text.disabled</Box>
        </Typography>
      </p>
    </div>
  );
};

export default App;
