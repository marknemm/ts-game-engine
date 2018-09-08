import { Theme, createStyles } from '../../index.style';

export const appTheme = (theme: Theme) => createStyles({
  appContainer: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: '100%'
  }
});
