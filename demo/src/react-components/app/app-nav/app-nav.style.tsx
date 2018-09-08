import { createStyles, appConsts } from '../../../index.style';

export const appNavTheme = () => createStyles({
  appNavDrawer: {
    position: 'absolute',
    paddingTop: appConsts.appHeaderHeight,
    width: appConsts.appRoutesWidth,
    height: '100%'
  }
});
