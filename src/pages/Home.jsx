import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
} from "@azure/msal-react";
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export function Home() {
    const classes = useStyles();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://dg-web-functions.azurewebsites.net/api/articles?code=GVFOcy3JDS1T3UzqQxvR/nqsyyqpxXSUGw8I78cpa9EjQZYJZuHc9A==`
            )
            .then((res) => {
                setArticles(res.data);
            });
    }, []);
    return (
        <>
            <AuthenticatedTemplate>
                <Button
                    component={RouterLink}
                    to="/protected"
                    variant="contained"
                    color="primary"
                >
                    Request Access Token
                </Button>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Typography variant="h6">
                    <Box
                        flexWrap="wrap"
                        display="flex"
                        justifyContent="center"
                        flexDirection="row"
                        p={1}
                        m={1}
                    >
                        {articles.map((article, key) => (
                            <Box key={key} p={1}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="http://lorempixel.com/400/200"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {article.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {article.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions style={{display: "flex", justifyContent:"space-between"}}>
                                            <Button
                                                size="small"
                                                color="success"
                                            >
                                                En savoir plus
                                            </Button>
                                            <i style={{ color: "red" }} class="fas fa-trash-alt"></i>
                                    </CardActions>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Typography>
            </UnauthenticatedTemplate>
        </>
    );
}
