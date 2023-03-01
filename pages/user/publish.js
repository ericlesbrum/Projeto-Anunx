import { DeleteForever } from '@mui/icons-material';
import {
    Box,
    Container,
    Select,
    Typography,
    Button,
    IconButton,
    FormControl,
    InputLabel,
    InputAdornment,
    FormHelperText,
    MenuItem,
    Input
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone'

import { Formik } from 'formik';
import * as yup from 'yup';

import TemplateDefault from '../../src/templates/Default';
import { box, boxContainer, thumbsWrapper, dropzone, thumb } from './publishStyle';

let validateSchema = yup.object({
    title: yup.string().min(6, 'Escreva um título maior').max(100, 'Título muito grande').required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
    description: yup.string().min(50, 'Escreva uma descrição com pelo menos 50  caracteres.').required('Campo obrigatório'),
    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email("Digite um e-mail válido").required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo obrigatório'),
});

const Publish = () => {
    const theme = useTheme();
    return (
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',
                    email: '',
                    name: '',
                    phone: '',
                    files: [],
                }}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {
                    (
                        {
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }
                    ) => {
                        const { getRootProps, getInputProps } = useDropzone({
                            accept: {
                                'image/*': ['.jpeg', '.jpg', '.png'],
                            },
                            onDrop: (acceptedFile) => {
                                const newFiles = acceptedFile.map(file => {
                                    return Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })
                                })

                                setFieldValue('files', [...values.files, ...newFiles]);
                            }
                        })
                        const handleRemoveFile = fileName => {
                            const newFileState = values.files.filter(file => file.name !== fileName);
                            setFieldValue('files', newFileState);
                        }
                        return (
                            <form onSubmit={handleSubmit}>
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
                                        <Typography component="h6" variant="h6" color={errors.files && touched.files ? 'error' : "textPrimary"}>
                                            Imagens
                                        </Typography>
                                        <Typography component="div" variant="body2" color={errors.files && touched.files ? 'error' : "textPrimary"}>
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        {
                                            errors.files && touched.files
                                                ? <Typography variant='body2' color="error" gutterBottom>{errors.files}</Typography>
                                                : null
                                        }
                                        <Box sx={thumbsWrapper}>
                                            <Box sx={dropzone(theme.palette.background.default)} {...getRootProps()}>
                                                <input name='files' {...getInputProps()} />
                                                <Typography variant="body2" color={errors.files && touched.files ? 'error' : "textPrimary"}>
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                values.files.map((file, index) => ((
                                                    <Box
                                                        key={file.name}
                                                        sx={thumb(`${file.preview}`)}>
                                                        {
                                                            index === 0 ?
                                                                <Box className='mainImage'>
                                                                    <Typography variant="body" color="secondary">
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                                : null
                                                        }
                                                        <Box className="mask">
                                                            <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize='large' />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                )))
                                            }
                                        </Box>
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
                                        <FormControl error={errors.email} fullWidth>
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
                                        <FormControl error={errors.phone} fullWidth>
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
                                        <Button type='submit' variant="contained" color='primary'>
                                            Publicar Anúncio
                                        </Button>
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
export default Publish; 