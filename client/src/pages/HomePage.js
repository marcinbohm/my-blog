import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    home: {
        height: "100%",
    },
    title: {
        backgroundColor: "#384663",
        height: "50px",
        padding: theme.spacing(6, 0),
    },
    main: {
        backgroundColor: "#124663",
        height: "800px",
        padding: theme.spacing(6, 0),
    },

  }));

function HomePageContent(props) {

    const classes = useStyles();
    const {title} = props;

    return(
        <div className={classes.home}>
            <div className={classes.title}>
                <Container maxWidth= "lg">
                    <Typography variant="h3" align="center" gutterBottom>
                        {title}
                    </Typography>
                </Container>
            </div>
            <div className={classes.main}>
                <Container maxWidth= "lg">
                    <Typography align="center">
                        Home page content
                    </Typography>
                </Container>
            </div>
        </div>
    )
}

const HomePage = () => {
    return(
        <HomePageContent title="Blog about my journey" />
    )
}

export default HomePage;