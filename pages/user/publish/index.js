import {
    Box,
    Container,
    Select,
    Typography,
    Button,
    FormControl,
    InputLabel,
    InputAdornment,
    FormHelperText,
    MenuItem,
    Input,
    CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';

import TemplateDefault from '../../../src/templates/Default';
import { box, boxContainer } from './styles';
import { initialValues, validateSchema } from './formValues';
import FileUpload from '@/src/components/FileUpload';
import useToasty from '@/src/contexts/Toasty';
import { getSession } from 'next-auth/react';

const Publish = ({ userId, image }) => {
    const theme = useTheme();
    const { setToasty } = useToasty();
    const router = useRouter();

    const formValues = {
        ...initialValues,
    }
    formValues.userId = userId;
    formValues.image = image
    const handleSuccess = () => {
        setToasty({
            open: true,
            text: 'Anúncio cadastrado com sucesso',
            severity: 'success'
        })
        router.push('/user/dashboard');
    }
    const handleError = () => {
        setToasty({
            open: true,
            text: 'Ops, ocorreu um error',
            severity: 'error'
        })
    }
    const handleFormSubmit = (values) => {
        const formData = new FormData();

        for (let field in values) {
            if (field === 'files') {
                values.files.forEach(file => {
                    formData.append('files', file);
                })
            }
            else {
                formData.append(field, values[field]);
            }
        }

        axios.post('/api/products/add', formData)
            .then(handleSuccess)
            .catch(handleError)
    }
    return (
        <TemplateDefault>
            <Formik
                initialValues={formValues}
                validationSchema={validateSchema}
                onSubmit={handleFormSubmit}
            >
                {
                    (
                        {
                            touched,
                            values,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                        }
                    ) => {

                        return (
                            <form onSubmit={handleSubmit}>
                                <Input type="hidden" name="userId" value={values.userId} />
                                <Input type="hidden" name="image" value={values.image} />
                                <Container maxWidth='sm'>
                                    <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                        Publicar Anúncio
                                    </Typography>
                                    <br /><br />
                                    <Typography component="h5" variant="h5" align="center" color="textPrimary">
                                        Quanto mais detalhado, melhor!
                                    </Typography>
                                </Container>
                                <Container maxWidth='md' sx={boxContainer(theme.spacing(3))}>
                                    <Box sx={
                                        box(
                                            theme.palette.background.variant,
                                            theme.spacing(3)
                                        )}
                                    >
                                        <FormControl error={errors.title && touched.title} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Título do Anúncio</InputLabel>
                                            <Input
                                                name='title'
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.category && touched.category} fullWidth>
                                            <InputLabel id='category-select' sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Categoria</InputLabel>
                                            <Select
                                                labelId="category-select"
                                                name="category"
                                                value={values.category}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                                                <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Selecione">Selecione</MenuItem>
                                                <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                <MenuItem value="Serviços">Serviços</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Animais">Animais</MenuItem>
                                                <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                                                <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                <MenuItem value="Esporte">Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value="Emprego">Emprego</MenuItem>
                                                <MenuItem value="Outros">Outros</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {errors.category && touched.category ? errors.category : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md' sx={boxContainer(theme.spacing(3))}>
                                    <Box sx={
                                        box(
                                            theme.palette.background.variant,
                                            theme.spacing(3)
                                        )}
                                    >
                                        <FileUpload
                                            files={values.files}
                                            errors={errors.files}
                                            touched={touched.files}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Box>
                                </Container>

                                <Container maxWidth='md' sx={boxContainer(theme.spacing(3))}>
                                    <Box sx={
                                        box(
                                            theme.palette.background.variant,
                                            theme.spacing(3)
                                        )}
                                    >
                                        <FormControl error={errors.description && touched.description} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Escreva os detalhes do que está vendendo</InputLabel>
                                            <Input
                                                name='description'
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description && touched.description ? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                <Container maxWidth='md' sx={boxContainer(theme.spacing(3))}>
                                    <Box sx={
                                        box(
                                            theme.palette.background.variant,
                                            theme.spacing(3)
                                        )}
                                    >
                                        <FormControl error={errors.price && touched.price} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Preço de venda</InputLabel>
                                            <Input
                                                name='price'
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.price ? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                <Container maxWidth='md' sx={boxContainer(theme.spacing(3))}>
                                    <Box sx={
                                        box(
                                            theme.palette.background.variant,
                                            theme.spacing(3)
                                        )}
                                    >
                                        <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                            Dados de contato
                                        </Typography>
                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Nome</InputLabel>
                                            <Input
                                                name='name'
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>E-mail</InputLabel>
                                            <Input
                                                name='email'
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Telefone</InputLabel>
                                            <Input
                                                name='phone'
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.phone && touched.phone ? errors.phone : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md' sx={boxContainer(theme.spacing(3))}>
                                    <Box textAlign="right">
                                        {
                                            isSubmitting
                                                ? (
                                                    <CircularProgress sx={{ display: 'block', margin: '10px auto' }} />
                                                ) :
                                                <Button type='submit' variant="contained" color='primary'>
                                                    Publicar Anúncio
                                                </Button>
                                        }
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefault>
    )
}
Publish.requireAuth = true;

export async function getServerSideProps({ req }) {
    const { id, user } = await getSession({ req });
    return {
        props: {
            userId: id,
            image: user.image
        },
    }
}
export default Publish; 