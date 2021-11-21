import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/styles"
import {
AppBar,
Toolbar,
useScrollTrigger,
Tabs,
Tab,
Button,
Menu,
MenuItem,
useMediaQuery,
useTheme,
SwipeableDrawer,
IconButton,
List,
ListItem,
ListItemText
}
from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;
      const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em',
      [theme.breakpoints.down("md")]: {
        marginBottom: '2em'
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: '1.25em'
      },
    },
    logo: {
      height: '8em',
      [theme.breakpoints.down("md")]: {
        height: '7em'
      },
      [theme.breakpoints.down("xs")]: {
        height: '5.5em'
      }
    },
    tabContainer: {
      marginLeft: 'auto'
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px'
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px'
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    menu: {
      backgroundColor: theme.palette.common.arcBlue,
      color: '#fff',
      borderRadius: 0
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1
      }
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    drawerIcon: {
      height: '50px',
      width: '50px'
    },
    drawer: {
      backgroundColor: theme.palette.common.arcBlue
    },
    drawerItem: {
      ...theme.typography.tab,
      color: '#fff',
      opacity: 0.7
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.arcOrange
    },
    drawerItemSelected: {
      opacity: 1
    }
  }))

export default function Header(props) {
const classes = useStyles()
const [value, setValue] = useState(0)
const [anchorEl, setAnchorEl] = useState(null)
const [openMenu, setOpenMenu] = useState(false)
const [selectedIndex, setSelectedIndex] = useState(0)
const [openDrawer, setOpentDrawer] = useState(false)

const theme  = useTheme()
const matches = useMediaQuery(theme.breakpoints.down("md"))
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


const handleChange = (e, newValue) => {
  setValue(value)
}

const handleClick = (e) => {
  setAnchorEl(e.currentTarget)
  setOpenMenu(true)
}

const handleClose = (e) => {
  setAnchorEl(null)
  setOpenMenu(false)
}

const menuOptions = [
  {
    name: "Services",
    link: "/services",
    activeIndex: 1,
    selectedIndex: 0
  },
  {
    name: "Custom Software Development",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 1
  },
  {
    name: "Mobile App Development",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 2
  },
  {
    name: "Website Development",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 3
  }
]

const routes = [
  {
    name: 'Home',
    link: '/',
    activeIndex: 0
  },
  {
    name: 'Services',
    link: '/services',
    activeIndex: 1
  },
  {
    name: 'The Revolution',
    link: '/revolution',
    activeIndex: 2
  },
  {
    name: 'About Us',
    link: '/about',
    activeIndex: 3
  },
  {
    name: 'Contact Us',
    link: '/contact',
    activeIndex: 4
  }
]

const handleMenuItemClick = ((e, i) => {
  setAnchorEl(null)
  setOpenMenu(false)
  setSelectedIndex(i)
})


useEffect(() => {
  [...menuOptions, ...routes].forEach(route => {
    console.log('active index: ', route.activeIndex, 'selected index: ', route.selectedIndex)
    switch(window.location.pathname) {
      case `${route.link}`:
        if (value !== route.activeIndex) {
          setValue(route.activeIndex)
          if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
            setSelectedIndex(route.selectedIndex)
          }
        }
        break;
        default:
          break
    }
  })
}, [value, menuOptions, selectedIndex, routes])
console.log('value: ', value)

const tabs = (
  <React.Fragment>
    <Tabs
      value={value}
      onChange={handleChange}
      className={classes.tabContainer}
      indicatorColor="primary"
    >
      <Tab
      className={classes.tab}
      component={Link}
      to="/"
      label="Home"/>
      <Tab
        className={classes.tab}
        component={Link}
        to="/services"
        label="Services"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup={anchorEl ? "true" : undefined}
        onMouseOver={event => handleClick(event)}
      />
      <Tab 
        className={classes.tab} 
        component={Link} 
        to="/revolution" 
        label="The Revolution"
      />
      <Tab 
        className={classes.tab} 
        component={Link} 
        to="/about" label="About Us"
      />
      <Tab 
        className={classes.tab} 
        component={Link} 
        to="/contact" label="Contact Us"
      />
    </Tabs>
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClose={handleClose}
    >
      Free Estimate
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{onMouseLeave: handleClose}}
      classes={{paper: classes.menu}}
      elevation={0}
    >
      {menuOptions.map((option, i) => (
        <MenuItem
        key={option}
        component={Link}
        to={option.link}
        classes={{root: classes.menuItem}}
        onClick={(e) => {handleMenuItemClick(e, i); setValue(1); handleClose()}}
        selected={i === selectedIndex && value === 1}
        >
        {option.name}
        </MenuItem>
      ))}
    </Menu>
  </React.Fragment>
)

const drawer = (
  <React.Fragment>
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS} open={openDrawer}
      onClose={() => setOpentDrawer(false)}
      onOpen={() => setOpentDrawer(true)}
      classes={{paper: classes.drawer}}
    >
      <List disablePadding>
        <ListItem 
          onClick={() => {setOpentDrawer(false); setValue(0)}} 
          divider 
          button 
          component={Link} 
          to="/"
          selected={value === 0}
        >
          <ListItemText
            className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
            disableTypography
          >
            Home
          </ListItemText>
        </ListItem>
        <ListItem 
          onClick={() => {setOpentDrawer(false); setValue(1)}} 
          divider 
          button 
          component={Link} 
          to="/services"
          selected={value === 1}
        >
          <ListItemText
            className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
            disableTypography
          >
            Services
          </ListItemText>
        </ListItem>
        <ListItem 
          onClick={() => {setOpentDrawer(false); setValue(2)}} 
          divider 
          button 
          component={Link}
          to="/revolution"
          selected={value === 2}
        >
          <ListItemText
            className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
            disableTypography
          >
            The Revolution
          </ListItemText>
        </ListItem>
        <ListItem 
          onClick={() => {setOpentDrawer(false); setValue(3)}} 
          divider 
          button 
          component={Link}
          to="/about"
          selected={value === 3}
        >
          <ListItemText
            className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
            disableTypography
          >
            About Us
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {setOpentDrawer(false); setValue(4)}} 
          divider
          button
          component={Link} 
          to="/contact"
          selected={value === 4}
        >
          <ListItemText
            className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
            disableTypography
          >
            Contact Us
          </ListItemText>
        </ListItem>
        <ListItem 
          onClick={() => {setOpentDrawer(false); setValue(5)}} 
          divider 
          button 
          component={Link}
          to="/estimate"
          selected={value ===5}
          className={classes.drawerItemEstimate}
        >
          <ListItemText
            className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
            disableTypography
          >
            Free Estimate
          </ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
      <IconButton
      className={classes.drawerIconContainer}
        onClick={()=>setOpentDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
  </React.Fragment>
)

return (
  <React.Fragment>
    <ElevationScroll>
      <AppBar> {/*by default position is 'fixed'*/}
      <Toolbar disableGutters>
        <Button
          component={Link}
          to='/'
          className={classes.logoContainer}
          onClick={() => setValue(0)} disableRipple>
          <img
            className={classes.logo}
            src={logo}
            alt='company logo'
          />
        </Button>
       {matches ? drawer : tabs}
      </Toolbar>
  </AppBar>
  </ElevationScroll>
  <div className={classes.toolbarMargin} />
  </React.Fragment>
  )
}