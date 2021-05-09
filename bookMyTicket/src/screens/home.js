import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchBar from "material-ui-search-bar";
import { movies } from '../assets/movieList';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 100,
    },
    searchBar: {
        margin: 40,
        marginTop: 100,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Home() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [value, setValue] = React.useState('');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let filterMovies = movies;

    return (
        <>
            <SearchBar
                className={classes.searchBar}
                value={value}
                onChange={
                    (newValue) => setValue(newValue)
                }
                placeholder="Search Movie By Name"
                onRequestSearch={
                    filterMovies = movies.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase()) == true)
                }
            />
            <Container>
                Drama
                <Row className="justify-content-center justify-content-md-start" style={{ marginBottom: "50px" }}>
                    {
                        filterMovies.filter(movie => movie.genre.includes("Drama") == true).length > 0 ? (
                            <>
                                {
                                    filterMovies.filter(movie => movie.genre.includes("Drama") == true).map((movie, id) => {
                                        return (
                                            <Col xs={9} sm={6} md={4} lg={4} xl={3} >
                                                {/* breakpoitn for 475px also */}
                                                <Card className={classes.root} key={id}>
                                                    <CardHeader
                                                        title={movie.name}
                                                        subheader={movie.releaseDate}
                                                    />
                                                    <CardMedia
                                                        className={classes.media}
                                                        image="https://via.placeholder.com/400"
                                                        title="Movie Banner"
                                                    />
                                                    <CardActions disableSpacing>
                                                        <IconButton aria-label="add vote">
                                                            <FavoriteIcon />
                                                        </IconButton>
                                                        <IconButton aria-label="go to shows">
                                                            <MovieIcon />
                                                            {/* Shows */}
                                                        </IconButton>
                                                        <IconButton
                                                            className={clsx(classes.expand, {
                                                                [classes.expandOpen]: expanded,
                                                            })}
                                                            onClick={handleExpandClick}
                                                            aria-expanded={expanded}
                                                            aria-label="show more"
                                                        >
                                                            <ExpandMoreIcon />
                                                        </IconButton>
                                                    </CardActions>
                                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                        <CardContent>
                                                            <Typography variant="body1" color="textSecondary" component="i">
                                                                {movie.genre}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                {movie.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <>
                                Stay Home! Stay Safe.
                            </>
                        )
                    }
                </Row>

                Action
                <Row className="justify-content-center justify-content-md-start" style={{ marginBottom: "50px" }}>
                    {
                        filterMovies.filter(movie => movie.genre.includes("Action") == true).length > 0 ? (
                            <>
                                {
                                    filterMovies.filter(movie => movie.genre.includes("Action") == true).map((movie, id) => {
                                        return (
                                            <Col xs={9} sm={6} md={4} lg={4} xl={3}>
                                                {/* breakpoitn for 475px also */}
                                                <Card className={classes.root} key={id}>
                                                    <CardHeader
                                                        title={movie.name}
                                                        subheader={movie.releaseDate}
                                                    />
                                                    <CardMedia
                                                        className={classes.media}
                                                        image="https://via.placeholder.com/400"
                                                        title="Movie Banner"
                                                    />
                                                    <CardActions disableSpacing>
                                                        <IconButton aria-label="add vote">
                                                            <FavoriteIcon />
                                                        </IconButton>
                                                        <IconButton aria-label="go to shows">
                                                            <MovieIcon />
                                                            {/* Shows */}
                                                        </IconButton>
                                                        <IconButton
                                                            className={clsx(classes.expand, {
                                                                [classes.expandOpen]: expanded,
                                                            })}
                                                            onClick={handleExpandClick}
                                                            aria-expanded={expanded}
                                                            aria-label="show more"
                                                        >
                                                            <ExpandMoreIcon />
                                                        </IconButton>
                                                    </CardActions>
                                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                        <CardContent>
                                                            <Typography variant="body1" color="textSecondary" component="i">
                                                                {movie.genre}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                {movie.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <>
                                Stay Home! Stay Safe.
                            </>
                        )
                    }
                </Row>

                SciFi
                <Row className="justify-content-center justify-content-md-start" style={{ marginBottom: "50px" }}>
                    {
                        filterMovies.filter(movie => movie.genre.includes("Scifi") == true).length > 0 ? (
                            <>
                                {
                                    filterMovies.filter(movie => movie.genre.includes("Scifi") == true).map((movie, id) => {
                                        return (
                                            <Col xs={9} sm={6} md={4} lg={4} xl={3}>
                                                {/* breakpoitn for 475px also */}
                                                <Card className={classes.root} key={id}>
                                                    <CardHeader
                                                        title={movie.name}
                                                        subheader={movie.releaseDate}
                                                    />
                                                    <CardMedia
                                                        className={classes.media}
                                                        image="https://via.placeholder.com/400"
                                                        title="Movie Banner"
                                                    />
                                                    <CardActions disableSpacing>
                                                        <IconButton aria-label="add vote">
                                                            <FavoriteIcon />
                                                        </IconButton>
                                                        <IconButton aria-label="go to shows">
                                                            <MovieIcon />
                                                            {/* Shows */}
                                                        </IconButton>
                                                        <IconButton
                                                            className={clsx(classes.expand, {
                                                                [classes.expandOpen]: expanded,
                                                            })}
                                                            onClick={handleExpandClick}
                                                            aria-expanded={expanded}
                                                            aria-label="show more"
                                                        >
                                                            <ExpandMoreIcon />
                                                        </IconButton>
                                                    </CardActions>
                                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                        <CardContent>
                                                            <Typography variant="body1" color="textSecondary" component="i">
                                                                {movie.genre}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                {movie.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <>
                                Stay Home! Stay Safe.
                            </>
                        )
                    }
                </Row>
            </Container>
        </>
    );
}
