import { Paper, Container, IconButton, InputBase, Typography, Grid, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

import TemplateDefault from '../src/templates/Default';
import Card from '../src/components/Card';
import dbConnect from '@/src/utils/dbConnect';
import ProductsModel from '@/src/models/products';
import { formatCurrency } from '@/src/utils/currency';
import Link from 'next/link';
import slugify from 'slugify';

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
        mt: '50px'
    }
}
const Home = ({ products }) => {
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
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps() {
    await dbConnect();

    const products = await ProductsModel.aggregate([{
        $sample: { size: 6 }
    }])

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}

export default Home;