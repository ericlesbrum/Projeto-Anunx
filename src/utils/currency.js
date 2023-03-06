const formatCurrency = str => {
    return str.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export {
    formatCurrency
}