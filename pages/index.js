import { Paper, Container, IconButton, InputBase, Typography, Grid, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

import TemplateDefault from '../src/templates/Default';
import Card from '../src/components/Card';

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
        mt:'50px'
    }
}
const Home = () => {
    const theme = useTheme();
    return (
        <TemplateDefault>
            <Container maxWidth="md">
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
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="Produto X"
                            subtitle="R$ 60,00"
                            actions={null}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="Produto X"
                            subtitle="R$ 60,00"
                            actions={null}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="Produto X"
                            subtitle="R$ 60,00"
                            actions={null}
                        />
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}
export default Home;