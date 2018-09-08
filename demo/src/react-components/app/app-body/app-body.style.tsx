import { Theme, createStyles, appConsts } from '../../../index.style';

export const appBodyTheme = (theme: Theme) => createStyles({
  appBody: {
    width: '100%',
    height: '100%',
    paddingLeft: appConsts.appRoutesWidth,
    paddingTop: appConsts.appHeaderHeight,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  },
  appBodyContent: {
    paddingTop: 10,
    overflow: 'auto',
    height: '100%'
  }
});
