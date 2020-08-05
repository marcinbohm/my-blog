import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      backgroundColor: "#384663",
      height: "50px",
      padding: theme.spacing(6, 0),
    },
  }));

function Title(props) {
    const classes = useStyles();
    const {title} = props;

    return(
        <div className={classes.title}>
            <Container maxWidth= "lg">
                <Typography variant="h3" align="center" gutterBottom>
                    {title}
                </Typography>
            </Container>
        </div>
    )
}

const HomePage = () => {
    return(
        <Title title="Blog about my journey" />
    )
}

export default HomePage;