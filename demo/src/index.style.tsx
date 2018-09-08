/* Global & Root Level CSS-in-JS Styles */
import creatMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Theme, createStyles } from '@material-ui/core';
export { Theme, createStyles };

export const theme: Theme = creatMuiTheme({
  overrides: {
    MuiCardHeader: {
      root: {}
    }
  },
  palette: {
    type: 'dark'
  }
});
theme.overrides.MuiCardHeader.root.backgroundColor = theme.palette.primary.main;

export const appConsts = {
  appHeaderHeight: 64,
  appRoutesWidth: 270
};

export const canvas = {
  margin: '-16px 0px 10px -24px',
  width: 'calc(100% + 48px)',
  height: '500px'
};
