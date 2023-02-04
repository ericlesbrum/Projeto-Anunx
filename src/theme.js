import { createTheme, rgbToHex } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        background: {
            default: rgbToHex("rgb(242, 244, 245)"),
            variant: "#ffffff"
        }
    }
})

export default theme;