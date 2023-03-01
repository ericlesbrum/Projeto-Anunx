import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';

import TemplateDefault from '../../../src/templates/Default';
import { initialValues, validateSchema } from './formValues';

const Signup = () => {
    const theme = useTheme();
    return (
        <>
            <TemplateDefault>
                <Container maxWidth='sm' component='main' sx={{ mb: '30px' }}>
                    <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                        Crie sua conta
                    </Typography>
                    <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                        E anuncie para todo o Brasil
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
                            onSubmit={() => {
                            }}
                        >
                            {
                                ({
                                    touched,
                                    values,
                                    errors,
                                    handleChange,
                                    handleSubmit
                                }) => {
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <FormControl fullWidth error={errors.name && touched.name} sx={{ mb: theme.spacing(1) }}>
                                                <InputLabel>Nome</InputLabel>
                                                <Input
                                                    name='name'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.name && touched.name ? errors.name : null}
                                                </FormHelperText>
                                            </FormControl>

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

                                            <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} sx={{ mb: theme.spacing(1) }}>
                                                <InputLabel>Confirmação de senha</InputLabel>
                                                <Input
                                                    name='passwordConf'
                                                    type='password'
                                                    value={values.passwordConf}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                                </FormHelperText>
                                            </FormControl>
                                            <Button type='submit' variant="contained" color='primary' fullWidth sx={{ margin: theme.spacing(3, 0, 2) }}>
                                                Cadastrar
                                            </Button>
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
export default Signup;