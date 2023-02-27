import { DeleteForever } from '@mui/icons-material';
import {
    Box,
    Container,
    Select,
    TextField,
    Typography,
    Button,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    FormHelperText,
    MenuItem,
    Input
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'

import { Formik } from 'formik';
import * as yup from 'yup';

import TemplateDefault from '../../src/templates/Default';
import { box, boxContainer, thumbsWrapper, dropzone, thumb } from './publishStyle';

let validateSchema = yup.object({
    title: yup.string().min(6, 'Escreva um título maior').max(100, 'Título muito grande').required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
    description: yup.string().min(50, 'Escreva uma descrição com pelo menos 50  caracteres.').required('Campo obrigatório'),
});

const Publish = () => {
    const theme = useTheme();
    const [files, setFiles] = useState([]);
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

            setFiles([...files, ...newFiles]);
        }
    })
    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName);
        setFiles(newFileState);
    }
    return (
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                }}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {
                    (
                        {
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                        }
                    ) => {
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
                                        <FormControl error={errors.title} fullWidth>
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
                                                {errors.title}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.category} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Categoria</InputLabel>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                fullWidth
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
                                                {errors.category}
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
                                        <Typography component="h6" variant="h6" color="textPrimary">
                                            Imagens
                                        </Typography>
                                        <Typography component="div" variant="body2" color="textPrimary">
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        <Box sx={thumbsWrapper}>
                                            <Box sx={dropzone(theme.palette.background.default)} {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <Typography variant="body2" color="textPrimary">
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                files.map((file, index) => ((
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
                                        <FormControl error={errors.description} fullWidth>
                                            <InputLabel sx={{
                                                fontWeight: 400,
                                                color: theme.palette.primary.main
                                            }}>Escreva os detalhes do que está vendendo</InputLabel>
                                            <Input
                                                name='description'
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                            />
                                            <FormHelperText>
                                                {errors.description}
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
                                        <Typography component="h6" variant="h6" color="textPrimary">
                                            Preço
                                        </Typography>
                                        <br /><br />
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel>Valor</InputLabel>
                                            <OutlinedInput
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                label="Valor"
                                            />
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
                                        <TextField
                                            label="Nome"
                                            size='small'
                                            variant="outlined"
                                            fullWidth />
                                        <br /><br />
                                        <TextField
                                            label="E-mail"
                                            size='small'
                                            variant="outlined"
                                            fullWidth />
                                        <br /><br />
                                        <TextField
                                            label="Telefone"
                                            size='small'
                                            variant="outlined"
                                            fullWidth />
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