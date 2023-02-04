import { Box, Container, Select, TextField, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import TemplateDefault from '../../src/templates/Default';
import { box, container, boxContainer } from './publishStyle';

const Publish = () => {
    const theme = useTheme();
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