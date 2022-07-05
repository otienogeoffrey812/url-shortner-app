import React from 'react';
import { AppBar, Box, Toolbar, Button, Link } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="sticky"
      sx={{ 
        top: 0,
        backgroundColor: 'white',
        boxShadow: '0 0 0 0',
        width: '80%',
        margin: 'auto'
      }}
    >
      <Toolbar>
        <Box sx={{ height: '40px', marginRight: '16px', fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>
           tiny.to
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { sm: 'block' } }}>
          <Button
              component={Link}
              href="https://github.com/otienogeoffrey812/url-shortner-app"
              target="_blank"
              sx={{ color: '#000', textTransform: 'none', fontSize: '1.2rem' }}
            >
              GitHub
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
