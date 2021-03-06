// import React from 'react'

// export default function SignUpForm(props) {
//     return (
//         <div>
//             <h3>Signup</h3>
//             <form>
//                 <input name="name" value={props.name} onChange={props.handleChange} />
//                 <input name="password" value={props.password} type="password" onChange={props.handleChange} />
//                 <input type="submit" onClick={props.handleSignupFormSubmit} />
//             </form>
//         </div>
//     )
// }

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        JGJ
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const MyTypography = withStyles({
  root: {
    color: 'white', //#FF8E53
    fontFamily:'sans-serif',
  },
  label: {
    textTransform: 'capitalize',
    fontFamily:'sans-serif',

  },
})(Typography);




const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
    color: 'white',
    backgroundImage: 'url(https://i.pinimg.com/originals/87/bb/f9/87bbf9e5064e9f98dfb3337a0594a9d9.jpg)',
},
  },
  paper: {
    marginTop: '25vh',
    padding: 'inherit',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.4)',
    borderRadius: '4em',

  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: '#FF8E53',
    color: '#FE2D85',
  },
  form: { 
    width: '100%', // Fix IE 11 issue. target for form imput stylization
    marginTop: theme.spacing(10),
    color: 'pink',
    // backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%, )',

  },
  submit: {
    margin: theme.spacing(5, 0, 10),
    color: "#FFFFFF",
  },

  
}));


const StyledForm = withStyles({
    root: {
      borderRadius: 3,
      border: 0,
      paddingBottom: '2vh',
      color: 'white',
      height: 48,
      padding: '0 30px',
      background:'#FFFFFF',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

export default function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <DirectionsBoatIcon className={classes.avatar}>
          {/* <DirectionsBoatIcon /> */}
        </DirectionsBoatIcon>
        <MyTypography component="h1" variant="h5">
          Sign up
        </MyTypography>
        <form className={classes.form} noValidate>
         
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="name"
                name="name"
                value={props.name}
                onChange={props.handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={props.password}
                onChange={props.handleChange}

              />
            </Grid>
           
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => {
                props.handleSignupFormSubmit(event);
                history.push("/")
            }}>
            Sign Up
          </StyledButton>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}


