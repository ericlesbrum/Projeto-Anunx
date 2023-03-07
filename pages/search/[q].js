import { Box, Container, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';
import ProductsModel from '@/src/models/products';
import Link from 'next/link';
import slugify from 'slugify';
import { formatCurrency } from '@/src/utils/currency';
import { useState } from 'react';
import { useRouter } from 'next/router';


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
const List = ({ products }) => {
    const [search, setSearch] = useState();
    const router = useRouter();
    const theme = useTheme();

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" sx={searchBox(theme.spacing(0, 2))}>
                            <InputBase
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Ex.: iPhone 12 com garantia'
                                fullWidth
                            />
                            <IconButton onClick={() => {
                                router.push({
                                    pathname: `${search}`
                                })
                            }}>
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
                            Encontrados {products.length} anúncios
                        </Typography>
                        <Grid container spacing={4}>
                            {
                                products.map(product => {
                                    const category = slugify(product.category).toLocaleLowerCase();
                                    const title = slugify(product.title).toLocaleLowerCase();

                                    return (
                                        <Grid key={product._id} item xs={12} md={4} sm={6}>
                                            <Link href={`/${category}/${title}/${product._id}`} style={{ textDecoration: 'none' }}>
                                                <Card
                                                    image={`/uploads/${product.files[0].name}`}
                                                    title={product.title}
                                                    subtitle={formatCurrency(product.price)}
                                                />
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ query }) {
    const { q } = query;

    const products = await ProductsModel.find({
        $or: [
            {
                title: {
                    $regex: q,
                    $options: 'i'
                }
            },
            {
                description: {
                    $regex: q,
                    $options: 'i'
                }
            }
        ]
    })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }

}

export default List;