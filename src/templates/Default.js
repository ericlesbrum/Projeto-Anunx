import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Default = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Header />
            <Box sx={{ p: theme.spacing(6, 0, 6) }}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Default;