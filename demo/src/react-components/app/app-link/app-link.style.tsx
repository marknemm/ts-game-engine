import { createStyles, Theme } from '../../../index.style';

export const appLinkTheme = (theme: Theme) => createStyles({
  treeLvPad: {
    paddingLeft: (theme.spacing.unit * 4),
  },
  navIcon: {
    marginRight: 0
  }
});
