import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center" style={{ paddingTop: "20px" }}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/marcinbohm">
        Marcin Bohm
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#cfe8fc",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

function StyleFooter(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

const Footer = () => {
    return(
        <StyleFooter title="Remember wear a mask!" description="Thanks for reading" />
    )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Footer;
