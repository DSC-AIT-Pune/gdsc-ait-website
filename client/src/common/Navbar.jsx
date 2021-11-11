import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../styles/images/gdsc_logo.png";
import styles from '../styles/components/navbar.module.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const NavBar = (props) => {

  const [value, setValue] = React.useState(0);


  return (
    <nav className={styles.headerNav}>
      <div className={styles.navbarDesktop}>
        <img src={logo} alt="gdscLogo" className={styles.logo} />
        <div className={styles.NavLinks}>
          <NavLink to="/" className={styles.Link}>
            Home
          </NavLink>
          <NavLink to="/events" className={styles.Link}>
            Events
          </NavLink>
          <NavLink to="/solutions" className={styles.Link}>
            Solutions
          </NavLink>
          <NavLink to="/videos" className={styles.Link}>
            Videos
          </NavLink>
          <NavLink to="/coreTeam" className={styles.Link}>
            Core Team
          </NavLink>
          <NavLink to="/contact" className={styles.Link}>
            Contact
          </NavLink>
        </div>
      </div>

      <nav className={styles.mobileTopBar}>
        <Box sx={{ flexGrow: 1 }} >
              <AppBar position="static" className={styles.appBar}>
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                  <img style={{width:"80px"}} src={logo}/>
                  </IconButton>
                  <Typography  variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'GoogleSans', fontSize:"12px" }}>
                    Google Developer Student Club AIT
                  </Typography>
                </Toolbar>
              </AppBar>
        </Box>
      </nav>
      

      <nav className={styles.bottomNavigation}>
        <Box >
          <BottomNavigation showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction style={{padding:"0", minWidth:"20px"}} href="/" icon={<img src="https://img.icons8.com/ios/18/000000/home.png"/>}/>
            <BottomNavigationAction style={{padding:"0", minWidth:"20px"}}  href="/events" icon={<img src="https://img.icons8.com/dotty/18/000000/tear-off-calendar.png"/>} />
            <BottomNavigationAction style={{padding:"0", minWidth:"20px"}}  href="/solutions" icon={<img src="https://img.icons8.com/dotty/18/000000/idea.png"/>} />
            <BottomNavigationAction style={{padding:"0", minWidth:"20px"}}  href="/videos" icon={<img src="https://img.icons8.com/ios/18/000000/youtube-play--v1.png"/>} />
            <BottomNavigationAction style={{padding:"0", minWidth:"20px"}}  href="/coreTeam" icon={<img src="https://img.icons8.com/dotty/18/000000/user-group-man-woman.png"/>} />
            <BottomNavigationAction style={{padding:"0", minWidth:"20px"}}  href="/contact" icon={<img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/18/000000/external-message-chat-flatart-icons-outline-flatarticons-4.png"/>} />
          </BottomNavigation>
        </Box>
      </nav>
      
    </nav>
  );
};

export default NavBar;
