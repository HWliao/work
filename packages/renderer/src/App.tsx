import React from 'react';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="app">
      <Button variant="contained" color="primary">你好世界 ! Click Me !</Button>
      <Checkbox color="primary"/>
      <p>你好世界</p>
      <p>Hello World</p>
    </div>
  );
};

export default App;
