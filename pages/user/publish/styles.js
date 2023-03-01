import { rgbToHex } from "@mui/material"

const box = (color, padding) => {
    return {
        backgroundColor: color,
        p: padding
    }
}
const boxContainer = (padding) => {
    return {
        pb: padding
    }
}
export { box, boxContainer }