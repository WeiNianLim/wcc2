import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from '../theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import ForwardIcon from "@material-ui/icons/NavigateNext";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
  divider: {
    margin: '10px 0 0 0',
    height: 3,
    width: "80px",
    backgroundColor: theme.palette.primary.main
  },
  main: {
    paddingRight: "100px",
    paddingLeft: "100px",
    [theme.breakpoints.down('md')]: {
      paddingRight: "50px",
      paddingLeft: "50px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: "25px",
      paddingLeft: "25px",
    }
  }
}

class About extends Component{
  
  render (){

    const {classes, width} = this.props;
    const url = window.location.href;

    return (
      <section id="aboutMe" style={{ margin: "100px auto 0 auto", paddingTop: "100px", maxWidth: "1000px" }}>
        <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
          About Me
        </Typography>
        <Divider variant="inset" className={classes.divider} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
              Hi there, I'm William! I am a software engineer located in Vancouver, BC.{isWidthUp("sm", width)  && <br />}
              I enjoy building exceptional websites and web application that has {isWidthUp("sm", width)  && <br />}
              awesome user-interface.
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
              I am currently a Full Stack Developer at Porton Health Corp, {isWidthUp("sm", width)  && <br />}
              a vancouver based startup that provides telehealth platform.
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
              Here are some of the Technologies that I am working with daily,
            </Typography>
            <Grid container spacing={3}>
              {isWidthUp("sm", width)
                ? <>
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
                </>
                : <Grid item xs>
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
              }
            </Grid>
          </Grid>
          {isWidthUp("sm", width)
            ? <Grid item xs={12} sm={4}>
              <img
                src={
                  url.includes("http://localhost:3000/")
                    ? "/images/profile.jpg"
                    : "https://weinianlim.github.io/wcc2/images/profile.jpg"
                }
                style={{ margin: "50px auto 0 auto", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
              />
            </Grid>
            : <Grid item xs={12} sm={4} alignItems="center" container>
              <img
                src={
                  url.includes("http://localhost:3000/")
                    ? "/images/profile.jpg"
                    : "https://weinianlim.github.io/wcc2/images/profile.jpg"
                }
                style={{ margin: "50px auto 0 auto", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
              />
            </Grid>
          }
        </Grid>
      </section>
    )
  }
}

export default withWidth()(withStyles(styles)(About))
