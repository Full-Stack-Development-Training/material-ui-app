import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import footerAdornment from '../../assets/Footer Adornment.svg'
import { Grid, Hidden } from "@material-ui/core";
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    zIndex: 1302,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 700,
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  }, 
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down("xs")]: {
      height: '2.5em',
      width: '2.5em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    zIndex: 1400,
    right: '1.5em',
    [theme.breakpoints.down("xs")]: {
      right: '0.5em'
    }
  }
}))

const Footer = (props) => {
  const classes = useStyles()

  return <footer className={classes.footer}>
    <Hidden mdDown>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" onClick={()=>props.setValue(0)} className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/services" onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} className={classes.link}>
              Services
            </Grid>
            <Grid item component={Link} to="/customSoftware" onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}} className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item component={Link} to="/mobileapps" onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}} className={classes.link}>
              iOS/Android App Development
            </Grid>
            <Grid item component={Link} to="/websites" onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}} className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/revolution" onClick={()=>props.setValue(2)} className={classes.link}>
              The Revolution
            </Grid>
            <Grid item component={Link} to="/revolution" onClick={()=>props.setValue(2)} className={classes.link}>
              Vision
            </Grid>
            <Grid item component={Link} to="/revolution" onClick={()=>props.setValue(2)} className={classes.link}>
              Technology
            </Grid>
            <Grid item component={Link} to="/revolution" onClick={()=>props.setValue(2)} className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/about" onClick={()=>props.setValue(3)} className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} to="/about" onClick={()=>props.setValue(3)} className={classes.link}>
              History
            </Grid>
            <Grid item component={Link} to="/about" onClick={()=>props.setValue(3)} className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/contact" onClick={()=>props.setValue(4)} className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
    <img alt='black decorative slash' src={footerAdornment} className={classes.adornment}/>
    <Grid container justifyContent="flex-end" className={classes.socialContainer} spacing={2}>
      <Grid item
        component={"a"}
        href="http://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src={facebook}
          alt="facebok"
          className={classes.icon}
        />
      </Grid>
      <Grid 
        item component={"a"} 
        href="http://www.twitter.com" 
        rel="noopener noreferrer" 
        target="_blank"
      >
        <img 
          src={twitter} 
          alt="twitter" 
          className={classes.icon} 
        />
      </Grid>
      <Grid item 
        component={"a"} 
        href="http://www.instagram.com" 
        rel="noopener noreferrer" 
        target="_blank"
      >
        <img 
          src={instagram} 
          alt="instagram" 
          className={classes.icon} />
      </Grid>
    </Grid>
    </footer>
}

Footer.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
}

export default Footer