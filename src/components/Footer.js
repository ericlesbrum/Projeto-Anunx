import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";
import styled from 'styled-components';
const footer = (theme) => {
    return {
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: theme.spacing(3),
        pb: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            pt: theme.spacing(6),
            pb: theme.spacing(6),
        }
    }
}
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Footer = () => {
    const theme = useTheme();
    return (
        <Container maxWidth='lg' component='footer' sx={footer(theme)}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <StyledLink href="#" passHref>
                        <Box textAlign='center'>
                            <Typography variant="subtitle1">Ajuda e Contato</Typography>
                        </Box>
                    </StyledLink>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <StyledLink href="#" passHref>
                        <Box textAlign='center'>
                            <Typography variant="subtitle1">Dicas de segurança</Typography>
                        </Box>
                    </StyledLink>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <StyledLink href="#" passHref>
                        <Box textAlign='center'>
                            <Typography variant="subtitle1">Anunciar e Vender</Typography>
                        </Box>
                    </StyledLink>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <StyledLink href="#" passHref>
                        <Box textAlign='center'>
                            <Typography variant="subtitle1">Plano profissional</Typography>
                        </Box>
                    </StyledLink>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Footer;