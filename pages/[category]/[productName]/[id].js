import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';

import TemplateDefault from '../../../src/templates/Default';
import ProductsModel from '../../../src/models/products'
import dbConnect from '../../../src/utils/dbConnect';
import { formatCurrency } from '@/src/utils/currency';

const box = (color, spacing) => {
    return {
        backgroundColor: color,
        p: spacing,
        mb: spacing
    }
}
const Product = ({ product }) => {
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
                                        color: 'white'
                                    }
                                }}
                            >
                                {
                                    product.files.map(file => (
                                        <Card sx={{ height: '100%' }}
                                            key={file.name}>
                                            <CardMedia sx={{ p: '30%' }}
                                                image={`/uploads/${file.name}`}
                                                title={product.title}
                                            />
                                        </Card>
                                    ))
                                }
                            </Carousel>
                        </Box>
                        <Box sx={box(theme.palette.background.variant, theme.spacing(3))} textAlign='left'>
                            <Typography component='span' variant='caption'>Publicado 16 junho de 2021</Typography>
                            <Typography component='h4' variant='h4' sx={{ m: '15px 0' }}>{product.title}</Typography>
                            <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', mb: '15px' }}>{formatCurrency(product.price)}</Typography>
                            <Chip label="Categoria" />
                        </Box>
                        <Box sx={box(theme.palette.background.variant, theme.spacing(3))} textAlign='left'>
                            <Typography component='h6' variant='h6'>
                                Descrição
                            </Typography>
                            <Typography component='p' variant='body2' textAlign='justify'>
                                {product.description}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} sx={box(theme.palette.background.variant, theme.spacing(3))}>
                            <CardHeader
                                avatar={
                                    <Avatar src={product.user.image}>
                                        {
                                            product.user.image || product.user.name[0]
                                        }
                                    </Avatar>
                                }
                                title={product.user.name}
                                subheader={product.user.email}
                            />
                            <CardMedia
                                image={product.user.image}
                                title={product.user.name}
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

export async function getServerSideProps({ query }) {
    const { id } = query;

    await dbConnect();

    const product = await ProductsModel.findOne({ _id: id });

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}

export default Product;