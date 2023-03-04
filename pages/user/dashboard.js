import { Button, CardActions, Container, Grid, Typography } from '@mui/material';

import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';

import { buttonAdd, classMedia } from './dashboardStyle';

const Dashboard = () => {

  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm">
          <Typography component="h1" variant='h2' align='center'>
            Menus anúncios
          </Typography>
          <Button variant='contained' color='primary' sx={buttonAdd}>
            Publicar novo anúncio
          </Button>
        </Container>
        <Container maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sm={6}>
              <Card
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$ 60,00"
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
            <Grid item xs={12} md={4} sm={6}>
              <Card
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$ 60,00"
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
            <Grid item xs={12} md={4} sm={6}>
              <Card
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$ 60,00"
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
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  )
}
Dashboard.requireAuth = true;

export default Dashboard;