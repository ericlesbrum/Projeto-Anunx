import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Container, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material';
import styled from 'styled-components';
import { signOut, useSession } from 'next-auth/react';

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
    ml: '8px'
  }
}


export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(false);
  const openUserMenu = Boolean(anchorUserMenu);
  const session = useSession();
  console.log(session.data);
  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <StyledLink href={session.data ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant='outlined' sx={{ marginRight: '10px' }}>
                Anunciar e Vender
              </Button>
            </StyledLink>
            {
              session.data ?
                <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                  {
                    session.data
                      ?
                      <Avatar src={session.data.user.image} />
                      : <AccountCircle />
                  }
                  <Typography sx={userName}>
                    {
                      session.data
                        ?
                        session.data.user.name :
                        null
                    }
                  </Typography>
                </IconButton>
                : null
            }
            <Menu
              open={openUserMenu}
              anchorEl={anchorUserMenu}
              onClose={() => setAnchorUserMenu()}
            >
              <StyledMenuLink href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </StyledMenuLink>
              <StyledMenuLink href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncios</MenuItem>
              </StyledMenuLink>
              <Divider sx={{ m: '8px 0' }} />
              <MenuItem onClick={() => signOut({
                callbackUrl: '/'
              })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}