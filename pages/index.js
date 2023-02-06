import { Paper, Container, IconButton, InputBase, Typography, Button, CardActions, Grid, Card, CardMedia, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

import TemplateDefault from '../src/templates/Default';

const searchContainer = (padding) => {
    return {
        p: padding
    }
}
const searchBox = (padding) => {
    return {
        display: "flex",
        justifyContent: 'center',
        p: padding,
        marginTop: '20px'
    }
}
const cardGrid = (padding) => {
    return {
    }
}
const classMedia = () => {
    return {
        pt: '56%'
    }
}
const Home = () => {
    const theme = useTheme();
    return (
        <TemplateDefault>
            <Container maxWidth="md" sx={searchContainer(theme.spacing(8, 0, 6))}>
                <Typography component="h1" variant='h3' align='center' color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Paper sx={searchBox(theme.spacing(0, 2))}>
                    <InputBase
                        placeholder='Ex.: iPhone 12 com garantia'
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>
            <Container maxWidth="lg" sx={cardGrid(theme.spacing(8, 0, 6))}>
                <Typography component="h2" variant='h4' align='center' color="textPrimary">
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card>
                            <CardMedia
                                image={'https://source.unsplash.com/random'}
                                title="Titulo imagem"
                                sx={classMedia}
                            />
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    Produto X
                                </Typography>
                                <Typography >
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card>
                            <CardMedia
                                image={'https://source.unsplash.com/random'}
                                title="Titulo imagem"
                                sx={classMedia}
                            />
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    Produto X
                                </Typography>
                                <Typography >
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card>
                            <CardMedia
                                image={'https://source.unsplash.com/random'}
                                title="Titulo imagem"
                                sx={classMedia}
                            />
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    Produto X
                                </Typography>
                                <Typography >
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}
export default Home;