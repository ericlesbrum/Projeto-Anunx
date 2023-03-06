import { Button, CardActions, Container, Grid, Typography } from '@mui/material';
import { getSession } from 'next-auth/react';

import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect';
import { useRouter } from 'next/router';

import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';
import { formatCurrency } from '@/src/utils/currency';

import { buttonAdd, classMedia } from './dashboardStyle';

const Dashboard = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm">
          <Typography component="h1" variant='h2' align='center'>
            Menus anúncios
          </Typography>
          <Button variant='contained' color='primary' sx={buttonAdd} onClick={() => {
            router.push('/user/publish');
          }}>
            Publicar novo anúncio
          </Button>
        </Container>
        <Container maxWidth='md'>
          <Grid container spacing={4}>
            {
              products.map(product => (
                <Grid key={product._id} item xs={12} md={4} sm={6}>
                  <Card
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    actions={
                      <>
                        <CardActions>
                          <Button size='small' color='primary'>Editar</Button>
                          <Button size='small' color='primary'>Remover</Button>
                        </CardActions>
                      </>
                    }
                  />
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  )
}
Dashboard.requireAuth = true;

export async function getServerSideProps({ req }) {
  const { id } = await getSession({ req });
  await dbConnect();

  const products = await ProductsModel.find({ 'user.id': id });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}
export default Dashboard;