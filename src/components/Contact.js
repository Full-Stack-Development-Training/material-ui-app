/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Dialog,
  DialogContent,
} from "@material-ui/core";

import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";
import mobileBackground from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.arcOrange,
    "$:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid email");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    // setOpen(true)
    // axios
    //   .get("https://sendmail-apphealx7a-uc.a.run.app")
    //   .then(() => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        lg={4}
        xl={3}
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                align={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.arcBlue }}
                align={matchesMD ? "center" : undefined}
              >
                We&apos;re waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.arcBlue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.arcBlue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                multiline
                minRows={10}
                className={classes.message}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                variant="contained"
                className={classes.sendButton}
                // disabled={
                //   name.length === 0 ||
                //   message.length === 0 ||
                //   phoneHelper.length !== 0 ||
                //   emailHelper.length !== 0
                // }
                onClick={() => setOpen(true)}
              >
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={matchesXS ? true : false}
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : "20em",
            paddingRight: matchesXS ? 0 : matchesSM ? "5em" : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                multiline
                minRows={10}
                className={classes.message}
              />
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: "2em" }}
              alignItems="center"
              direction={matchesSM ? "column" : "row"}
            >
              <Grid item>
                <Button
                  color="primary"
                  onClick={() => setOpen(false)}
                  style={{ fontWeight: 300 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  onClick={onConfirm}
                >
                  Send Message
                  <img
                    src={airplane}
                    alt="paper airplane"
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        className={classes.background}
        lg={8}
        xl={9}
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br />
                Revolutionary results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justifyContent={matchesMD ? "center" : undefined}
                item
              >
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn more</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default Contact;
