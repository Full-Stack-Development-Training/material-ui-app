import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/styles';

import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({

}))

const LandingPage = () => {
  const classes = useStyles()

  const defaultOpions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
          prederveAspectRatio: 'xMidYMid slice'
      }
  }

  return <Lottie options={defaultOpions} height={"100%"} width={"100%"} />

}

export default LandingPage