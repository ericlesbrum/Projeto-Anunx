import { rgbToHex } from "@mui/material"

const thumbsWrapper = () => {
    return {
        display: 'flex',
        flexWrap:'wrap',
        marginTop: '15px'
    }
}
const dropzone = (color) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: '10px',
        margin: '0 15px 15px 0',
        width: 180,
        height: 150,
        backgroundColor: color,
        border: '2px dashed black',
    }
}
const thumb = (image) => {
    return {
        position:'relative',
        width: 180,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${image})`,
        '& .mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: rgbToHex("rgb(0, 0, 0,0.7)"),
            height: '100%'
        },
        '& .mainImage': {
            backgroundColor: 'blue',
            p: '6px 10px',
            position:'absolute',
            bottom:0,
            left:0
        },
        "&:hover .mask": {
            display: 'flex'
        }
    }
}
export {thumbsWrapper, dropzone, thumb }