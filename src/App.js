import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from './theme.js'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ForwardIcon from "@material-ui/icons/NavigateNext";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    width: "100%",
    right: 0,
    left: 0
  },
  contactButtonRoot: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    padding: "15px 30px",
  },
  menuButton: {
    display: 'flex',
    color: theme.palette.secondary.light
  },
  divider: {
    margin: '10px 0 0 0',
    height: 3,
    width: "80px",
    backgroundColor: theme.palette.primary.main
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonRoot: {
    color: theme.palette.secondary.light
  },
  buttonLabel: {
    textTransform: 'capitalize',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    paddingRight: "100px",
    paddingLeft: "100px",
    [theme.breakpoints.down('md')]: {
      paddingRight: "50px",
      paddingLeft: "50px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: "10px",
      paddingLeft: "10px",
    }
  },
  anchorTag: {
    textDecoration: "none",
    color: theme.palette.secondary.light,
    paddingLeft: 10,
    paddingRight: 10,
    "&:hover": {
      fontWeight: "600",
      color: theme.palette.primary.main
    }
  },
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class App extends Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };

  render() {

    const {
      classes,
      width
    } = this.props;
    const url = window.location.href;

    return (
      <div style={{ background: theme.palette.secondary.dark, margin: "0" }}>
        <HideOnScroll {...this.props}>
          <AppBar className={classes.appBar}>
            {isWidthUp("sm", width) ? (
              <Toolbar>
                <a
                  href="#landing"
                  className={classes.anchorTag}
                ><img src={
                  url === "http://localhost:3000/"
                    ? "/images/logo.png"
                    : "https://weinianlim.github.io/wcc2/images/logo.png"
                }
                  style={{
                    width: "auto",
                    maxHeight: "45px"
                  }} /></a>
                <div className={classes.grow}></div>
                <a
                  href="#aboutMe"
                  className={classes.anchorTag}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className={classes.anchorTag}
                >
                  Experience
                </a>
                {/* <a
                  href="#work"
                  className={classes.anchorTag}
                >
                  Work
                </a> */}
                <a
                  href="#contact"
                  className={classes.anchorTag}
                >
                  Contact
                </a>
                <a
                  href={
                    url == "http://localhost:3000/"
                      ? "/images/resume.pdf"
                      : "https://weinianlim.github.io/wcc2/images/resume.pdf"
                  }
                  target="_blank"
                  className={classes.anchorTag}
                >
                  Resume
                </a>
              </Toolbar>
            ) : (
                <Toolbar>
                  <img
                    src={
                      url === "http://localhost:3000/"
                        ? "/images/logo.png"
                        : "https://weinianlim.github.io/wcc2/images/logo.png"
                    }
                    style={{
                      width: "auto",
                      maxHeight: "45px"
                    }} />
                  <div className={classes.grow}></div>
                  <IconButton className={classes.menuButton} onClick={this.handleDrawerOpen}>
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              )}
          </AppBar>
        </HideOnScroll>
        <Drawer open={this.state.open} onClose={this.handleDrawerClose} anchor='right'>
          <List>
            <ListItem><a
              href="#aboutMe"
              className={classes.anchorTag}
            >
              About
                </a></ListItem>
            <ListItem><a
              href="#experience"
              className={classes.anchorTag}
            >
              Experience
                </a></ListItem>
            {/* <ListItem><a
                  href="#work"
                  className={classes.anchorTag}
                >
                  Work
                </a></ListItem> */}
            <ListItem><a
              href="#contact"
              className={classes.anchorTag}
            >
              Contact
                </a></ListItem>
            <ListItem>
            <a
                  href={
                    url == "http://localhost:3000/"
                      ? "/images/resume.pdf"
                      : "https://weinianlim.github.io/wcc2/images/resume.pdf"
                  }
                  target="_blank"
                  className={classes.anchorTag}
                >
                  Resume
                </a>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.main}>
          <section id="landing" style={{ paddingTop: "150px" }}>
            <Typography variant="h1" style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.primary.main }}>
              William Lim
            </Typography>
            <Typography variant="h1" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "450", color: theme.palette.secondary.light }}>
              I build Web Application
            </Typography>
            <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
              I am a software engineer based in Vancouver, BC specializing in <br /> building exceptional, responsive and high quality <br /> Websites and Web Applications
            </Typography>
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.contactButtonRoot,
                label: classes.buttonLabel
              }}
              color="theme.palette.primary.main"
              style={{ marginTop: "50px", marginLeft: "0px" }}
            >
              Let's talk
            </Button>
          </section>
          <section id="aboutMe" style={{ marginTop: "100px", paddingTop: "100px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              About Me
            </Typography>
            <Divider variant="inset" className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  Hi there, I'm William! I am a software engineer located in Vancouver, BC.<br />
                  I enjoy building exceptional websites and web application that has <br />
                  awesome user-interface.
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  I am currently a Full Stack Developer at Porton Health Corp, <br />
                  a vancouver based startup that provides telehealth platform.
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  Here are some of the Technologies that I am workign with daily,
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <List >
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Javascript(ES5 & ES6)
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          React
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Material-UI
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List >
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          HTML & CSS
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Node.js
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Material-UI
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src={
                    url == "http://localhost:3000/"
                      ? "/images/profile.jpg"
                      : "https://weinianlim.github.io/wcc2/images/profile.jpg"
                  }
                  style={{ marginTop: "50px", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", marginLeft: "auto", marginRight: "auto" }}
                />
              </Grid>
            </Grid>
          </section>
          <section id="experience" style={{ marginTop: "100px", paddingTop: "100px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              Places I've worked
            </Typography>
            <Divider variant="inset" className={classes.divider} style={{ marginBottom: "50px" }} />
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                  Full Stack Developer @ Porton Health Corp
                </Typography>
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Developed and maintained software features in Porton Health web app using React, ES6, HTML and CSS
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Worked closely with other developers to ensure thoughtful and coherent user experience across Porton’s web app
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Proposed, redesigned and built a responsive blog section using Material-UI, which helped improve user traffic by 50%
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Implemented OSCAR EMR integration with Portion’s web app which increased potential customers by 300%
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Tested Web App in various browser and devices to ensure cross-browser compatibility and mobile responsiveness
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                  Software Engineer @ Clarius Mobile Health
                </Typography>
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Architected and developed Google Cast feature in Clarius cross platform mobile app in Qt and Java
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Researched and built Speech Recognition feature with CMUSphinx as an online/offline speech control for Clarius wireless portable ultrasound probe
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Maintained software functionality periodically to ensure the reproducibility of the software within Linux system
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Implemented and shipped WiFi-Direct autoconnect feature which allowed devices to connect to wireless ultrasound probe seamlessly
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </section>
          {/* <section style={{ marginTop: "200px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              Few of my work
            </Typography>
            <Divider variant="inset" className={classes.divider} style={{marginBottom: "50px"}}/>
          </section> */}
          <section id="contact" style={{ marginTop: "100px", paddingTop: "100px" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h2" style={{ marginTop: "10px", textAlign: "center", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.primary.light }}>
                  Let's Get In Touch!
                </Typography>
              </Grid>
              <Grid item>
                <Divider variant="inset" className={classes.divider} />
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ maxWidth: "700px", textAlign: "center", marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  I am currently looking for new existing opportunities, whether it is for a position or project or just to say hi, feel free to shoot me an email
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.button}
                  classes={{
                    root: classes.contactButtonRoot,
                    label: classes.buttonLabel
                  }}
                  color="theme.palette.primary.main"
                  style={{ marginTop: "50px", marginLeft: "0px" }}
                >
                  Say Hi
                </Button>
              </Grid>
            </Grid>
          </section>
          <section style={{ textAlign: "center" }}>
            <Typography variant="subtitle1" style={{ marginTop: "180px", paddingBottom: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.light }}>
              Designed and built by William Lim
            </Typography>
          </section>
        </main>
      </div>
    )
  }
}

export default withWidth()(withStyles(styles)(App))

