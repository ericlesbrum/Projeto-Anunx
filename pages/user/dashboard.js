import {
  Button, CardActions, Container, Grid, Typography, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { getSession } from 'next-auth/react';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';

import useToasty from '@/src/contexts/Toasty';
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect';

import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';
import { buttonAdd, classMedia } from './dashboardStyle';
import { formatCurrency } from '@/src/utils/currency';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Dashboard = ({ products }) => {
  const router = useRouter();
  const { setToasty } = useToasty();
  const [productId, setProductId] = useState();
  const [removedId, setRemovedId] = useState([]);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleClose = () => {
    setOpenConfirmModal(false);
  };

  const handleClickRemove = (id) => {
    setProductId(id);
    setOpenConfirmModal(true);
  };

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  };

  const handleSuccess = () => {
    handleClose();
    setRemovedId([...removedId, productId]);
    setToasty({
      open: true,
      text: 'Anúncio removido com sucesso',
      severity: 'success'
    })
  }

  const handleError = () => {
    setToasty({
      open: true,
      text: 'Ops, ocorreu um error',
      severity: 'error'
    })
  }
  return (
    <>
      <TemplateDefault>
        <Dialog
          open={openConfirmModal}
          onClose={handleClose}
        >
          <DialogTitle>
            Deseja realmente remover este anúncio?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ao confirmar a operação, não poderá voltar atrás.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleConfirmRemove} autoFocus>
              Remover
            </Button>
          </DialogActions>
        </Dialog>
        <Container maxWidth="sm">
          <Typography component="h1" variant='h2' align='center'>
            Menus anúncios
          </Typography>
          <StyledLink href={'/user/publish'} passHref>
            <Button variant='contained' color='primary' sx={buttonAdd}>
              Publicar novo anúncio
            </Button>
          </StyledLink>
        </Container>
        <Container maxWidth='md'>
          {
            products.length === 0 &&
            <Typography component="div" variant="body1" align='center' color='textPrimary' gutterBottom>
              Nenhum anúncio encontrado
            </Typography>
          }
          <Grid container spacing={4}>
            {
              products.map(product => {
                if (removedId.includes(product._id))
                  return null
                return (
                  <Grid key={product._id} item xs={12} md={4} sm={6}>
                    <Card
                      image={`/uploads/${product.files[0].name}`}
                      title={product.title}
                      subtitle={formatCurrency(product.price)}
                      actions={
                        <>
                          <CardActions>
                            <Button size='small' color='primary'>Editar</Button>
                            <Button size='small' color='primary' onClick={() => handleClickRemove(product._id)}>Remover</Button>
                          </CardActions>
                        </>
                      }
                    />
                  </Grid>
                )
              })
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