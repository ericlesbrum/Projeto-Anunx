import { Box, Button, CircularProgress, Container, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';

import TemplateDefault from '../../../src/templates/Default';
import { initialValues, validateSchema } from './formValues';
import useToasty from '@/src/contexts/Toasty';

const Signin = () => {
  const theme = useTheme();
  const { setToasty } = useToasty();
  const router = useRouter();

  const handleFormSubmit = async values => {
  };
  return (
    <>
      <TemplateDefault>
        <Container maxWidth='sm' component='main' sx={{ mb: '30px' }}>
          <Typography component='h1' variant='h2' align='center' color='textPrimary'>
            Entre na sua conta
          </Typography>
        </Container>
        <Container maxWidth='md'>
          <Box
            sx={
              {
                backgroundColor: theme.palette.background.variant,
                p: theme.spacing(3)
              }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={handleFormSubmit}
            >
              {
                ({
                  touched,
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  isSubmitting
                }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <FormControl fullWidth error={errors.email && touched.email} sx={{ mb: theme.spacing(1) }}>
                        <InputLabel>E-mail</InputLabel>
                        <Input
                          name='email'
                          type='email'
                          value={values.email}
                          onChange={handleChange}
                        />
                        <FormHelperText>
                          {errors.email && touched.email ? errors.email : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl fullWidth error={errors.password && touched.password} sx={{ mb: theme.spacing(1) }}>
                        <InputLabel>Senha</InputLabel>
                        <Input
                          name='password'
                          type='password'
                          value={values.password}
                          onChange={handleChange}
                        />
                        <FormHelperText>
                          {errors.password && touched.password ? errors.password : null}
                        </FormHelperText>
                      </FormControl>

                      {
                        isSubmitting ?
                          (
                            <CircularProgress sx={{ display: 'block', margin: '10px auto' }} />
                          ) :
                          (
                            <Button type='submit' variant="contained" color='primary' fullWidth sx={{ margin: theme.spacing(3, 0, 2) }}>
                              Entrar
                            </Button>
                          )
                      }

                    </form>
                  )
                }
              }
            </Formik>
          </Box>
        </Container>
      </TemplateDefault>
    </>
  )
}
export default Signin;