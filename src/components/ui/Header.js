import React, {useState, useEffect, useMemo} from "react";
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
      '& .MuiListItemText-root': {
        opacity: 1
      }
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1
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
  setValue(newValue)
}

const handleClick = (e) => {
  setAnchorEl(e.currentTarget)
  setOpenMenu(true)
}

const handleClose = (e) => {
  setAnchorEl(null)
  setOpenMenu(false)
}

const handleMenuItemClick = ((e, i) => {
  setAnchorEl(null)
  setOpenMenu(false)
  setSelectedIndex(i)
})

const menuOptions = useMemo(
  () => [
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
],
[]
)

const routes = useMemo(() => [
  {
    name: 'Home',
    link: '/',
    activeIndex: 0
  },
  {
    name: 'Services',
    link: '/services',
    activeIndex: 1,
    ariaOwns: anchorEl ? "simple-menu" : undefined,
    ariaPopup: anchorEl ? "true" : undefined,
    mouseOver: event => handleClick(event)
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
],
[anchorEl]
)

useEffect(() => {

  [...menuOptions, ...routes].forEach(route => {
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

const tabs = (
  <React.Fragment>
    <Tabs
      value={value}
      onChange={handleChange}
      className={classes.tabContainer}
      indicatorColor="primary"
    >
      {routes.map((route, i) => (
          <Tab
          key={`${route}${i}`}
          className={classes.tab}
          component={Link}
          to={route.link}
          label={route.name}
          aria-owns={route.ariaOwns}
          aria-haspopup={route.ariaPopup}
          onMouseOver={route.mouseOver}
        />
      )
    )}
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
      style={{zIndex: 1302}}
      keepMounted
    >
      {menuOptions.map((option, i) => (
        <MenuItem
        key={`${option}${i}`}
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
      <div className={classes.toolbarMargin} />
      <List disablePadding>
        {routes.map(route => (
          <ListItem
            key={`${route}${route.activeIndex}`}
            divider
            button
            component={Link}
            to={route.link}
            selected={value === route.activeIndex}
            classes={{selected: classes.drawerItemSelected}}
            onClick={() => {setOpentDrawer(false); setValue(route.activeIndex)}}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
            >
              {route.name}
            </ListItemText>
          </ListItem>
          )
        )}
        <ListItem 
          onClick={() => {setOpentDrawer(false); setValue(5)}} 
          divider 
          button 
          component={Link}
          to="/estimate"
          selected={value ===5}
          classes={{root: classes.drawerItemEstimate, selected:classes.drawerItemSelected}}
        >
          <ListItemText
            className={classes.drawerItem}
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
      <AppBar className={classes.appbar}> {/*by default position is 'fixed'*/}
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