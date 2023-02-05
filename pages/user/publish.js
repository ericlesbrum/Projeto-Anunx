import { DeleteForever } from '@mui/icons-material';
import { Box, Container, Select, TextField, Typography, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'

import TemplateDefault from '../../src/templates/Default';
import { box, container, boxContainer, thumbsWrapper, dropzone, thumb } from './publishStyle';

const Publish = () => {
    const theme = useTheme();
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
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
            <Container maxWidth='sm' sx={container(theme.spacing(8, 0, 6))}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
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
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Título do Anúncio
                    </Typography>
                    <TextField
                        label="ex.:  Bicileta Aro 18 com garantia"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age'
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value="">Bebê e Criança</option>
                        <option value="">Agricultura</option>
                        <option value="">Moda</option>
                        <option value="">Carros, Motos e Barcos</option>
                        <option value="">Serviços</option>
                        <option value="">Lazer</option>
                        <option value="">Animais</option>
                        <option value="">Moveis, Casa e Jardim</option>
                        <option value="">Imóveis</option>
                        <option value="">Equipamentos e Ferramentas</option>
                        <option value="">Celulares e Tablets</option>
                        <option value="">Esporte</option>
                        <option value="">Tecnologia</option>
                        <option value="">Emprego</option>
                        <option value="">Outros</option>
                    </Select>
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
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Escreva os detalhes do que está vendendo
                    </Typography>
                    <TextField
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth />
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
                    <Button variant="contained" color='primary'>
                        Publicar Anúncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}
export default Publish; 