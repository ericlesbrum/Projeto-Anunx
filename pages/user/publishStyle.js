const container = (padding) => {
    return {
        p: padding
    }
}
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
export { container, box, boxContainer }