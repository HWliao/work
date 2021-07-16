// material ui 字体
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/noto-sans-sc/300.css';
import '@fontsource/noto-sans-sc/400.css';
import '@fontsource/noto-sans-sc/500.css';
import '@fontsource/noto-sans-sc/700.css';
import {createTheme} from '@material-ui/core/styles';

// 自定义字体,主要兼容中文字体
const fontFamily = [
  '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
  'Roboto', '"Noto Sans SC"', 'Oxygen',
  'Ubuntu', '"Cantarell"', '"Fira Sans"', '"Droid Sans"',
  '"Helvetica Neue"', 'Arial', 'sans-serif',
  '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
].join(',');

export default createTheme({
  typography: {
    fontFamily: fontFamily,
    // 中文字体偏大,设置小一点
    fontSize: 12,
  },
  palette: {
    primary: {main: '#96A48B'},
    secondary: {main: '#D8CAAF'},
    error: {main: '#802A2A'},
    warning: {main: '#f7cf74'},
    info: {main: '#919dd2'},
    success: {main: '#b2d9ac'},
  },
  shape: {
    // 圆角弄一小点
    borderRadius: 2,
  },
  props: {
    MuiButtonBase: {
      // 去掉所有水波纹
      disableRipple: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          // 全局字体抗拒此最优
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      },
    },
  },
});
