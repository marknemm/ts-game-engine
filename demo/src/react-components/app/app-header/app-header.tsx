import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, withStyles, StyledComponentProps } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as styles from './app-header.style';

interface IAppHeaderProps extends StyledComponentProps {
  toggleDrawer: () => void;
}

class AppHeader extends React.Component<IAppHeaderProps> {

  constructor(props: IAppHeaderProps) {
    super(props);
  }

  /**
   * @override React.Component
   */
  render(): JSX.Element {
    const { classes, toggleDrawer } = this.props;

    return (
      <AppBar position="static" className={classes.appHeader}>
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer} aria-label="Menu" className={classes.navIcon}>
            <MenuIcon />
          </IconButton>
          <Typography variant="headline" color="inherit">TS Game Engine Demos</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles.appHeaderTheme, { withTheme: true })(AppHeader);
