import { Box, Container, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';


const searchBox = (padding) => {
    return {
        display: "flex",
        justifyContent: 'center',
        p: padding,
        marginTop: '20px'
    }
}
const cardGrid = () => {
    return {
        mt: '50px'
    }
}
const box = (color, spacing) => {
    return {
        backgroundColor: color,
        p: spacing,
        mb: spacing
    }
}
const List = () => {
    const theme = useTheme();
    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" sx={searchBox(theme.spacing(0, 2))}>
                            <InputBase
                                placeholder='Ex.: iPhone 12 com garantia'
                                fullWidth
                            />
                            <IconButton type='submit'>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
                <br />
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={box(theme.palette.background.variant, theme.spacing(3))}>
                        <Typography component="h6" variant="h6">
                            Anúncios
                        </Typography>
                        <Typography component="span" variant='subtitle2'>
                            Encontrados 200 anúncios
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random'}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random'}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random'}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}
export default List;