import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Container, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const StyledMenuLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const userName = () => {
  return {
    ml: '6px'
  }
}


export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(false);
  const openUserMenu = Boolean(anchorUserMenu);
  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <StyledLink href="/user/publish" passHref>
              <Button color="inherit" variant='outlined'>
                Anunciar e Vender
              </Button>
            </StyledLink>
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ?
                  <Avatar src='' />
                  : <AccountCircle />
              }
              <Typography sx={userName}>
                Teste testado
              </Typography>
            </IconButton>
            <Menu
              open={openUserMenu}
              anchorEl={anchorUserMenu}
              onClose={() => setAnchorUserMenu()}
            >
              <StyledMenuLink href="/user/publish" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </StyledMenuLink>
              <StyledMenuLink href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncios</MenuItem>
              </StyledMenuLink>
              <Divider sx={{ m: '8px 0' }} />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}