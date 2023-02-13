import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';

import TemplateDefault from '../src/templates/Default';

const box = (color, spacing) => {
    return {
        backgroundColor: color,
        p: spacing,
        mb: spacing
    }
}
const Product = () => {
    const theme = useTheme();
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box sx={box(theme.palette.background.variant, theme.spacing(3))}>
                            <Carousel
                                autoPlay={false}
                                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                                    style: {
                                        color:'white'
                                    }
                                }}
                            >
                                <Card sx={{ height: '100%' }}>
                                    <CardMedia sx={{ p: '30%' }}
                                        image='https://source.unsplash.com/random'
                                        title='Titulo Imagem'
                                    />
                                </Card>
                                <Card sx={{ height: '100%' }}>
                                    <CardMedia sx={{ p: '30%' }}
                                        image='https://source.unsplash.com/random?a=2'
                                        title='Titulo Imagem'
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box sx={box(theme.palette.background.variant, theme.spacing(3))} textAlign='left'>
                            <Typography component='span' variant='caption'>Publicado 16 junho de 2021</Typography>
                            <Typography component='h4' variant='h4' sx={{ m: '15px 0' }}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', mb: '15px' }}>R$ 50.000,00</Typography>
                            <Chip label="Categoria" />
                        </Box>
                        <Box sx={box(theme.palette.background.variant, theme.spacing(3))} textAlign='left'>
                            <Typography component='h6' variant='h6'>
                                Descrição
                            </Typography>
                            <Typography component='p' variant='body2' textAlign='justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa lectus, ultrices ac vehicula id, iaculis ac quam. Aenean nec venenatis urna. Vivamus ullamcorper libero tellus, ac vestibulum nibh fermentum et. Phasellus a ante placerat, scelerisque neque non, mollis nisl. Donec pharetra diam varius, consequat ligula quis, egestas nulla. Integer vitae dapibus nunc. Mauris odio nunc, lacinia a vulputate eu, rhoncus sed arcu. In consequat ex nec sem laoreet porta. Phasellus et fringilla nulla. Donec mattis diam at sem malesuada lacinia.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} sx={box(theme.palette.background.variant, theme.spacing(3))}>
                            <CardHeader
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title="Dev Webson"
                                subheader="thiago@email.com"
                            />
                            <CardMedia
                                image='https://source.unsplash.com/random'
                                title='Thiago Medeiros'
                            />
                        </Card>
                        <Box sx={box(theme.palette.background.variant, theme.spacing(3))}>
                            <Typography component='h6' variant='h6'>
                                Localização
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}
export default Product;