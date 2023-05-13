import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Button, Typography, Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import CallToAction from './ui/CallToAction';
import ButtonArrow from './ui/ButtonArrow'
import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '..//assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
// import { Services } from './Services';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '30em'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    },
  },
  herotTextContainer:{
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: '2em'
    }
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down("sm")]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%'
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
}))

const LandingPage = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const defaultOpions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
          prederveAspectRatio: 'xMidYMid slice'
      }
  }

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item> {/*-----Hero Block-----*/}
        <Grid container justifyContent='flex-end' alignItems='center' direction="row">
          <Grid sm item className={classes.herotTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing West coast Technology<br />to the Midwest
            </Typography>
            <Grid container justifyContent='center' className={classes.buttonContainer}>
              <Grid item>
                <Button 
                  component={Link}
                  to='/estimate'
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to='/revolution'
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{marginRight: 10}}>Learn more</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOpions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*-----Custom Software Block-----*/}
        <Grid container direction='row' justifyContent={matchesSM ? 'center' : undefined} className={classes.serviceContainer}>
          <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
            <Typography variant='h4'>
              Custom Software Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save energy. Save time. Save money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to {" "}
              <span style={{marginRight: 10}} className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customSoftware'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
            >
              <span style={{marginRight: 10}}>
                Learn more
              </span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img alt='custom software icon' src={customSoftwareIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*-----iOS/Android Block-----*/}
        <Grid container direction='row' justifyContent={matchesSM ? 'center' : 'flex-end'} className={classes.serviceContainer}>
          <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant='h4'>
              iOS/Android App Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend functionality. Extend access. Increase engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with eirther mobile platform. 
            </Typography>
            <Button
              component={Link}
              to='/mobileApps'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
            >
              <span style={{marginRight: 10}}>
                Learn more
              </span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
            <img alt='mobile phone icon' src={mobileAppsIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*-----Websites Block-----*/}
        <Grid container direction='row' justifyContent={matchesSM ? 'center' : undefined} className={classes.serviceContainer}>
          <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
            <Typography variant='h4'>
              Website Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
            >
              <span style={{marginRight: 10}}>
                Learn more
              </span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img alt='website icon' src={websiteIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*-----The Revolution Block-----*/}
        <Grid container alignItems='center' justifyContent='center' style={{height: '100em', marginTop: '12em'}}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction='column' style={{textAlign: "center"}}>
                <Grid item>
                  <Typography variant='h3' gutterBottom>The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a recipe for a revolution.
                  </Typography>
                  <Button
                  component={Link}
                  to='/revolution'
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => props.setValue(2)}
                  >
                    <span style={{marginRight: 10}}>Learn more</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item> {/*-----Information Block-----*/}
        <Grid
          container
          direction='row'
          style={{height: '80em'}}
          alignItems='center'
          className={classes.infoBackground}        >
          <Grid
            item
            container
            style={{textAlign: matchesXS ? 'center' : 'inherit'}}
            direction={matchesXS ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em'}}
            >
              <Grid
                container
                style={{marginBottom: matchesXS ? "10em" : 0}}
                direction='column'
              >
                <Typography
                  variant='h2'
                  style={{color: 'white'}}
                >
                  About Us
                </Typography>
                <Typography
                  variant='subtitle2' 
                >
                  Let&apos;s get personal
                </Typography>
                <Grid item>
                  <Button
                  component={Link}
                  to='/about'
                  variant='outlined'
                  style={{color: 'white', borderColor: 'white'}}
                  className={classes.learnButton}
                  onClick={() => props.setValue(3)}
                  >
                    <span style={{marginRight: 10}}>
                      Learn more
                    </span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm style={{marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right'}}>
              <Grid container direction='column'>
                <Typography variant='h2' style={{color: 'white'}}>Contact Us</Typography>
                <Typography variant='subtitle2'>Say hello! <span role='image' aria-label='waving hand'>👋</span></Typography>
                <Grid item>
                  <Button
                  component={Link}
                  to='/contact'
                  variant='outlined'
                  style={{color: 'white', borderColor: 'white'}}
                  className={classes.learnButton}
                  onClick={() => props.setValue(4)}
                  >
                    <span style={{marginRight: 10}}>
                      Learn more
                    </span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*-----Call To Action Block-----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

LandingPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
}

export default LandingPage