import { Theme, createStyles, appConsts } from '../../../index.style';

export const appHeaderTheme = (theme: Theme) => createStyles({
  appHeader: {
    position: 'absolute',
    height: appConsts.appHeaderHeight,
    zIndex: 1301
  },
  toolbar: theme.mixins.toolbar,
  navIcon: {
    marginLeft: -12,
    marginRight: 15,
    outline: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
});
