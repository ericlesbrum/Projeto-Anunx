import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import TemplateDefault from '../../src/templates/Default';

import { useTheme } from '@mui/material/styles';

import { container, buttonAdd, classMedia } from './dashboardStyle';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm" sx={container}>
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
                <CardActions>
                  <Button size='small' color='primary'>Editar</Button>
                  <Button size='small' color='primary'>Remover</Button>
                </CardActions>
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
                <CardActions>
                  <Button size='small' color='primary'>Editar</Button>
                  <Button size='small' color='primary'>Remover</Button>
                </CardActions>
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
                <CardActions>
                  <Button size='small' color='primary'>Editar</Button>
                  <Button size='small' color='primary'>Remover</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  )
}
